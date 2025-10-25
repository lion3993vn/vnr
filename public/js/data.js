// 12 ngày lịch sử (chỉ không chiến / phòng không) của Chiến dịch Việt Bắc Thu-Đông 1947
const historicalData = [
  {
    id: 1,
    date: "07/10/1947",
    title: "Pháp mở màn đổ bộ đường không Bắc Kạn",
    description: "Không quân Pháp yểm hộ đợt nhảy dù đầu tiên vào thị xã Bắc Kạn, mở màn hành binh Léa.",
    significance: "Khởi đầu chiến dịch; địch dựa mạnh vào vận tải và trinh sát đường không.",
    gameObjective: "Bắn hạ 5 máy bay vận tải hoặc trinh sát hộ tống đợt nhảy dù",
    difficulty: 1,
    target: 5,
    historicalQuote: "Chúng chỉ mạnh lúc đầu. Giữ được chủ lực qua mùa đông là thắng.",
    keyFigures: ["Jean-Étienne Valluy", "Henri Sauvagnac"],
    strategicImportance: "Phá rối cầu hàng không ban đầu để làm chậm thế tiến công"
  },
  {
    id: 2,
    date: "08/10/1947",
    title: "Đổ bộ và thả dù tại Chợ Đồn",
    description: "Từ 8/10, địch mở rộng thả dù ở khu vực Chợ Đồn, tăng cường trinh sát và vận tải đường không.",
    significance: "Gia tăng mật độ không vận bảo đảm cho các mũi thọc sâu vào Việt Bắc.",
    gameObjective: "Ngăn 2 đợt thả dù tiếp tế; bắn hạ 6 máy bay (ưu tiên C-47/AAC.1)",
    difficulty: 2,
    target: 6,
    historicalQuote: "Vườn không, nhà trống – đánh địch khắp nơi.",
    keyFigures: ["Các đại đội độc lập, du kích"],
    strategicImportance: "Cắt tiếp tế đường không cục bộ"
  },
  {
    id: 3,
    date: "09/10/1947",
    title: "Khẩu đội 12,7mm Cao Bằng – bắn rơi Ju-52",
    description: "Khẩu đội 12,7mm bắn rơi AAC.1/Ju-52 chở sĩ quan tham mưu Pháp tại Cao Bằng.",
    significance: "Ta thu được kế hoạch tiến công; đòn giáng vào hệ chỉ huy – hiệp đồng của địch.",
    gameObjective: "Bắn hạ 7 máy bay (ưu tiên AAC.1 Toucan/Ju-52) trong 3 lượt oanh tạc",
    difficulty: 3,
    target: 7,
    historicalQuote: "Chiếc Ju-52 bị hạ, kế hoạch địch rơi vào tay ta.",
    keyFigures: ["Đại đội 675, Trung đoàn 74", "Đại tá Lambert"],
    strategicImportance: "Làm rối loạn hiệp đồng ba gọng kìm"
  },
  {
    id: 4,
    date: "12/10/1947",
    title: "Không vận lớn hướng Tuyên Quang",
    description: "Giữa tháng 10, máy bay vận tải tăng cường cầu hàng không hỗ trợ mũi thủy–bộ hướng Tuyên Quang.",
    significance: "Bảo đảm hậu cần – cơ động cho địch ở trung tâm chiến dịch.",
    gameObjective: "Bắn hạ 8 máy bay (ưu tiên vận tải; có thể làm hư hại trinh sát)",
    difficulty: 4,
    target: 8,
    historicalQuote: "Cầu hàng không của địch sẽ bị cắt đứt.",
    keyFigures: ["Pierre Communal"],
    strategicImportance: "Bóp nghẹt tiếp tế đường không"
  },
  {
    id: 5,
    date: "17/10/1947",
    title: "Chiêm Hóa – không quân yểm trợ sông Gâm",
    description: "Không quân Pháp yểm trợ tuyến sông Gâm, thả dù tiếp tế cho các cánh thọc sâu.",
    significance: "Biểu hiện địch lệ thuộc nặng vào vận tải không khi đường bộ – đường sông bị đánh.",
    gameObjective: "Bắn hạ 10 máy bay; đồng thời chặn 3 gói tiếp tế rơi đúng khu địch",
    difficulty: 5,
    target: 10,
    historicalQuote: "Địch thiếu đường bộ, phải dựa vào trời.",
    keyFigures: ["Không quân viễn chinh Pháp"],
    strategicImportance: "Buộc địch phân tán máy bay giữa nhiều mũi"
  },
  {
    id: 6,
    date: "24/10/1947",
    title: "Sông Lô – khống chế yểm trợ đường không",
    description: "Trong trận phục kích Sông Lô – Đoan Hùng (23–24/10), máy bay yểm trợ bị ép bay thấp và trúng hỏa lực.",
    significance: "Phối hợp thủy–không: bẻ gãy mũi tiến công đường sông, giảm hiệu quả yểm trợ đường không.",
    gameObjective: "Bắn hạ 11 máy bay (cả chiến đấu cơ hộ tống Spitfire và trinh sát)",
    difficulty: 6,
    target: 11,
    historicalQuote: "Thảm hoạ Đoan Hùng với cả đường sông lẫn bầu trời.",
    keyFigures: ["Trung đội pháo binh Xuân Canh"],
    strategicImportance: "Khóa chặt yểm trợ đường không cho đoàn tàu"
  },
  {
    id: 7,
    date: "30/10/1947",
    title: "Đèo Bông Lau – phục kích trinh sát đường số 4",
    description: "Ta phục kích trên Đèo Bông Lau (RC4), đánh thiệt hại nặng đoàn cơ giới; máy bay trinh sát bị hạ.",
    significance: "Loại ‘mắt thần’ dẫn đường trên không, hỗ trợ đắc lực cho phục kích mặt đất.",
    gameObjective: "Bắn hạ 12 máy bay (ưu tiên trinh sát MS.500 Criquet)",
    difficulty: 7,
    target: 12,
    historicalQuote: "Đánh địch từ con mắt trên trời.",
    keyFigures: ["Tiểu đoàn 374"],
    strategicImportance: "Hỗ trợ phục kích mặt đất bằng ưu thế phòng không"
  },
  {
    id: 8,
    date: "21/11/1947",
    title: "Bắt đầu rút khỏi Chợ Đồn – Chợ Rã",
    description: "Từ 21/11, quân Pháp bắt đầu rút khỏi cụm Chợ Đồn – Chợ Rã, dùng máy bay che chắn và tản thương.",
    significance: "Dấu hiệu thất bại của gọng kìm đường bộ; thời cơ đánh vào vận tải – che chắn đường không.",
    gameObjective: "Bắn hạ 14 máy bay; cố gắng buộc 1 chiếc vận tải quay đầu",
    difficulty: 8,
    target: 14,
    historicalQuote: "Đường rút là thời cơ vàng.",
    keyFigures: ["Các đơn vị địa phương Bắc Kạn"],
    strategicImportance: "Làm đối phương rối loạn đội hình rút"
  },
  {
    id: 9,
    date: "20/11/1947",
    title: "Hành quân Ceinture – không quân tăng cường",
    description: "Mở đầu hành quân Ceinture, địch tăng không kích – thả dù diện rộng ở vùng tứ giác.",
    significance: "Nỗ lực mới nhằm cứu vãn cục diện bằng không–bộ kết hợp.",
    gameObjective: "Bắn hạ 15 máy bay trong 2 làn sóng (cả chiến đấu cơ và vận tải)",
    difficulty: 9,
    target: 15,
    historicalQuote: "Vòng cung không kích không thể khép kín.",
    keyFigures: ["Raoul Salan"],
    strategicImportance: "Bẻ gãy ý đồ khóa vòng cung"
  },
  {
    id: 10,
    date: "30/11/1947",
    title: "Phủ Thông – tập kích đêm",
    description: "Đêm 30/11, ta tập kích đồn Phủ Thông; địch oanh tạc – thả pháo sáng yểm hộ nhưng bị bắn hạ.",
    significance: "Trận địa 12,7mm phát huy uy lực ban đêm, bảo vệ hành lang cơ động của ta.",
    gameObjective: "Bắn hạ 17 mục tiêu bay thấp (trinh sát & vận tải)",
    difficulty: 10,
    target: 17,
    historicalQuote: "Đêm là đồng minh của pháo cao xạ.",
    keyFigures: ["Đơn vị phòng không địa phương"],
    strategicImportance: "Bảo vệ hành lang cơ động của ta"
  },
  {
    id: 11,
    date: "15/12/1947",
    title: "Đèo Giàng – tiêu diệt yểm trợ đường không rút lui",
    description: "Tại Đèo Giàng, ta đánh trúng yểm trợ đường không che chở đoàn xe rút chạy QL3–QL3B.",
    significance: "Hạ yểm trợ khiến đoàn mặt đất tổn thất nặng, mở cửa phản kích đường bộ.",
    gameObjective: "Bắn hạ 18 máy bay (ưu tiên chiến đấu cơ hộ tống)",
    difficulty: 11,
    target: 18,
    historicalQuote: "Đòn hiểm vào đoàn rút.",
    keyFigures: ["Trung đoàn 165"],
    strategicImportance: "Mở cửa phản kích đường bộ"
  },
  {
    id: 12,
    date: "20/12/1947",
    title: "Kết thúc chiến dịch – không vận bị vô hiệu",
    description: "Quân Pháp rút khỏi Việt Bắc; cầu hàng không suy yếu, các mũi tiến công bị bẻ gãy.",
    significance: "Âm mưu “đánh nhanh, thắng nhanh” phá sản; ta giữ vững căn cứ địa Việt Bắc.",
    gameObjective: "Bắn hạ 20 máy bay C-47/AAC.1 rải hàng rồi rút an toàn",
    difficulty: 12,
    target: 20,
    historicalQuote: "Giữ được chủ lực qua mùa đông là thắng lợi.",
    keyFigures: ["Bộ Tổng chỉ huy Việt Minh"],
    strategicImportance: "Ấn định cục diện có lợi cho ta"
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
