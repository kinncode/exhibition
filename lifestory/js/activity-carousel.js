// 從 journal.js 中隨機提取課程活動照片（優化版）
function getActivityImagesFromJournal() {
    // 檢查 journalData 是否存在
    if (typeof journalData === 'undefined') {
        console.warn('journalData 未載入，使用預設照片');
        return getDefaultImages();
    }
    
    if (!journalData || !journalData.class1) {
        return getDefaultImages();
    }
    
    // 收集所有可用的週次和照片
    const allWeeks = [];
    const weekDataMap = new Map();
    
    // 遍歷所有週次，收集資料
    for (const week in journalData.class1) {
        const weekNum = parseInt(week);
        if (!isNaN(weekNum) && journalData.class1[week].photos && journalData.class1[week].photos.length > 0) {
            allWeeks.push(weekNum);
            weekDataMap.set(weekNum, {
                photos: journalData.class1[week].photos,
                title: journalData.class1[week].title || `第${weekNum}週`
            });
        }
    }
    
    if (allWeeks.length === 0) {
        return getDefaultImages();
    }
    
    // 隨機選取週次（選取 6-8 個週次，確保有足夠的照片）
    const selectedWeeksCount = Math.min(Math.max(6, Math.floor(allWeeks.length * 0.6)), 8);
    const shuffledWeeks = [...allWeeks].sort(() => Math.random() - 0.5);
    const selectedWeeks = shuffledWeeks.slice(0, selectedWeeksCount);
    
    // 從選取的週次中隨機選取照片
    const activityImages = [];
    const MAX_PHOTOS = 24; // 限制最多 24 張照片（8組 x 3張）
    
    // 隨機打亂選取的週次順序
    selectedWeeks.sort(() => Math.random() - 0.5);
    
    for (const week of selectedWeeks) {
        if (activityImages.length >= MAX_PHOTOS) break;
        
        const weekData = weekDataMap.get(week);
        if (!weekData) continue;
        
        // 從該週次中隨機選取 1-2 張照片
        const photos = [...weekData.photos].sort(() => Math.random() - 0.5);
        const photosToTake = Math.min(photos.length, Math.random() > 0.5 ? 2 : 1);
        
        for (let i = 0; i < photosToTake && activityImages.length < MAX_PHOTOS; i++) {
            const photo = photos[i];
            activityImages.push({
                src: photo.src,
                caption: photo.caption || '',
                week: week,
                weekTitle: weekData.title
            });
        }
    }
    
    // 如果照片太少，補充更多
    if (activityImages.length < 12) {
        const remainingWeeks = shuffledWeeks.filter(w => !selectedWeeks.includes(w));
        for (const week of remainingWeeks) {
            if (activityImages.length >= MAX_PHOTOS) break;
            
            const weekData = weekDataMap.get(week);
            if (!weekData) continue;
            
            const photos = [...weekData.photos].sort(() => Math.random() - 0.5);
            const photo = photos[0];
            if (photo) {
                activityImages.push({
                    src: photo.src,
                    caption: photo.caption || '',
                    week: week,
                    weekTitle: weekData.title
                });
            }
        }
    }
    
    // 最後打亂所有照片順序，讓展示更隨機
    return activityImages.sort(() => Math.random() - 0.5);
}

// 預設照片（當 journalData 未載入時使用）
function getDefaultImages() {
    return [
        {
            src: "img/class1/W2.jpg",
            caption: "學生在討論選擇能力強項卡"
        },
        {
            src: "img/class1/W2_2.jpg",
            caption: "老師對同學提出履歷相關問題"
        },
        {
            src: "img/class1/W3-1.jpg",
            caption: "學生進行討論詮釋被分配的辛波絲卡寫履歷表裡的文章"
        }
    ];
}

// 動態獲取照片資料
let activityCarouselImages = [];

const SLIDES_PER_VIEW = 3; // 一次顯示三張照片
let currentGroupIndex = 0;
let carouselInterval = null;

// 計算總共有多少組
function getTotalGroups() {
    return Math.ceil(activityCarouselImages.length / SLIDES_PER_VIEW);
}

// 創建單個幻燈片（優化：使用 DocumentFragment）
function createSlide(image, imageIndex) {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.caption || `課程活動照片 ${imageIndex + 1}`;
    img.loading = 'lazy';
    img.decoding = 'async';
    
    // 優化錯誤處理
    img.onerror = function() {
        this.style.display = 'none';
        if (!slide.querySelector('.carousel-placeholder')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'carousel-placeholder';
            placeholder.textContent = '📸';
            slide.appendChild(placeholder);
        }
    };
    
    const caption = document.createElement('div');
    caption.className = 'carousel-caption';
    caption.textContent = image.caption || '';
    
    slide.appendChild(img);
    slide.appendChild(caption);
    
    return slide;
}

