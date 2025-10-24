// Main game JavaScript
let game;
let currentLevel = 1;
let isTransitioning = false; // Flag to prevent auto-pause during level transitions

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Get level from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const levelParam = urlParams.get('level');

    if (levelParam) {
        currentLevel = parseInt(levelParam);
    }

    // Initialize game
    game = new GameEngine('gameCanvas');
    game.loadLevel(currentLevel);

    // Start game
    showLoadingScreen();
    
    // Set transitioning flag early to prevent any premature auto-pause
    isTransitioning = true;
    
    setTimeout(() => {
        hideLoadingScreen();
        game.start();
        // Clear transition flag after game is fully started and settled
        setTimeout(() => {
            isTransitioning = false;
        }, 2000);
    }, 6000);

    // Setup event listeners
    setupGameControls();
    setupAudio();
});

// Show loading screen
function showLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen fixed inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center z-50 overflow-hidden';
    loadingScreen.id = 'loadingScreen';

    const levelData = historicalData.find(d => d.id === currentLevel);

    // Tạo các ngôi sao
    let starsHTML = '';
    for (let i = 0; i < 50; i++) {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        starsHTML += `
            <div class="absolute rounded-full bg-white animate-pulse" 
                 style="left: ${left}%; 
                        top: ${top}%; 
                        width: ${size}px; 
                        height: ${size}px;
                        animation-duration: ${duration}s;
                        animation-delay: ${delay}s;
                        box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);">
            </div>
        `;
    }

    loadingScreen.innerHTML = `
        <!-- Stars background -->
        <div class="absolute inset-0 pointer-events-none">
            ${starsHTML}
        </div>

        <!-- Main loading card với border -->
        <div class="relative max-w-2xl w-full mx-8 bg-black/40 backdrop-blur-md border-4 border-yellow-500/70 rounded-2xl shadow-2xl p-8">
            <div class="text-center space-y-6 mt-8">
                <!-- Header với hiệu ứng máy bay -->
                <div class="relative mb-8">
                    <div class="absolute inset-0 flex items-center justify-center opacity-20">
                        <svg class="w-32 h-32 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                    </div>
                    <h2 class="text-5xl font-bold text-yellow-400 drop-shadow-lg mb-2">
                        Màn ${currentLevel} - ${levelData ? levelData.date : 'Loading...'}
                    </h2>
                </div>

                <!-- Tiêu đề nhiệm vụ -->
                <div class="bg-black/30 backdrop-blur-sm border-2 border-yellow-600/50 rounded-lg p-6 shadow-2xl">
                    <h3 class="text-2xl font-bold text-white mb-3">
                        ${levelData ? levelData.title : 'Đang tải...'}
                    </h3>
                    <p class="text-gray-300 text-base leading-relaxed">
                        ${levelData ? levelData.description : ''}
                    </p>
                </div>

                <!-- Loading bar -->
                <div class="space-y-3">
                    <div class="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden border border-yellow-600/30 shadow-inner">
                        <div class="loading-fill h-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 rounded-full transition-all duration-300 shadow-lg" 
                             id="loadingFill" 
                             style="width: 0%">
                        </div>
                    </div>
                    <p class="text-yellow-300 text-lg font-semibold animate-pulse">
                        ⚡ Chuẩn bị chiến đấu...
                    </p>
                </div>

                <!-- Quote lịch sử -->
                ${levelData ? `
                    <div class="mt-6 pt-6 border-t border-yellow-600/30 mb-6">
                        <p class="text-gray-400 italic text-sm">
                            "${levelData.historicalQuote}"
                        </p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    document.body.appendChild(loadingScreen);

    // Animate loading bar with smoother progression
    let progress = 0;
    const interval = setInterval(() => {
        progress += 2.5;
        const fillElement = document.getElementById('loadingFill');
        if (fillElement) {
            fillElement.style.width = progress + '%';
        }

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

// Hide loading screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }
}

// Setup game controls
function setupGameControls() {
    // Pause/Resume with spacebar
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            togglePause();
        }

        if (e.code === 'Escape') {
            if (!game.isPaused) {
                togglePause();
            }
        }
    });

    // Prevent context menu on canvas
    document.getElementById('gameCanvas').addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
}

