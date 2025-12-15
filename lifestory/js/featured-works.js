// 創作履歷表作品資料
const resumeWorks = [
    // 多樂一甲
    { image: "img/resume/MCES1.png", title: "多樂一甲 第一名", class: "多樂一甲", rank: "🥇 第一名", link: "resume.html" },
    { image: "img/resume/MCES2.png", title: "多樂一甲 第二名", class: "多樂一甲", rank: "🥈 第二名", link: "resume.html" },
    { image: "img/resume/MCES3.png", title: "多樂一甲 第三名", class: "多樂一甲", rank: "🥉 第三名", link: "resume.html" },
    // 電子一乙
    { image: "img/resume/B1.png", title: "電子一乙 第一名", class: "電子一乙", rank: "🥇 第一名", link: "resume.html" },
    { image: "img/resume/B2.png", title: "電子一乙 第三名", class: "電子一乙", rank: "🥉 第三名", link: "resume.html" },
    { image: "img/resume/B3.png", title: "電子一乙 第二名", class: "電子一乙", rank: "🥈 第二名", link: "resume.html" },
    // 流音一乙
    { image: "img/resume/C1.png", title: "流音一乙 第一名", class: "流音一乙", rank: "🥇 第一名", link: "resume.html" },
    { image: "img/resume/C2.png", title: "流音一乙 第二名", class: "流音一乙", rank: "🥈 第二名", link: "resume.html" },
    { image: "img/resume/C3.png", title: "流音一乙 第三名", class: "流音一乙", rank: "🥉 第三名", link: "resume.html" }
];

// 那些年我們一起回憶作品資料（從 memories.html 提取）
const memoriesWorks = [
    // class1 (多樂一甲)
    { image: "img/me/A (1).jpg", title: "國中回憶", author: "第四組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (2).jpg", title: "國小回憶", author: "第十四組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (3).jpg", title: "高中回憶", author: "第十三組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (4).jpg", title: "高中回憶", author: "第一組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (5).jpg", title: "高中回憶", author: "第二和第三組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (6).jpg", title: "高中回憶", author: "第五組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (7).jpg", title: "視覺回憶", author: "第六組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (8).jpg", title: "高中回憶", author: "第七組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (9).jpg", title: "高中回憶", author: "第八組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (10).jpg", title: "嗅覺回憶", author: "第九組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (11).jpg", title: "味覺回憶", author: "第十組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (12).jpg", title: "國中回憶", author: "第十一組", class: "多樂一甲", link: "memories.html" },
    { image: "img/me/A (13).jpg", title: "國中回憶", author: "第十二組", class: "多樂一甲", link: "memories.html" },
    // class2 (電子一乙)
    { image: "img/me/B (1).jpg", title: "國小回憶", author: "第四組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (2).jpg", title: "國小回憶", author: "第十四組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (3).jpg", title: "視覺的回憶", author: "第五組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (4).jpg", title: "視覺的回憶", author: "第十五組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (5).jpg", title: "聽覺的回憶", author: "第六組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (6).jpg", title: "國中的回憶", author: "第九組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (7).jpg", title: "聽覺的回憶", author: "第七組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (8).jpg", title: "高中的回憶", author: "第八組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (9).jpg", title: "那些年我們一起的童年的回憶", author: "第十二組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (10).jpg", title: "高中的回憶", author: "第十組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (11).jpg", title: "視覺的回憶", author: "第二組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (12).jpg", title: "聽覺的回憶", author: "第十三組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (13).jpg", title: "高中的回憶", author: "第一組", class: "電子一乙", link: "memories.html" },
    { image: "img/me/B (14).jpg", title: "國中的回", author: "第三組", class: "電子一乙", link: "memories.html" },
    // class3 (流音一乙)
    { image: "img/me/C (1).jpg", title: "視覺的回憶", author: "第四組，第八組", class: "流音一乙", link: "memories.html" },
    { image: "img/me/C (2).jpg", title: "視覺的回憶", author: "第二組，第五組", class: "流音一乙", link: "memories.html" },
    { image: "img/me/C (3).jpg", title: "高中的回憶", author: "第一組", class: "流音一乙", link: "memories.html" },
    { image: "img/me/C (4).jpg", title: "聽覺的回憶", author: "第七組", class: "流音一乙", link: "memories.html" },
    { image: "img/me/C (5).jpg", title: "高中的回憶", author: "第三組", class: "流音一乙", link: "memories.html" }
];