// 初始化輪播（優化版）
function initActivityCarousel() {
    // 先獲取照片資料
    activityCarouselImages = getActivityImagesFromJournal();
    
    const track = document.getElementById('activity-carousel-track');
    const indicators = document.getElementById('activity-carousel-indicators');
    const prevBtn = document.getElementById('activity-carousel-prev');
    const nextBtn = document.getElementById('activity-carousel-next');
    
    if (!track || activityCarouselImages.length === 0) {
        console.warn('沒有可用的照片資料');
        return;
    }
    
    // 清空現有內容
    track.innerHTML = '';
    indicators.innerHTML = '';
    
    // 使用 DocumentFragment 提升性能
    const trackFragment = document.createDocumentFragment();
    const indicatorsFragment = document.createDocumentFragment();
    
    // 創建幻燈片組（每組3張）
    const totalGroups = getTotalGroups();
    
    for (let groupIndex = 0; groupIndex < totalGroups; groupIndex++) {
        const slideGroup = document.createElement('div');
        slideGroup.className = 'carousel-slide-group';
        slideGroup.setAttribute('data-group-index', groupIndex);
        
        // 使用 DocumentFragment 批量添加
        const groupFragment = document.createDocumentFragment();
        
        // 每組顯示3張照片
        for (let i = 0; i < SLIDES_PER_VIEW; i++) {
            const imageIndex = groupIndex * SLIDES_PER_VIEW + i;
            
            if (imageIndex < activityCarouselImages.length) {
                const image = activityCarouselImages[imageIndex];
                const slide = createSlide(image, imageIndex);
                groupFragment.appendChild(slide);
            }
        }
        
        slideGroup.appendChild(groupFragment);
        trackFragment.appendChild(slideGroup);
        
        // 創建指示器（每組一個）
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.setAttribute('data-group-index', groupIndex);
        dot.setAttribute('aria-label', `跳轉到第 ${groupIndex + 1} 組`);
        if (groupIndex === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => goToGroup(groupIndex));
        indicatorsFragment.appendChild(dot);
    }
    
    // 一次性添加到 DOM
    track.appendChild(trackFragment);
    indicators.appendChild(indicatorsFragment);
    
    // 設置按鈕事件
    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToGroup(currentGroupIndex - 1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToGroup(currentGroupIndex + 1));
    }
    
    // 設置觸控滑動支持
    let startX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToGroup(currentGroupIndex + 1);
            } else {
                goToGroup(currentGroupIndex - 1);
            }
        }
        isDragging = false;
    });
    
    // 設置自動播放
    startAutoPlay();
    
    // 當滑鼠懸停在輪播上時暫停自動播放
    const carouselWrapper = document.querySelector('.activity-carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
        carouselWrapper.addEventListener('mouseleave', startAutoPlay);
    }
    
    // 初始顯示第一組
    updateCarousel();
}

// 跳轉到指定組
function goToGroup(groupIndex) {
    const totalGroups = getTotalGroups();
    if (totalGroups === 0) return;
    
    if (groupIndex < 0) {
        currentGroupIndex = totalGroups - 1;
    } else if (groupIndex >= totalGroups) {
        currentGroupIndex = 0;
    } else {
        currentGroupIndex = groupIndex;
    }
    
    updateCarousel();
    resetAutoPlay();
}

// 更新輪播顯示
function updateCarousel() {
    const track = document.getElementById('activity-carousel-track');
    const indicators = document.querySelectorAll('.carousel-dot');
    
    if (!track) return;
    
    // 移動軌道（每組佔 100%）
    track.style.transform = `translateX(-${currentGroupIndex * 100}%)`;
    
    // 更新指示器
    indicators.forEach((dot, index) => {
        if (index === currentGroupIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// 自動播放功能
function startAutoPlay() {
    stopAutoPlay();
    carouselInterval = setInterval(() => {
        goToGroup(currentGroupIndex + 1);
    }, 5000); // 每 5 秒切換一次
}

function stopAutoPlay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// 當 DOM 載入完成後初始化（優化版）
function initializeCarousel() {
    // 如果 journalData 還沒載入，使用重試機制
    if (typeof journalData === 'undefined') {
        let retryCount = 0;
        const maxRetries = 5;
        
        const checkAndInit = () => {
            if (typeof journalData !== 'undefined') {
                initActivityCarousel();
            } else if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(checkAndInit, 200);
            } else {
                console.warn('journalData 載入失敗，使用預設照片');
                initActivityCarousel();
            }
        };
        
        checkAndInit();
    } else {
        initActivityCarousel();
    }
}

// 使用單一事件監聽器，避免重複初始化
let isInitialized = false;

function setupCarousel() {
    if (isInitialized) return;
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (!isInitialized) {
                isInitialized = true;
                initializeCarousel();
            }
        });
    } else {
        isInitialized = true;
        initializeCarousel();
    }
}

setupCarousel();


