// 班級、組別和學生作品的資料結構
const classData = [
    {
        id: "class-a",
        name: "電子一甲",
        groups: [
            {
                name: "第一組",
                members: "組員：詹景安、陳冠宇、李韋廷、黃淯平",
                works: [
                    {
                        studentName: "詹景安",
                        videoUrl: "https://www.youtube.com/embed/tnQ0uEsHBFU",
                        title: "愛情的默契"
                    },
                    {
                        studentName: "陳冠宇",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "李韋廷",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "黃淯平",
                        videoUrl: "https://www.youtube.com/embed/Q_yXSuQqSPQ",
                        title: "心隙"
                    }
                ]
            },
            {
                name: "第二組",
                members: "組員：陳吉翰、陳怡晴、阮氏茶媚、吳佳霓、畢珮柔",
                works: [
                    {
                        studentName: "陳吉翰",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "陳怡晴",
                        videoUrl: "https://www.youtube.com/embed/ieY5ldNTRSE",
                        title: "浮光無依"
                    },
                    {
                        studentName: "阮氏茶媚",
                        videoUrl: "https://www.youtube.com/embed/shU7zPCVMR4",
                        title: "星辰與光芒"
                    },
                    {
                        studentName: "吳佳霓",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "畢珮柔",
                        videoUrl: "https://www.youtube.com/embed/WkAU9bbWdbQ",
                        title: "從初見到別離"
                    }
                ]
            },
            {
                name: "第三組",
                members: "組員：林嘉宏、吳柏辰、鍾天悅、邱秀和",
                works: [
                    {
                        studentName: "林嘉宏",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "吳柏辰",
                        videoUrl: "https://www.youtube.com/embed/IbGkLdTHk-M",
                        title: "緣起如風"
                    },
                    {
                        studentName: "鍾天悅",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "邱秀和",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第四組",
                members: "組員：黃志榮、張宇皓、邱偉翔、陳柏仁",
                works: [
                    {
                        studentName: "黃志榮",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "張宇皓",
                        videoUrl: "https://www.youtube.com/embed/bbw7g2juIpc",
                        title: "與你"
                    },
                    {
                        studentName: "邱偉翔",
                        videoUrl: "https://www.youtube.com/embed/jbYdwPPHYLM",
                        title: "微光之間"
                    },
                    {
                        studentName: "陳柏仁",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第五組",
                members: "組員：許呂安、馬克帆、李承恩、林宥駒",
                works: [
                    {
                        studentName: "許呂安",
                        videoUrl: "https://www.youtube.com/embed/zPrhohg54FA",
                        title: ""
                    },
                    {
                        studentName: "馬克帆",
                        videoUrl: "https://www.youtube.com/embed/ixToHlKUk0I",
                        title: "春風寄語"
                    },
                    {
                        studentName: "李承恩",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "林宥駒",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第六組",
                members: "組員：龔建霖、張繼益、黃昱嘉、陳柏守",
                works: [
                    {
                        studentName: "龔建霖",
                        videoUrl: "https://www.youtube.com/embed/7KmzVJCv3K4",
                        title: "初見心動"
                    },
                    {
                        studentName: "張繼益",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "黃昱嘉",
                        videoUrl: "https://www.youtube.com/embed/GwgU2GBwtN4",
                        title: "前世戀人"
                    },
                    {
                        studentName: "陳柏守",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第七組",
                members: "組員：邱冠憲、黃吉隆、李峻瑋、葉恩助",
                works: [
                    {
                        studentName: "邱冠憲",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "黃吉隆",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "李峻瑋",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "葉恩助",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第八組",
                members: "組員：許善喜、黃翊銘、李奇叡、賴昱勛",
                works: [
                    {
                        studentName: "許善喜",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "黃翊銘",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "李奇叡",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "賴昱勛",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第九組",
                members: "組員：練輝南、艾亦偉、黃柏森、洪肇甫",
                works: [
                    {
                        studentName: "練輝南",
                        videoUrl: "https://www.youtube.com/embed/gt47DHpvbXA",
                        title: "梦回古人"
                    },
                    {
                        studentName: "艾亦偉",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "黃柏森",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "洪肇甫",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第十組",
                members: "組員：謝駿彬、張文碩、張力升、林毅豪",
                works: [
                    {
                        studentName: "謝駿彬",
                        videoUrl: "https://www.youtube.com/embed/gyXhrdCn-Hs",
                        title: "灰色告別"
                    },
                    {
                        studentName: "張文碩",
                        videoUrl: "https://www.youtube.com/embed/7IIhEQRXFbQ",
                        title: "八月的溫柔"
                    },
                    {
                        studentName: "張力升",
                        videoUrl: "https://www.youtube.com/embed/-5rVFxB8Xd0",
                        title: ""
                    },
                    {
                        studentName: "林毅豪",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第十一組",
                members: "組員：李榮富、李子盛、鄧宇智、李安芽",
                works: [
                    {
                        studentName: "李榮富",
                        videoUrl: "https://www.youtube.com/embed/sFrexACkc94",
                        title: "離別之餘溫"
                    },
                    {
                        studentName: "李子盛",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "鄧宇智",
                        videoUrl: "https://www.youtube.com/embed/jguvfcdA4JU",
                        title: "初見"
                    },
                    {
                        studentName: "李安芽",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第十二組",
                members: "組員：蘇映君、劉曜誠、洪偉鈞、張雅玟",
                works: [
                    {
                        studentName: "蘇映君",
                        videoUrl: "https://www.youtube.com/embed/3jcWzqIrVbw",
                        title: "遇見"
                    },
                    {
                        studentName: "劉曜誠",
                        videoUrl: "https://www.youtube.com/embed/nxsDGKfI3uQ",
                        title: "遇見你"
                    },
                    {
                        studentName: "洪偉鈞",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "張雅玟",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第十三組",
                members: "組員：潘冠佑、許守豐、李哲宇、李孟蒼",
                works: [
                    {
                        studentName: "潘冠佑",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "許守豐",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "李哲宇",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "李孟蒼",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第十四組",
                members: "組員：陳明宏、楊詠任",
                works: [
                    {
                        studentName: "陳明宏",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "楊詠任",
                        videoUrl: "",
                        title: ""
                    }
                ]
            }
        ]
    },
    {
        id: "class-b",
        name: "電子一乙",
        groups: [
            {
                name: "第一組",
                members: "組員：",
                works: []
            }
        ]
    },
    {
        id: "class-c",
        name: "流音一乙",
        groups: [
            {
                name: "第一組",
                members: "組員：",
                works: []
            }
        ]
    }
];

// 渲染整個頁面內容的函數
function renderClassWorks() {
    // 清空所有現有內容
    document.querySelectorAll('.works-container').forEach(container => {
        container.innerHTML = '';
    });
    
    // 遍歷每個班級
    classData.forEach(classInfo => {
        const classContainer = document.getElementById(classInfo.id);
        if (!classContainer) return;
        
        // 添加班級標題
        const classTitle = document.createElement('h3');
        classTitle.classList.add('fade-in');
        classTitle.textContent = `${classInfo.name}作品`;
        classContainer.appendChild(classTitle);
        
        // 遍歷每個組別
        classInfo.groups.forEach(group => {
            // 創建組別標題
            const groupHeader = document.createElement('div');
            groupHeader.classList.add('group-header', 'fade-in');
            
            const groupTitle = document.createElement('h4');
            groupTitle.textContent = group.name;
            groupHeader.appendChild(groupTitle);
            
            const groupMembers = document.createElement('p');
            groupMembers.classList.add('group-members');
            groupMembers.textContent = group.members;
            groupHeader.appendChild(groupMembers);
            
            classContainer.appendChild(groupHeader);
            
            // 創建作品網格
            const worksGrid = document.createElement('div');
            worksGrid.classList.add('works-grid');
            
            // 遍歷每個學生作品
            group.works.forEach(work => {
                // 如果沒有影片連結，跳過這個作品
                if (!work.videoUrl) return;
                
                const workItem = document.createElement('div');
                workItem.classList.add('work-item');
                
                // 學生姓名
                const studentName = document.createElement('div');
                studentName.classList.add('student-name');
                studentName.textContent = work.studentName;
                workItem.appendChild(studentName);
                
                // 視頻容器
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('video-container');
                
                const iframe = document.createElement('iframe');
                iframe.src = work.videoUrl;
                iframe.title = "YouTube video player";
                iframe.frameBorder = "0";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                iframe.referrerPolicy = "strict-origin-when-cross-origin";
                iframe.allowFullscreen = true;
                
                videoContainer.appendChild(iframe);
                workItem.appendChild(videoContainer);
                
                // 作品標題
                const workTitle = document.createElement('div');
                workTitle.classList.add('work-title');
                workTitle.textContent = work.title;
                workItem.appendChild(workTitle);
                
                worksGrid.appendChild(workItem);
            });
            
            // 如果這個組別沒有任何作品，不顯示組別標題和網格
            if (worksGrid.children.length === 0) {
                groupHeader.remove();
                worksGrid.remove();
            } else {
            classContainer.appendChild(worksGrid);
            }
        });
    });
    
    // 重新綁定事件處理程序
    bindEvents();
}

// 事件綁定函數
function bindEvents() {
    // 作品項懸停效果
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // 組別標題點擊效果
    const groupHeaders = document.querySelectorAll('.group-header');
    groupHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const nextGrid = this.nextElementSibling;
            
            if (nextGrid.style.display === 'none') {
                nextGrid.style.display = 'grid';
                this.classList.remove('collapsed');
            } else {
                nextGrid.style.display = 'none';
                this.classList.add('collapsed');
            }
        });
        
        header.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        header.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // 頁面載入動畫
    const fadeElements = document.querySelectorAll('.fade-in');
    setTimeout(() => {
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有班級按鈕和作品容器
    const classButtons = document.querySelectorAll('.class-btn');
    const worksContainers = document.querySelectorAll('.works-container');
    
    // 為每個班級按鈕添加點擊事件
    classButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 獲取當前點擊的班級ID
            const targetClass = this.getAttribute('data-class');
            
            // 移除所有按鈕的active類
            classButtons.forEach(btn => btn.classList.remove('active'));
            
            // 為當前點擊的按鈕添加active類
            this.classList.add('active');
            
            // 隱藏所有作品容器
            worksContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // 顯示對應的作品容器
            document.getElementById(targetClass).classList.add('active');
            
            // 使用較少的動畫效果滾動到作品區域
            document.getElementById(targetClass).scrollIntoView({
                behavior: 'auto', // 改為 auto 以減少動畫
                block: 'start'
            });
        });
    });
    
    // 渲染班級作品內容
    renderClassWorks();
    
    // 優化滾動效能 - 使用更簡單的方法
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = '回到頂部';
    document.body.appendChild(backToTopBtn);
    
    // 使用 throttle 函數來限制滾動事件的觸發頻率
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
            setTimeout(() => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
                isScrolling = false;
            }, 100); // 100ms 的節流時間
        }
    }, { passive: true });
    
    // 添加點擊事件
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto' // 使用 auto 而不是 smooth 以減少動畫
        });
    });
    
    // 延遲加載YouTube影片以提高頁面載入速度
    const lazyLoadVideos = () => {
        const videoFrames = document.querySelectorAll('iframe');
        videoFrames.forEach(frame => {
            const src = frame.getAttribute('src');
            if (src) {
                frame.setAttribute('data-src', src);
                frame.removeAttribute('src');
            }
        });
        
        // 只在視窗滾動時檢查一次
        window.addEventListener('scroll', () => {
            videoFrames.forEach(frame => {
                const rect = frame.getBoundingClientRect();
                const isInViewport = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
                
                if (isInViewport) {
                    const dataSrc = frame.getAttribute('data-src');
                    if (dataSrc) {
                        frame.src = dataSrc;
                        frame.removeAttribute('data-src');
                    }
                }
            });
        }, { passive: true }); // 使用 passive 選項提高滾動性能
    };
    
    lazyLoadVideos();
});

/**
 * 添加或更新作品
 * @param {string} classId - 班級ID (class-a, class-b, class-c)
 * @param {number} groupIndex - 組別索引 (從0開始)
 * @param {Object} workData - 作品數據
 * @param {string} workData.studentName - 學生姓名
 * @param {string} workData.videoUrl - 影片URL
 * @param {string} workData.title - 作品標題
 */
function addOrUpdateWork(classId, groupIndex, workData) {
    // 查找對應的班級
    const classInfo = classData.find(c => c.id === classId);
    if (!classInfo) {
        console.error(`找不到班級: ${classId}`);
        return;
    }
    
    // 檢查組別索引是否有效
    if (groupIndex < 0 || groupIndex >= classInfo.groups.length) {
        console.error(`無效的組別索引: ${groupIndex}, 班級 ${classId} 只有 ${classInfo.groups.length} 個組別`);
        return;
    }
    
    // 獲取對應的組別
    const group = classInfo.groups[groupIndex];
    
    // 檢查該學生的作品是否已存在
    const existingWorkIndex = group.works.findIndex(w => w.studentName === workData.studentName);
    
    if (existingWorkIndex >= 0) {
        // 更新現有作品
        group.works[existingWorkIndex] = workData;
        console.log(`已更新 ${classInfo.name} ${group.name} ${workData.studentName} 的作品`);
    } else {
        // 添加新作品
        group.works.push(workData);
        console.log(`已添加 ${classInfo.name} ${group.name} ${workData.studentName} 的作品`);
    }
    
    // 重新渲染頁面
    renderClassWorks();
}

/**
 * 添加新組別
 * @param {string} classId - 班級ID (class-a, class-b, class-c)
 * @param {Object} groupData - 組別數據
 * @param {string} groupData.name - 組別名稱
 * @param {string} groupData.members - 組員信息
 * @param {Array} groupData.works - 作品數組
 */
function addGroup(classId, groupData) {
    // 查找對應的班級
    const classInfo = classData.find(c => c.id === classId);
    if (!classInfo) {
        console.error(`找不到班級: ${classId}`);
        return;
    }
    
    // 添加新組別
    classInfo.groups.push(groupData);
    console.log(`已添加 ${classInfo.name} ${groupData.name} 組別`);
    
    // 重新渲染頁面
    renderClassWorks();
}

/**
 * 添加新班級
 * @param {Object} classData - 班級數據
 * @param {string} classData.id - 班級ID
 * @param {string} classData.name - 班級名稱
 * @param {Array} classData.groups - 組別數組
 */
function addClass(newClass) {
    // 檢查班級ID是否已存在
    if (classData.some(c => c.id === newClass.id)) {
        console.error(`班級ID已存在: ${newClass.id}`);
        return;
    }
    
    // 添加新班級
    classData.push(newClass);
    console.log(`已添加 ${newClass.name} 班級`);
    
    // 更新班級選擇器
    const classSelector = document.querySelector('.class-selector');
    const newButton = document.createElement('button');
    newButton.classList.add('class-btn');
    newButton.setAttribute('data-class', newClass.id);
    newButton.textContent = newClass.name;
    
    // 為新按鈕添加事件監聽器
    newButton.addEventListener('click', function() {
        const targetClass = this.getAttribute('data-class');
        document.querySelectorAll('.class-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        document.querySelectorAll('.works-container').forEach(container => {
            container.classList.remove('active');
        });
        
        const container = document.getElementById(targetClass);
        if (!container) {
            // 創建新的容器
            const newContainer = document.createElement('section');
            newContainer.id = targetClass;
            newContainer.classList.add('works-container', 'active');
            document.querySelector('main').appendChild(newContainer);
        } else {
            container.classList.add('active');
        }
        
        document.getElementById(targetClass).scrollIntoView({
            behavior: 'auto',
            block: 'start'
        });
    });
    
    classSelector.appendChild(newButton);
    
    // 重新渲染頁面
    renderClassWorks();
}

// 使用範例:
// 
// // 添加新作品到甲班第一組
// addOrUpdateWork('class-a', 0, {
//     studentName: '林小花',
//     videoUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX',
//     title: '新相遇'
// });
// 
// // 添加新組別到乙班
// addGroup('class-b', {
//     name: '第三組 - 深層理解',
//     members: '組員：陳大力、王大勇、李大智',
//     works: [
//         {
//             studentName: '陳大力',
//             videoUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX',
//             title: '深交'
//         }
//     ]
// });
// 
// // 添加新班級
// addClass({
//     id: 'class-d',
//     name: '丁班',
//     groups: [
//         {
//             name: '第一組 - 生活的意義',
//             members: '組員：王勇、李敏、張聰',
//             works: [
//                 {
//                     studentName: '王勇',
//                     videoUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX',
//                     title: '生活'
//                 }
//             ]
//         }
//     ]
// }); 