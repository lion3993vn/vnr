// Dòng thời gian lịch sử kháng chiến (1945-1950) - Các trận không chiến / phòng không tiêu biểu
const historicalData = [
  // Giai đoạn 1: Sau Cách mạng Tháng 8 (1945-1946)
  {
    id: 1,
    date: "19/12/1946",
    title: "Kháng chiến toàn quốc – Hà Nội",
    description: "19/12/1946, toàn quốc kháng chiến. Máy bay Pháp oanh tạc Hà Nội, ta dùng súng máy sơ khai phòng không.",
    significance: "Khởi đầu kháng chiến toàn quốc; lần đầu tiên phòng không ta đối đầu không quân Pháp.",
    gameObjective: "Bắn hạ 5 máy bay trinh sát/oanh tạc nhẹ; bảo vệ người dân sơ tán",
    difficulty: 1,
    target: 5,
    historicalQuote: "Thà hy sinh tất cả, chứ nhất định không chịu mất nước.",
    keyFigures: ["Chủ tịch Hồ Chí Minh", "Đại đội tự vệ Hà Nội"],
    strategicImportance: "Bắn tỉa máy bay địch, bảo vệ chính quyền cách mạng"
  },
  {
    id: 2,
    date: "28/12/1946",
    title: "Phòng thủ Nam Định",
    description: "Cuối 12/1946, quân Pháp tiến đánh Nam Định, dùng máy bay yểm trợ. Ta dùng súng máy phòng không phản kích.",
    significance: "Kìm chân địch ở Nam Định, tạo thời gian cho Trung ương chuyển về Việt Bắc.",
    gameObjective: "Bắn hạ 6 máy bay yểm trợ đường bộ; kìm chân đoàn xe địch",
    difficulty: 2,
    target: 6,
    historicalQuote: "Giữ từng tấc đất, kìm chân từng giờ phút.",
    keyFigures: ["Trung đoàn 52", "Dân quân Nam Định"],
    strategicImportance: "Tranh thủ thời gian cho chiến lược tổng thể"
  },

  // Giai đoạn 2: Chiến dịch Việt Bắc Thu-Đông 1947
  {
    id: 3,
    date: "07/10/1947",
    title: "Pháp mở màn hành binh Léa – Bắc Kạn",
    description: "Không quân Pháp yểm hộ đổ bộ đường không vào Bắc Kạn, mở màn kế hoạch Léa tấn công Việt Bắc.",
    significance: "Khởi đầu chiến dịch Việt Bắc; địch dựa mạnh vào vận tải và trinh sát đường không.",
    gameObjective: "Bắn hạ 7 máy bay vận tải/trinh sát hộ tống đợt nhảy dù",
    difficulty: 3,
    target: 7,
    historicalQuote: "Chúng chỉ mạnh lúc đầu. Giữ được chủ lực qua mùa đông là thắng.",
    keyFigures: ["Jean-Étienne Valluy", "Bộ Tổng chỉ huy Việt Minh"],
    strategicImportance: "Phá rối cầu hàng không, làm chậm thế tiến công"
  },
  {
    id: 4,
    date: "09/10/1947",
    title: "Khẩu đội 12,7mm Cao Bằng – bắn rơi Ju-52",
    description: "Khẩu đội 12,7mm bắn rơi AAC.1/Ju-52 chở sĩ quan tham mưu Pháp tại Cao Bằng, thu được kế hoạch tác chiến.",
    significance: "Ta thu kế hoạch tiến công; đòn giáng vào hệ chỉ huy – hiệp đồng của địch.",
    gameObjective: "Bắn hạ 8 máy bay (ưu tiên AAC.1 Toucan/Ju-52) trong các lượt oanh tạc",
    difficulty: 4,
    target: 8,
    historicalQuote: "Chiếc Ju-52 bị hạ, kế hoạch địch rơi vào tay ta.",
    keyFigures: ["Đại đội 675, Trung đoàn 74", "Đại tá Lambert"],
    strategicImportance: "Làm rối loạn hiệp đồng ba gọng kìm"
  },
  {
    id: 5,
    date: "24/10/1947",
    title: "Sông Lô – Đoan Hùng: phục kích không – thủy",
    description: "Trận phục kích Sông Lô – Đoan Hùng (23–24/10), máy bay yểm trợ bị ép bay thấp, trúng hỏa lực phòng không.",
    significance: "Phối hợp thủy–không: bẻ gãy mũi sông, giảm hiệu quả yểm trợ đường không.",
    gameObjective: "Bắn hạ 10 máy bay (cả chiến đấu cơ Spitfire và trinh sát)",
    difficulty: 5,
    target: 10,
    historicalQuote: "Thảm họa Đoan Hùng với cả đường sông lẫn bầu trời.",
    keyFigures: ["Trung đội pháo binh Xuân Canh", "Đại đội 304"],
    strategicImportance: "Khóa chặt yểm trợ đường không cho đoàn tàu"
  },
  {
    id: 6,
    date: "30/10/1947",
    title: "Đèo Bông Lau RC4 – phục kích trinh sát",
    description: "Ta phục kích Đèo Bông Lau (RC4), đánh nặng đoàn xe; máy bay trinh sát dẫn đường bị hạ.",
    significance: "Loại 'mắt thần' trên không, hỗ trợ đắc lực cho phục kích mặt đất.",
    gameObjective: "Bắn hạ 12 máy bay (ưu tiên trinh sát MS.500 Criquet)",
    difficulty: 6,
    target: 12,
    historicalQuote: "Đánh địch từ con mắt trên trời.",
    keyFigures: ["Tiểu đoàn 374", "Du kích Cao Bằng"],
    strategicImportance: "Hỗ trợ phục kích mặt đất bằng ưu thế phòng không"
  },
  {
    id: 7,
    date: "20/12/1947",
    title: "Kết thúc Việt Bắc – Léa thất bại",
    description: "Quân Pháp rút khỏi Việt Bắc; cầu hàng không suy yếu, các mũi tiến công bị bẻ gãy hoàn toàn.",
    significance: "Âm mưu 'đánh nhanh, thắng nhanh' phá sản; ta giữ vững căn cứ địa Việt Bắc.",
    gameObjective: "Bắn hạ 14 máy bay C-47/AAC.1 trong đợt rút lui cuối cùng",
    difficulty: 7,
    target: 14,
    historicalQuote: "Giữ được chủ lực qua mùa đông là thắng lợi.",
    keyFigures: ["Bộ Tổng chỉ huy Việt Minh", "Đại tướng Võ Nguyên Giáp"],
    strategicImportance: "Ấn định cục diện có lợi, bước vào giai đoạn mới"
  },

  // Giai đoạn 3: Chuẩn bị phản công (1948-1949)
  {
    id: 8,
    date: "15/07/1949",
    title: "Trận Đông Khê lần 1 – thử lửa",
    description: "Chiến dịch thử nghiệm đánh cứ điểm Đông Khê RC4; không quân Pháp chi viện dày đặc nhưng chưa cứu được.",
    significance: "Chiến thắng cứ điểm kiên cố đầu tiên; tích lũy kinh nghiệm đối phó không quân địch.",
    gameObjective: "Bắn hạ 15 máy bay chi viện (vận tải & chiến đấu cơ)",
    difficulty: 8,
    target: 15,
    historicalQuote: "Học cách đánh thắng địch trong mọi điều kiện.",
    keyFigures: ["Trung đoàn 209", "Không quân Pháp từ Hà Nội"],
    strategicImportance: "Tích lũy kinh nghiệm đánh cứ điểm kiên cố"
  },

  // Giai đoạn 4: Chiến dịch Biên giới Thu-Đông 1950
  {
    id: 9,
    date: "16/09/1950",
    title: "Đông Khê lần 2 – mở màn Biên giới",
    description: "16/9/1950, ta tấn công Đông Khê lần 2, khai hỏa chiến dịch Biên giới. Không quân Pháp chi viện liên tục.",
    significance: "Mở màn tổng phản công chiến lược; làm chủ bầu trời địa phương bằng phòng không tập trung.",
    gameObjective: "Bắn hạ 16 máy bay chi viện/thả dù tiếp tế trong 3 ngày tấn công",
    difficulty: 9,
    target: 16,
    historicalQuote: "Thắng Đông Khê, mở cánh cửa Biên giới.",
    keyFigures: ["Trung đoàn 174", "Pháo binh 351"],
    strategicImportance: "Khởi đầu tổng phản công biên giới"
  },
  {
    id: 10,
    date: "01/10/1950",
    title: "Đánh Thất Khê – cắt RC4",
    description: "Sau Đông Khê, ta tập trung đánh Thất Khê, cắt đứt RC4. Máy bay Pháp yểm trợ rút lui bị tổn thất nặng.",
    significance: "Cắt đứt trục RC4, đoạn tuyến sống còn của các đồn biên giới Pháp.",
    gameObjective: "Bắn hạ 17 máy bay yểm trợ và vận tải rút lui",
    difficulty: 10,
    target: 17,
    historicalQuote: "RC4 – con đường chết chóc.",
    keyFigures: ["Trung đoàn 209", "Tiểu đoàn phòng không 367"],
    strategicImportance: "Chặn đứt tuyến tiếp viện chính"
  },
  {
    id: 11,
    date: "09/10/1950",
    title: "Cao Bằng sụp đổ – đoàn rút tháo chạy",
    description: "Cao Bằng thất thủ 3/10, đoàn Charton rút chạy hướng Thất Khê. Máy bay yểm trợ rút lui bị phòng không bắn rơi dày đặc.",
    significance: "Đánh sập cả hệ thống đồn biên giới; không quân Pháp lần đầu bại trận trên diện rộng.",
    gameObjective: "Bắn hạ 18 máy bay yểm trợ/vận tải tản thương",
    difficulty: 11,
    target: 18,
    historicalQuote: "Cao Bằng sụp đổ như pháo đài cát.",
    keyFigures: ["Trung đoàn 174, 209", "Đại tá Charton"],
    strategicImportance: "Buộc địch hoảng loạn, mất sáng suốt chỉ huy"
  },
  {
    id: 12,
    date: "17/10/1950",
    title: "Kết thúc chiến dịch Biên giới – Lạng Sơn",
    description: "17/10, Lạng Sơn thất thủ. Pháp bỏ toàn bộ biên giới. Không quân rút lui hỗn loạn, máy bay bị bắn rơi hàng loạt.",
    significance: "Toàn thắng chiến dịch Biên giới; chuyển sang giai đoạn chủ động hoàn toàn.",
    gameObjective: "Bắn hạ 20 máy bay trong đợt rút chạy cuối cùng khỏi Lạng Sơn",
    difficulty: 12,
    target: 20,
    historicalQuote: "Biên giới thắng lợi, kháng chiến bước sang trang mới.",
    keyFigures: ["Bộ Tổng chỉ huy", "Đại tướng Võ Nguyên Giáp"],
    strategicImportance: "Thắng lợi mở đường cho Điện Biên Phủ"
  }
];


