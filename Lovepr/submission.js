// 從原始資料複製 classData
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
// 渲染繳交狀況的函數
function renderSubmissionStatus() {
    // 清空所有現有內容
    document.querySelectorAll('.submission-status-container').forEach(container => {
        container.innerHTML = '';
    });
    
    // 遍歷每個班級
    classData.forEach(classInfo => {
        const classContainer = document.getElementById(classInfo.id);
        if (!classContainer) return;
        
        // 創建繳交狀況容器
        const submissionStatus = document.createElement('div');
        submissionStatus.classList.add('submission-status', 'fade-in');
        
        // 收集所有學生資訊
        const allStudents = [];
        classInfo.groups.forEach(group => {
            group.works.forEach(work => {
                allStudents.push({
                    name: work.studentName,
                    group: group.name,
                    submitted: !!work.videoUrl,
                    title: work.title
                });
            });
        });
        
        // 分類已繳交和未繳交的學生
        const submittedStudents = allStudents.filter(s => s.submitted);
        const notSubmittedStudents = allStudents.filter(s => !s.submitted);
        
        // 創建繳交狀況標題
        const statusTitle = document.createElement('h4');
        statusTitle.textContent = `${classInfo.name}繳交狀況`;
        submissionStatus.appendChild(statusTitle);
        
        // 創建繳交狀況內容
        const statusContent = document.createElement('div');
        statusContent.classList.add('status-content');
        
        // 已繳交學生清單
        const submittedList = document.createElement('div');
        submittedList.classList.add('submitted-list');
        submittedList.innerHTML = `<h5>已繳交 (${submittedStudents.length}人)</h5>`;
        submittedStudents.forEach(student => {
            const studentItem = document.createElement('div');
            studentItem.classList.add('student-status', 'submitted');
            studentItem.innerHTML = `
                <span class="student-name">${student.name}</span>
                <span class="student-group">${student.group}</span>
                <span class="student-title">${student.title || '無標題'}</span>
            `;
            submittedList.appendChild(studentItem);
        });
        statusContent.appendChild(submittedList);
        
        // 未繳交學生清單
        const notSubmittedList = document.createElement('div');
        notSubmittedList.classList.add('not-submitted-list');
        notSubmittedList.innerHTML = `<h5>未繳交 (${notSubmittedStudents.length}人)</h5>`;
        notSubmittedStudents.forEach(student => {
            const studentItem = document.createElement('div');
            studentItem.classList.add('student-status', 'not-submitted');
            studentItem.innerHTML = `
                <span class="student-name">${student.name}</span>
                <span class="student-group">${student.group}</span>
            `;
            notSubmittedList.appendChild(studentItem);
        });
        statusContent.appendChild(notSubmittedList);
        
        submissionStatus.appendChild(statusContent);
        classContainer.appendChild(submissionStatus);
    });
    
    // 添加動畫效果
    const fadeElements = document.querySelectorAll('.fade-in');
    setTimeout(() => {
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100);
}

// 頁面載入時執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有班級按鈕和繳交狀況容器
    const classButtons = document.querySelectorAll('.class-btn');
    const submissionContainers = document.querySelectorAll('.submission-status-container');
    
    // 為每個班級按鈕添加點擊事件
    classButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 獲取當前點擊的班級ID
            const targetClass = this.getAttribute('data-class');
            
            // 移除所有按鈕的active類
            classButtons.forEach(btn => btn.classList.remove('active'));
            
            // 為當前點擊的按鈕添加active類
            this.classList.add('active');
            
            // 隱藏所有繳交狀況容器
            submissionContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // 顯示對應的繳交狀況容器
            document.getElementById(targetClass).classList.add('active');
        });
    });
    
    // 渲染繳交狀況
    renderSubmissionStatus();
}); 