// Setup audio
function setupAudio() {
    const gameMusic = document.getElementById('gameMusic');

    // Auto-play music when user interacts with the page
    document.addEventListener('click', function playMusic() {
        if (soundEnabled) {
            gameMusic.play().catch(e => console.log('Cannot play music:', e));
        }
        document.removeEventListener('click', playMusic);
    }, { once: true });

    gameMusic.volume = 0.3;
}

// Toggle pause
function togglePause() {
    if (!game) return;

    if (game.isPaused) {
        resumeGame();
    } else {
        pauseGame();
    }
}

// Pause game
function pauseGame() {
    if (!game) return;

    game.pause();
    showPauseOverlay();
}

// Resume game
function resumeGame() {
    if (!game) return;

    game.resume();
    hideOverlay();
}

// Restart level
function restartLevel() {
    if (!game) return;

    // Set transitioning flag to prevent auto-pause during restart
    isTransitioning = true;

    // Use the same approach as playAgain() - reload the page with current level
    // This ensures a complete clean restart just like the working "chơi lại" after game completion
    window.location.href = `game.html?level=${currentLevel}`;
}

// Go to home page
function goHome() {
    window.location.href = '../index.html';
}

// Go to next level
function nextLevel() {
    console.log('nextLevel() called, current level:', currentLevel);

    if (!game) {
        console.error('Game object not found!');
        return;
    }

    if (currentLevel < 12) {
        currentLevel++;
        console.log('Moving to level:', currentLevel);

        // Set transitioning flag to prevent auto-pause
        isTransitioning = true;

        // Update the URL to reflect the new level
        const newUrl = `game.html?level=${currentLevel}`;
        window.history.pushState({ level: currentLevel }, '', newUrl);

        // Load the new level
        game.loadLevel(currentLevel);
        game.reset(); // Reset game state
        game.start();
        hideOverlay();

        // Reset nút "Tiếp tục" về trạng thái bình thường
        const continueBtn = document.getElementById('continueBtn');
        if (continueBtn) {
            continueBtn.textContent = 'Tiếp tục';
            continueBtn.onclick = () => resumeGame();
        }

        // Update level display
        updateLevelDisplay();

        // Clear transitioning flag after a short delay
        setTimeout(() => {
            isTransitioning = false;
        }, 500);

    } else {
        // All levels completed
        console.log('All levels completed!');
        showCompletionMessage();
    }
}