// Cấu hình game (chỉ phòng không)
const gameConfig = {
  canvas: { width: 1400, height: 800 },
  player: {
    width: 90,
    height: 60,
    health: 100,
    maxHealth: 100,
    fireRate: 450,       // chậm, sát lịch sử pháo/súng máy phòng không 1947
    canMove: false       // trận địa cố định
  },

  // Máy bay Pháp sử dụng trong giai đoạn 1947 (Indochina)
  enemies: [
    { type: 'AAC1_Toucan', name: 'AAC.1 Toucan (Ju-52)', speed: 1.6, health: 2, points: 80, color: '#6E6E6E', description: 'Vận tải 3 động cơ, thả dù quân/tiếp tế' },
    { type: 'C47_Skytrain', name: 'Douglas C-47',        speed: 1.8, health: 2, points: 70, color: '#7F8C8D', description: 'Vận tải 2 động cơ, cầu hàng không' },
    { type: 'Spitfire_MkIX', name: 'Supermarine Spitfire Mk.IX', speed: 3.8, health: 1, points: 95, color: '#3A6EA5', description: 'Tiêm kích/hộ tống/đánh phá' },
    { type: 'MS500_Criquet', name: 'Morane-Saulnier MS.500 Criquet', speed: 2.2, health: 1, points: 55, color: '#9E9E9E', description: 'Liên lạc/trinh sát tốc độ thấp' }
  ],

  // Khu vực bảo vệ (điều chỉnh theo bối cảnh Việt Bắc)
  protectedAreas: [
    { name: 'Trạm liên lạc Trung ương', x: 100, y: 650, width: 160, height: 115, health: 100, maxHealth: 100, importance: 'critical', color: '#B71C1C' },
    { name: 'Kho tài liệu – hậu cần',     x: 350, y: 680, width: 130, height: 95,  health: 80,  maxHealth: 80,  importance: 'high',    color: '#E65100' },
    { name: 'Bệnh xá dã chiến',           x: 600, y: 665, width: 140, height: 105, health: 60,  maxHealth: 60,  importance: 'medium',  color: '#2E7D32' },
    { name: 'Trận địa 12,7mm',            x: 900, y: 695, width: 190, height: 78,  health: 120, maxHealth: 120, importance: 'high',    color: '#6A1B9A' }
  ],

  // Power-ups (đổi tên cho “phòng không 1947”)
  powerUps: [
    { type: 'rapidFire',  duration: 5000, color: '#FFD700', name: 'Bắn nhanh',     effect: 'Tăng tốc độ bắn gấp đôi', icon: '⚡' },
    { type: 'shield',     duration: 8000, color: '#00BFFF', name: 'Ngụy trang',    effect: 'Giảm 50% sát thương nhận vào', icon: '🛡️' },
    { type: 'multiShot',  duration: 6000, color: '#FF69B4', name: 'Đạn tán xạ',    effect: 'Bắn 3 viên cùng lúc', icon: '🎯' },
    { type: 'heal',       amount: 30,     color: '#00FF00', name: 'Hộp cứu thương',effect: 'Hồi 30 máu', icon: '❤️' },
    { type: 'spreadShot', duration: 7000, color: '#FF4500', name: 'Quạt hỏa lực',  effect: 'Bắn hình quạt 5 viên', icon: '💥' }
  ],

  // Vũ khí phòng không thực tế giai đoạn 1947 (loại anachronism)
  weapons: [
    { type: 'HMG_12_7mm', name: 'Súng máy phòng không 12,7mm', fireRate: 450, damage: 2, range: 420, description: 'Chủ lực bắn rơi Ju-52 ở Cao Bằng (9/10/1947)' },
    { type: 'Oerlikon20', name: 'Pháo 20mm (thu/việt hoá)',    fireRate: 650, damage: 3, range: 520, description: 'Pháo 20mm hỏa lực nhanh, tầm vừa' },
    { type: 'MG_7_92mm',  name: 'Súng máy 7,92mm',             fireRate: 300, damage: 1, range: 300, description: 'Phòng không dã chiến, cơ động cao' }
  ]
};

