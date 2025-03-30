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
                        videoUrl: "https://www.youtube.com/embed/V5yi0bgo--g",
                        title: "初見"
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
                        videoUrl: "https://www.youtube.com/embed/9wtF8pwUKxA",
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
                members: "組員：林俊諺、閃莉萍、施奕婕、郭俊驛",
                works: [
                    {
                        studentName: "林俊諺",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "閃莉萍",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "施奕婕",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "郭俊驛",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第二組",
                members: "組員：鄭延俊、吳政峰、方柏竣、林相名",
                works: [
                    {
                        studentName: "鄭延俊",
                        videoUrl: "https://www.youtube.com/embed/UqyTaEJRM9Q",
                        title: "獨燈"
                    },
                    {
                        studentName: "吳政峰",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "方柏竣",
                        videoUrl: "https://www.youtube.com/embed/L-CANqas_Qw",
                        title: "微光航向"
                    },
                    {
                        studentName: "林相名",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第三組",
                members: "組員：黃至、吳佐恩、林軒佑、沈俊毅",
                works: [
                    {
                        studentName: "黃至",
                        videoUrl: "https://www.youtube.com/embed/eVitSl7nFlE",
                        title: "思君如夢"
                    },
                    {
                        studentName: "吳佐恩",
                        videoUrl: "https://www.youtube.com/embed/81rOwlLZ7z4",
                        title: "漸行漸遠的我們"
                    },
                    {
                        studentName: "林軒佑",
                        videoUrl: "https://www.youtube.com/embed/oVJ4Zdg_SJA",
                        title: "怕我"
                    },
                    {
                        studentName: "沈俊毅",
                        videoUrl: "https://www.youtube.com/embed/ZjY3om6oL30",
                        title: "夢鄉"
                    }
                ]
            },
            {
                name: "第四組",
                members: "組員：吳秉寰、蘇奕揚、黃志賢、林芳賢",
                works: [
                    {
                        studentName: "吳秉寰",
                        videoUrl: "https://www.youtube.com/embed/kYlGJjbIloY",
                        title: "寧靜時刻"
                    },
                    {
                        studentName: "蘇奕揚",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "黃志賢",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "林芳賢",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第五組",
                members: "組員：潘聖恩、向栩佑、洪宇亮、吳弘毅",
                works: [
                    {
                        studentName: "潘聖恩",
                        videoUrl: "https://www.youtube.com/embed/Rr6bHooGTSg",
                        title: "念與祝福交錯"
                    },
                    {
                        studentName: "向栩佑",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "洪宇亮",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "吳弘毅",
                        videoUrl: "https://www.youtube.com/embed/PFVx0huceDY",
                        title: "霧中無聲之雨"
                    }
                ]
            },
            {
                name: "第六組",
                members: "組員：蘇筠淇、洪宥蓉、黃綉庭、陳銥玟",
                works: [
                    {
                        studentName: "蘇筠淇",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "洪宥蓉",
                        videoUrl: "https://www.youtube.com/embed/ubREtgqRj4U",
                        title: "晨曦未央"
                    },
                    {
                        studentName: "黃綉庭",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "陳銥玟",
                        videoUrl: "https://www.youtube.com/embed/13pmdGYMob8",
                        title: "微塵"
                    }
                ]
            },
            {
                name: "第七組",
                members: "組員：盧姵辰、賴詠晞、楊采融、陳奕婷",
                works: [
                    {
                        studentName: "盧姵辰",
                        videoUrl: "https://www.youtube.com/embed/nrTMjXkwAKw",
                        title: "夜光"
                    },
                    {
                        studentName: "賴詠晞",
                        videoUrl: "https://www.youtube.com/embed/88yvJR7QSfU",
                        title: "撞擊"
                    },
                    {
                        studentName: "楊采融",
                        videoUrl: "https://www.youtube.com/embed/eHHdr1_0a9E",
                        title: "遙遠的月光"
                    },
                    {
                        studentName: "陳奕婷",
                        videoUrl: "https://www.youtube.com/embed/q3xf4beWytg",
                        title: "邊界之間"
                    }
                ]
            },
            {
                name: "第九組",
                members: "組員：許心奕、林芷沂、邱筠筑、游詩如",
                works: [
                    {
                        studentName: "許心奕",
                        videoUrl: "https://www.youtube.com/embed/VVucytwLcEI",
                        title: "故地守望"
                    },
                    {
                        studentName: "林芷沂",
                        videoUrl: "https://www.youtube.com/embed/fJF1bqNuQ9o",
                        title: "無法戒掉的你"
                    },
                    {
                        studentName: "邱筠筑",
                        videoUrl: "https://www.youtube.com/embed/yeMOYyM8A-A",
                        title: ""
                    },
                    {
                        studentName: "游詩如",
                        videoUrl: "",
                        title: ""
                    }
                ]
            },
            {
                name: "第十組",
                members: "組員：洪月瑂、陳慈云、李豐鑫、李均",
                works: [
                    {
                        studentName: "洪月瑂",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "陳慈云",
                        videoUrl: "https://www.youtube.com/embed/8jbRg5Eo4gY",
                        title: "風"
                    },
                    {
                        studentName: "李豐鑫",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "李均",
                        videoUrl: "",
                        title: ""
                    }
                ]
            }
        ]
    }
];
// 渲染繳交狀況的函數
function renderSubmissionStatus() {
    // 清空所有現有內容
    document.querySelectorAll('.submission-status').forEach(container => {
        container.innerHTML = '';
    });
    
    // 遍歷每個班級
    classData.forEach(classInfo => {
        const classContainer = document.getElementById(classInfo.id);
        if (!classContainer) return;
        
        // 創建班級標題
        const classTitle = document.createElement('h3');
        classTitle.classList.add('fade-in');
        classTitle.textContent = `${classInfo.name}繳交狀況`;
        classContainer.appendChild(classTitle);
        
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
        
        // 創建繳交狀況內容
        const statusSection = document.createElement('div');
        statusSection.classList.add('status-section', 'fade-in');
        
        const statusContent = document.createElement('div');
        statusContent.classList.add('status-content');
        
        // 未繳交學生清單
        const notSubmittedList = document.createElement('div');
        notSubmittedList.classList.add('not-submitted-list');
        
        const notSubmittedHeader = document.createElement('div');
        notSubmittedHeader.classList.add('status-header');
        notSubmittedHeader.innerHTML = `
            <h4>
                未繳交名單
                <span class="status-count">${notSubmittedStudents.length}</span>
            </h4>
        `;
        notSubmittedList.appendChild(notSubmittedHeader);
        
        const notSubmittedStudentList = document.createElement('div');
        notSubmittedStudentList.classList.add('student-list');
        
        // 按照組別分類排序未繳交學生
        const groupedNotSubmitted = {};
        notSubmittedStudents.forEach(student => {
            if (!groupedNotSubmitted[student.group]) {
                groupedNotSubmitted[student.group] = [];
            }
            groupedNotSubmitted[student.group].push(student);
        });
        
        // 按照組別順序輸出
        Object.keys(groupedNotSubmitted).sort().forEach(groupName => {
            const students = groupedNotSubmitted[groupName];
            students.forEach(student => {
                const studentItem = document.createElement('div');
                studentItem.classList.add('student-item');
                studentItem.innerHTML = `
                    <div class="student-info">
                        <span class="student-name">${student.name}</span>
                    </div>
                    <div class="student-group">${student.group}</div>
                `;
                notSubmittedStudentList.appendChild(studentItem);
            });
        });
        
        notSubmittedList.appendChild(notSubmittedStudentList);
        statusContent.appendChild(notSubmittedList);
        
        // 已繳交學生清單
        const submittedList = document.createElement('div');
        submittedList.classList.add('submitted-list');
        
        const submittedHeader = document.createElement('div');
        submittedHeader.classList.add('status-header');
        submittedHeader.innerHTML = `
            <h4>
                已繳交名單
                <span class="status-count">${submittedStudents.length}</span>
            </h4>
        `;
        submittedList.appendChild(submittedHeader);
        
        const submittedStudentList = document.createElement('div');
        submittedStudentList.classList.add('student-list');
        
        // 按照組別分類排序已繳交學生
        const groupedSubmitted = {};
        submittedStudents.forEach(student => {
            if (!groupedSubmitted[student.group]) {
                groupedSubmitted[student.group] = [];
            }
            groupedSubmitted[student.group].push(student);
        });
        
        // 按照組別順序輸出
        Object.keys(groupedSubmitted).sort().forEach(groupName => {
            const students = groupedSubmitted[groupName];
            students.forEach(student => {
                const studentItem = document.createElement('div');
                studentItem.classList.add('student-item');
                studentItem.innerHTML = `
                    <div class="student-info">
                        <span class="student-name">${student.name}</span>
                        <span class="student-title">${student.title || '無標題'}</span>
                    </div>
                    <div class="student-group">${student.group}</div>
                `;
                submittedStudentList.appendChild(studentItem);
            });
        });
        
        submittedList.appendChild(submittedStudentList);
        statusContent.appendChild(submittedList);
        
        statusSection.appendChild(statusContent);
        classContainer.appendChild(statusSection);
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
    const submissionContainers = document.querySelectorAll('.submission-status');
    
    // 為每個班級按鈕添加點擊事件
    classButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 獲取當前點擊的班級ID
            const targetClass = this.getAttribute('data-class');
            
            // 如果已經是活躍狀態，不做任何操作
            if (this.classList.contains('active')) {
                return;
            }
            
            // 移除所有按鈕的active類
            classButtons.forEach(btn => btn.classList.remove('active'));
            
            // 為當前點擊的按鈕添加active類
            this.classList.add('active');
            
            // 使用淡入淡出效果切換內容
            const currentActive = document.querySelector('.submission-status.active');
            
            // 淡出當前活躍的容器
            if (currentActive) {
                currentActive.style.opacity = '0';
                currentActive.style.transform = 'translateY(10px)';
                
                // 等待淡出動畫完成後再切換
                setTimeout(() => {
                    currentActive.classList.remove('active');
                    
                    // 顯示目標容器
                    const targetContainer = document.getElementById(targetClass);
                    if (targetContainer) {
                        targetContainer.classList.add('active');
                        
                        // 確保DOM更新後再添加動畫
                        setTimeout(() => {
                            targetContainer.style.opacity = '1';
                            targetContainer.style.transform = 'translateY(0)';
                        }, 50);
                    }
                }, 300);
            } else {
                // 如果沒有當前活躍的容器，直接顯示目標容器
                const targetContainer = document.getElementById(targetClass);
                if (targetContainer) {
                    targetContainer.classList.add('active');
                    targetContainer.style.opacity = '1';
                    targetContainer.style.transform = 'translateY(0)';
                }
            }
        });
    });
    
    // 渲染繳交狀況
    renderSubmissionStatus();
    
    // 添加動畫效果
    const fadeElements = document.querySelectorAll('.fade-in');
    setTimeout(() => {
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100);
}); 