// Show pause overlay with improved UI
function showPauseOverlay() {
    const overlay = document.getElementById('gameOverlay');
    const overlayTitle = document.getElementById('overlayTitle');
    const overlayMessage = document.getElementById('overlayMessage');
    const restartBtn = document.getElementById('restartBtn');
    const homeBtn = document.getElementById('homeBtn');
    const continueBtn = document.getElementById('continueBtn');

    overlayTitle.innerHTML = '<span class="text-6xl">⏸️</span>';
    overlayMessage.innerHTML = `
        <div class="space-y-6 py-4">
            <div class="text-center space-y-2">
                <h2 class="text-4xl font-bold text-yellow-400 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Tạm dừng
                </h2>
                <p class="text-amber-200/90 text-lg">
                    Trò chơi đang tạm dừng
                </p>
            </div>
            
            <div class="bg-gradient-to-br from-amber-900/60 to-amber-950/50 rounded-xl border-3 border-yellow-600/60 p-6 shadow-xl backdrop-blur-sm">
                <h4 class="text-yellow-400 text-lg font-semibold mb-4 pb-2 border-b-2 border-yellow-600/50 flex items-center gap-2">
                    <span class="text-xl">💡</span>
                    <span>Hướng dẫn chiến đấu</span>
                </h4>
                <div class="text-amber-100/90 text-base space-y-2 text-left">
                    <div class="flex items-start gap-3 hover:text-yellow-300 transition-colors">
                        <span class="text-yellow-400 mt-0.5">⬅️➡️</span>
                        <span>A/D hoặc ← → để di chuyển pháo</span>
                    </div>
                    <div class="flex items-start gap-3 hover:text-yellow-300 transition-colors">
                        <span class="text-yellow-400 mt-0.5">🖱️</span>
                        <span>Di chuyển chuột để nhắm mục tiêu</span>
                    </div>
                    <div class="flex items-start gap-3 hover:text-yellow-300 transition-colors">
                        <span class="text-yellow-400 mt-0.5">🎯</span>
                        <span>Click chuột trái hoặc SPACE để bắn</span>
                    </div>
                    <div class="flex items-start gap-3 hover:text-yellow-300 transition-colors">
                        <span class="text-yellow-400 mt-0.5">⏸️</span>
                        <span>Nhấn ESC để tạm dừng</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Setup buttons for pause screen
    restartBtn.style.display = 'inline-block';
    restartBtn.textContent = '🔄 CHƠI LẠI';
    
    homeBtn.style.display = 'inline-block';
    homeBtn.textContent = '🏠 VỀ TRANG CHỦ';
    
    continueBtn.style.display = 'inline-block';
    continueBtn.textContent = '▶️ TIẾP TỤC';
    continueBtn.onclick = () => resumeGame();

    overlay.classList.remove('hidden');
}

// Show overlay
function showOverlay(title, message) {
    const overlay = document.getElementById('gameOverlay');
    const overlayTitle = document.getElementById('overlayTitle');
    const overlayMessage = document.getElementById('overlayMessage');

    overlayTitle.textContent = title;
    overlayMessage.textContent = message;
    overlay.classList.remove('hidden');
}

// Hide overlay
function hideOverlay() {
    const overlay = document.getElementById('gameOverlay');
    overlay.classList.add('hidden');
}

// Toggle history panel
function toggleHistory() {
    const panel = document.getElementById('historyPanel');
    panel.classList.toggle('open');
}

// Update level display
function updateLevelDisplay() {
    const levelElement = document.getElementById('currentLevel');
    if (levelElement) {
        levelElement.textContent = currentLevel;
    }

    const titleElement = document.getElementById('levelTitle');
    if (titleElement && historicalData[currentLevel - 1]) {
        titleElement.textContent = `Ngày ${currentLevel}: ${historicalData[currentLevel - 1].title}`;
    }
}

// Navigation functions
function previousLevel() {
    if (currentLevel > 1) {
        currentLevel--;
        window.location.href = `game.html?level=${currentLevel}`;
    }
}

function showCompletionMessage() {
    const overlay = document.getElementById('gameOverlay');
    const title = document.getElementById('overlayTitle');
    const message = document.getElementById('overlayMessage');
    const buttons = document.querySelector('.overlay-buttons');

    title.textContent = '🏆 Chúc mừng!';
    message.innerHTML = `
        <h3>Bạn đã hoàn thành tất cả 12 ngày đêm lịch sử!</h3>
        <p>Chiến thắng "Điện Biên Phủ trên không" đã hoàn thành trong tay bạn.</p>
        <p>"Hà Nội - Điện Biên Phủ trên không" - 12 ngày đêm anh hùng!</p>
    `;

    buttons.innerHTML = `
        <button onclick="goHome()">Về trang chủ</button>
        <button onclick="playAgain()">Chơi lại từ đầu</button>
        <button onclick="shareAchievement()">Chia sẻ thành tích</button>
    `;

    overlay.classList.remove('hidden');

    // Play victory fanfare
    setTimeout(() => {
        const victorySound = document.getElementById('victorySound');
        if (victorySound) {
            victorySound.play().catch(e => { });
        }
    }, 500);
}

function playAgain() {
    // Reset game state
    gameState.currentLevel = 1;
    gameState.completedLevels = [];
    gameState.unlockedLevels = [1];
    saveGameState();

    window.location.href = 'game.html?level=1';
}

function shareAchievement() {
    const text = `Tôi vừa hoàn thành chiến dịch "Điện Biên Phủ trên không" - 12 ngày đêm lịch sử! 🏆 #DieBienPhu #LichSu #Vietnam1972`;

    if (navigator.share) {
        navigator.share({
            title: 'Chiến thắng Điện Biên Phủ',
            text: text,
            url: window.location.origin
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Đã sao chép thành tích vào clipboard!');
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `achievement`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Achievement system
function checkAchievements() {
    const achievements = [
        {
            id: 'first_kill',
            name: 'Chiến sĩ mới',
            description: 'Tiêu diệt máy bay đầu tiên',
            condition: () => game.currentKills >= 1
        },
        {
            id: 'ace_pilot',
            name: 'Xạ thủ bậc thầy',
            description: 'Tiêu diệt 5 máy bay liên tiếp',
            condition: () => game.currentKills >= 5
        },
        {
            id: 'level_complete',
            name: 'Hoàn thành ngày',
            description: 'Hoàn thành một ngày lịch sử',
            condition: () => game.currentKills >= game.targetKills
        }
    ];

    achievements.forEach(achievement => {
        if (!gameState.achievements.includes(achievement.id) && achievement.condition()) {
            gameState.achievements.push(achievement.id);
            showAchievement(achievement);
            saveGameState();
        }
    });
}

function showAchievement(achievement) {
    const achievementEl = document.createElement('div');
    achievementEl.className = 'achievement';
    achievementEl.innerHTML = `
        <strong>🏅 ${achievement.name}</strong><br>
        ${achievement.description}
    `;

    document.body.appendChild(achievementEl);

    setTimeout(() => {
        achievementEl.remove();
    }, 3000);
}

// Performance monitoring
function trackPerformance() {
    const fps = 1000 / (performance.now() - game.lastTime);

    if (fps < 30) {
        console.warn('Low FPS detected:', fps);
        // Could implement quality reduction here
    }
}

// Easter eggs and cheat codes
const cheatCodes = {
    'invincible': () => {
        game.player.health = 9999;
        game.player.shield = true;
        showNotification('Chế độ bất tử đã kích hoạt!');
    },
    'unlimited_ammo': () => {
        game.player.fireRate = 50;
        game.player.multiShot = true;
        showNotification('Đạn không giới hạn!');
    },
    'skip_level': () => {
        game.currentKills = game.targetKills;
        showNotification('Đã hoàn thành màn chơi!');
    }
};

// Cheat code input handler
let cheatInput = '';
document.addEventListener('keydown', function (e) {
    cheatInput += e.key.toLowerCase();

    // Keep only last 20 characters
    if (cheatInput.length > 20) {
        cheatInput = cheatInput.slice(-20);
    }

    // Check for cheat codes
    Object.keys(cheatCodes).forEach(code => {
        if (cheatInput.includes(code)) {
            cheatCodes[code]();
            cheatInput = '';
        }
    });
});

// Auto-save progress periodically
setInterval(() => {
    if (game && game.isRunning) {
        saveGameState();
    }
}, 30000); // Save every 30 seconds

// Handle page visibility change
document.addEventListener('visibilitychange', function () {
    if (document.hidden && game && game.isRunning && !game.isPaused && !isTransitioning) {
        pauseGame();
    }
});

// Handle window focus/blur
window.addEventListener('blur', function () {
    if (game && game.isRunning && !game.isPaused && !isTransitioning) {
        pauseGame();
    }
});

// Cleanup when leaving page
window.addEventListener('beforeunload', function () {
    if (game) {
        game.stop();
        saveGameState();
    }
});

// Sound toggle functionality
function toggleSound() {
    soundEnabled = !soundEnabled;

    const soundToggle = document.getElementById('soundToggle');
    const soundIcon = document.getElementById('soundIcon');
    const gameMusic = document.getElementById('gameMusic');

    if (soundEnabled) {
        soundIcon.textContent = '🔊';
        soundToggle.classList.remove('muted');
        soundToggle.title = 'Tắt âm thanh';

        // Resume background music if it was playing
        if (gameMusic && gameMusic.paused) {
            gameMusic.play().catch(e => console.log('Cannot play music:', e));
        }
    } else {
        soundIcon.textContent = '🔇';
        soundToggle.classList.add('muted');
        soundToggle.title = 'Bật âm thanh';

        // Stop all currently playing audio including background music
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }

    // Update game engine audio state
    if (game) {
        game.audioEnabled = soundEnabled;
    }

    // Save sound preference
    localStorage.setItem('soundEnabled', soundEnabled);
}

// Initialize sound toggle state
function initSoundToggle() {
    // Load saved sound preference
    const savedSoundState = localStorage.getItem('soundEnabled');
    if (savedSoundState !== null) {
        soundEnabled = JSON.parse(savedSoundState);
    }

    // Set initial state
    const soundToggle = document.getElementById('soundToggle');
    const soundIcon = document.getElementById('soundIcon');

    if (soundToggle && soundIcon) {
        if (soundEnabled) {
            soundIcon.textContent = '🔊';
            soundToggle.classList.remove('muted');
            soundToggle.title = 'Tắt âm thanh';
        } else {
            soundIcon.textContent = '🔇';
            soundToggle.classList.add('muted');
            soundToggle.title = 'Bật âm thanh';
        }
    }

    // Update game engine audio state
    if (game) {
        game.audioEnabled = soundEnabled;
    }
}

// Initialize sound toggle when page loads
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initSoundToggle, 100); // Delay to ensure elements are loaded
});