// (giữ nguyên gameAudio, gameAudioVolumes, load/save state, helper path...)


// Âm thanh cho game
const gameAudio = {
    background: 'assets/audio/background.mp3',
    shoot: 'assets/audio/fire.mp3',
    explosion: 'assets/audio/explosion.mp3',
    powerUp: 'assets/audio/powerup.mp3',
    victory: 'assets/audio/victory.wav',
    levelComplete: 'assets/audio/level_complete.wav',
    bulletHit: 'assets/audio/bullethit.mp3',
    bombFall: 'assets/audio/bombfall.mp3',
    planeExplosion: 'assets/audio/explosion-plane.mp3'
};

// Volume settings for each sound (0.0 = silent, 1.0 = full volume)
const gameAudioVolumes = {
    background: 0.1,
    shoot: 0.05,        // Gunshot volume - change this to your preference
    explosion: 0.2,
    powerUp: 0.4,
    victory: 0.4,
    levelComplete: 0.3,
    bulletHit: 0.3,    // Bullet hit sound volume
    bombFall: 0.06,     // Bomb falling sound volume
    planeExplosion: 0.1 // Plane explosion sound volume
};

// Sound settings
let soundEnabled = true; // Global sound toggle

// Trạng thái game
let gameState = {
    currentLevel: 1,
    score: 0,
    completedLevels: [],
    unlockedLevels: [1],
    achievements: []
};

