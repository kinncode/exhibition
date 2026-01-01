// === 狀態變數 ===
let isGameMode = false;
let selectedCards = [];
let matchedCount = 0;
let totalPairs = 0; // 修正：建議初始為 0，在 initGame 再計算
let isMusicOn = true;

// === 初始化 ===
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});

// === 渲染展覽列表 ===
function renderGallery() {
    const container = document.getElementById('gallery-container');
    // 防止頁面沒有這個 ID 時報錯
    if (!container) return; 
    
    container.innerHTML = '';

    lifeImageData.forEach((item, index) => {
        // 1. 處理左右交錯
        const isAlt = index % 2 !== 0 ? 'alt' : '';

        // 2. 處理直式判斷
        const verticalClass = item.isVertical ? 'is-vertical' : '';

        // 3. 組合 HTML
        const card = `
            <article class="exhibition-card ${isAlt} ${verticalClass}">
                <div class="card-image-wrapper" onclick="openLightbox('${item.image}')">
                    <img src="${item.image}" alt="${item.studentName}的作品">
                </div>
                <div class="card-content">
                    <div class="student-meta">
                        <span class="student-name">${item.studentName}</span>
                        <span class="student-id">${item.studentId}</span>
                    </div>
                    <p class="story-preview">${item.description}</p>
                </div>
            </article>
        `;
        container.innerHTML += card;
    });
}

// === 切換模式 (展覽 <-> 遊戲) ===
function toggleMode() {
    isGameMode = !isGameMode;
    const galleryView = document.getElementById('gallery-view');
    const gameView = document.getElementById('game-view');
    const fabBtn = document.getElementById('fab-btn');
    const bgm = document.getElementById('game-bgm'); // 取得音樂元素

    if (isGameMode) {
        // --- 進入遊戲模式 ---
        galleryView.style.display = 'none';
        gameView.style.display = 'block';
        fabBtn.style.display = 'none'; // 隱藏浮動按鈕
        initGame(); // 初始化遊戲

        // --- 音樂播放邏輯 ---
        if (bgm) {
            bgm.volume = 0.3; // 設定音量 (0.0 ~ 1.0)
            if (isMusicOn) {
                // 使用 Promise 處理自動播放限制
                let playPromise = bgm.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("瀏覽器阻擋自動播放，需使用者互動才能播放");
                    });
                }
            }
        }
    } else {
        // --- 回到展覽模式 ---
        galleryView.style.display = 'block';
        gameView.style.display = 'none';
        fabBtn.style.display = 'flex';
        fabBtn.innerHTML = '<i class="fas fa-gamepad"></i><span>試試配對遊戲</span>';

        // --- 音樂停止邏輯 ---
        if (bgm) {
            bgm.pause();
            bgm.currentTime = 0; // 重置音樂到開頭
        }
    }
    window.scrollTo(0, 0);
}

// === 音樂開關控制 ===
function toggleMusic() {
    const bgm = document.getElementById('game-bgm');
    const btn = document.getElementById('music-toggle-btn');

    if (!bgm || !btn) return; // 防呆

    isMusicOn = !isMusicOn; // 切換狀態

    if (isMusicOn) {
        bgm.play();
        btn.innerHTML = '<i class="fas fa-volume-up"></i> 音樂：開';
        btn.classList.remove('muted');
    } else {
        bgm.pause();
        btn.innerHTML = '<i class="fas fa-volume-mute"></i> 音樂：關';
        btn.classList.add('muted');
    }
}

// === 遊戲邏輯 ===
function initGame() {
    const board = document.getElementById('game-board');
    const scoreBoard = document.getElementById('score-board');
    board.innerHTML = '';
    selectedCards = [];
    matchedCount = 0;

    // 限制遊戲組數為 5 組
    const MAX_PAIRS = 5;
    totalPairs = Math.min(MAX_PAIRS, lifeImageData.length);

    // 隨機選取 5 組資料
    const shuffledData = [...lifeImageData].sort(() => Math.random() - 0.5);
    const selectedData = shuffledData.slice(0, totalPairs);

    scoreBoard.textContent = `0 / ${totalPairs}`;

    // 準備卡片資料：一組圖片 + 一組文字
    let deck = [];
    selectedData.forEach(item => {
        // 圖片卡
        deck.push({
            id: item.id,
            type: 'image',
            content: item.image,
            pairId: item.id
        });
        // 文字卡 (設定截斷字數為 70)
        deck.push({
            id: item.id,
            type: 'text',
            content: item.description.substring(0, 70) + (item.description.length > 70 ? "..." : ""),
            pairId: item.id
        });
    });

    // 洗牌
    deck.sort(() => Math.random() - 0.5);

    // 渲染卡片
    deck.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'game-card';
        cardEl.dataset.index = index;
        cardEl.dataset.pairId = card.pairId;
        cardEl.dataset.type = card.type;

        if (card.type === 'image') {
            cardEl.innerHTML = `<img src="${card.content}" alt="遊戲卡片">`;
        } else {
            cardEl.innerHTML = `<div class="game-card-text">${card.content}</div>`;
        }

        cardEl.onclick = () => handleCardClick(cardEl);
        board.appendChild(cardEl);
    });
}

function handleCardClick(card) {
    // 忽略條件：已配對、已選中、或正在判斷中(選了兩張)
    if (card.classList.contains('matched') ||
        card.classList.contains('selected') ||
        selectedCards.length >= 2) return;

    // 選擇卡片
    card.classList.add('selected');
    selectedCards.push(card);

    // 若選了兩張，進行比對
    if (selectedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    const pair1 = card1.dataset.pairId;
    const pair2 = card2.dataset.pairId;
    // 判斷邏輯：ID 相同即可 (一張圖一張文)
    const isMatch = (pair1 === pair2);

    if (isMatch) {
        // 配對成功
        matchedCount++;
        document.getElementById('score-board').textContent = `${matchedCount} / ${totalPairs}`;

        setTimeout(() => {
            card1.classList.remove('selected');
            card2.classList.remove('selected');
            card1.classList.add('matched');
            card2.classList.add('matched');

            // 勝利判斷
            if (matchedCount === totalPairs) {
                setTimeout(() => {
                    const bgm = document.getElementById('game-bgm');
                    if (bgm) bgm.pause(); // 勝利時停止音樂
                    openModal('victory-modal');
                }, 500);
            }
        }, 300);
    } else {
        // 配對失敗
        card1.classList.add('error');
        card2.classList.add('error');

        setTimeout(() => {
            card1.classList.remove('selected', 'error');
            card2.classList.remove('selected', 'error');
        }, 800); // 失敗稍微停久一點讓人看清楚
    }

    // 清空選擇暫存 (延遲一點點，避免連續點擊 bug)
    setTimeout(() => { selectedCards = []; }, 300);
}

// === Lightbox & Modal 控制 ===
function openLightbox(imgSrc) {
    const modal = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = imgSrc;
    modal.classList.add('active');
}

function openStory(id) {
    const item = lifeImageData.find(d => d.id === id);
    if (!item) return;

    // 更新使用 studentName 與 description
    document.getElementById('modal-title').textContent = `${item.studentName} 的故事`;
    document.getElementById('modal-body').textContent = item.description;
    openModal('story-modal');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ESC 鍵關閉 Modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(el => {
            el.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});