// 隨機選取函數
function getRandomWorks(count = 2) {
    const allWorks = [];
    
    // 從創作履歷表中隨機選取一個
    if (resumeWorks.length > 0) {
        const randomResume = resumeWorks[Math.floor(Math.random() * resumeWorks.length)];
        allWorks.push({
            ...randomResume,
            category: "創作履歷表",
            description: "以心智圖方式呈現，透過主題繪畫結合個人的相關內容的心智圖履歷表",
            icon: "📄"
        });
    }
    
    // 從那些年我們一起回憶中隨機選取一個
    if (memoriesWorks.length > 0) {
        const randomMemory = memoriesWorks[Math.floor(Math.random() * memoriesWorks.length)];
        allWorks.push({
            ...randomMemory,
            category: "那些年我們一起回憶",
            description: "透過人們的感官來回憶過去的事件",
            icon: "🌸"
        });
    }
    
    // 如果需要的數量超過2個，可以從兩個類別中再隨機選取
    while (allWorks.length < count && (resumeWorks.length > 0 || memoriesWorks.length > 0)) {
        const useResume = Math.random() < 0.5 && resumeWorks.length > 0;
        const sourceArray = useResume ? resumeWorks : memoriesWorks;
        const randomWork = sourceArray[Math.floor(Math.random() * sourceArray.length)];
        
        // 避免重複
        const isDuplicate = allWorks.some(work => 
            work.image === randomWork.image && work.category === (useResume ? "創作履歷表" : "那些年我們一起回憶")
        );
        
        if (!isDuplicate) {
            allWorks.push({
                ...randomWork,
                category: useResume ? "創作履歷表" : "那些年我們一起回憶",
                description: useResume 
                    ? "以心智圖方式呈現，透過主題繪畫結合個人的相關內容的心智圖履歷表"
                    : "透過人們的感官來回憶過去的事件",
                icon: useResume ? "📄" : "🌸"
            });
        }
    }
    
    return allWorks;
}

// 渲染作品卡片
function renderFeaturedWorks() {
    const previewGrid = document.querySelector('.preview-grid');
    if (!previewGrid) {
        console.error('找不到 .preview-grid 元素');
        return;
    }
    
    // 清空現有內容
    previewGrid.innerHTML = '';
    
    // 獲取隨機作品
    const featuredWorks = getRandomWorks(2);
    console.log('選取的作品:', featuredWorks);
    
    if (featuredWorks.length === 0) {
        console.error('沒有選取到任何作品');
        return;
    }
    
    featuredWorks.forEach(work => {
        const card = document.createElement('div');
        card.className = 'preview-card fade-in';
        
        // 創建圖片容器
        const imageDiv = document.createElement('div');
        imageDiv.className = 'preview-image';
        
        // 兩種類別都顯示圖片
        if (work.image) {
            const img = document.createElement('img');
            img.src = work.image;
            img.alt = work.title || work.category;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '8px';
            imageDiv.appendChild(img);
        } else {
            // 如果沒有圖片，才顯示圖標
            imageDiv.textContent = work.icon || '🖼️';
        }
        
        // 創建內容區域
        const categoryP = document.createElement('p');
        categoryP.className = 'category';
        categoryP.textContent = work.category;
        
        const descriptionP = document.createElement('p');
        descriptionP.textContent = work.description;
        
        // 將所有元素添加到卡片
        card.appendChild(imageDiv);
        card.appendChild(categoryP);
        
        // 如果有標題，添加標題
        if (work.title) {
            const titleH3 = document.createElement('h3');
            titleH3.textContent = work.title;
            card.appendChild(titleH3);
        }
        
        // 如果有作者，添加作者信息
        if (work.author) {
            const authorP = document.createElement('p');
            authorP.style.fontSize = '0.9rem';
            authorP.style.color = '#666';
            authorP.style.marginTop = '0.5rem';
            authorP.textContent = `作者: ${work.author}`;
            card.appendChild(authorP);
        }
        
        card.appendChild(descriptionP);
        
        // 添加點擊事件，跳轉到對應頁面
        if (work.link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.location.href = work.link;
            });
        }
        
        previewGrid.appendChild(card);
    });
    
    // 觸發滾動動畫觀察器（如果有的話）
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    previewGrid.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// 當 DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 載入完成，開始渲染作品');
    renderFeaturedWorks();
});

// 如果 DOM 已經載入完成，立即執行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFeaturedWorks);
} else {
    renderFeaturedWorks();
}