// Load trạng thái game từ localStorage
function loadGameState() {
    const saved = localStorage.getItem('dienBienPhuGameState');
    if (saved) {
        gameState = { ...gameState, ...JSON.parse(saved) };
    }
}

// Save trạng thái game
function saveGameState() {
    localStorage.setItem('dienBienPhuGameState', JSON.stringify(gameState));
}

// Helper functions for environment-aware navigation
function getBasePath() {
    const currentPath = window.location.pathname;
    const hostname = window.location.hostname;

    // For Vercel production, we need to check where we are
    if (!hostname.includes('localhost') && !hostname.includes('127.0.0.1')) {
        // If we're at the root (index page) on Vercel, we still need the dien-bien-phu-game prefix
        // because the game files are in that folder
        if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('index.html')) {
            return 'dien-bien-phu-game/';
        }
        // If we're already in a game page, no prefix needed
        return '';
    }

    // For local development
    // If we're already in the dien-bien-phu-game folder
    if (currentPath.includes('/dien-bien-phu-game/')) {
        return ''; // Already in subfolder, no prefix needed
    }

    // If we're on the root or index page in local development, we need the prefix
    return 'dien-bien-phu-game/';
}

function buildPath(relativePath) {
    return getBasePath() + relativePath;
}

// Khởi tạo
loadGameState();
