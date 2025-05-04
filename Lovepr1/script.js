// 班級、組別和學生作品的資料結構
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
                        title: "愛情的默契",
                        comments: [
                            {
                            "reviewerName": "張家祐",
                            "reviewerClass": "電子一乙",
                            "content": "圖片和文字做的不錯",
                            "rating": 4
                        },
                        {
                            "reviewerName": "呂嘉慶",
                            "reviewerClass": "電子一乙",
                            "content": "聲音平穩且速度適中",
                            "rating": 5
                        },
                        {
                            "reviewerName": "呂旼憲",
                            "reviewerClass": "電子一乙",
                            "content": "詩詞都很有詩意",
                            "rating": 3
                        },{
                            "reviewerName": "阮氏茶媚",
                            "reviewerClass": "電子一甲",
                            "content": "對我來說，他的演講簡單明瞭，詩歌選擇很有代表性，讓我對情詩歌有了更深的了解。演講內容清晰，背景音樂也很搭配，增強了整體氛圍。",
                            "rating": 4
                        },
                        {
                            "reviewerName": "陽劼睿",
                            "reviewerClass": "電子一乙",
                            "content": "內容有趣 但聲音感覺速度可以調整一下",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "陳冠宇",
                        videoUrl: "https://www.youtube.com/embed/-mGlmr2rcco",
                        title: "",
                        comments: [
                            {
                                "reviewerName": "黃弘靜",
                                "reviewerClass": "電子一乙",
                                "content": "咬字清晰",
                                "rating": 5
                            },{
                                "reviewerName": "張家祐",
                                "reviewerClass": "電子一乙",
                                "content": "念的還不錯，但有雜音",
                                "rating": 4
                            },
                            {
                                "reviewerName": "呂嘉慶",
                                "reviewerClass": "電子一乙",
                                "content": "聲音有力且從容",
                                "rating": 5
                            },
                            {
                                "reviewerName": "呂旼憲",
                                "reviewerClass": "電子一乙",
                                "content": "圖有跟詩詞呼應",
                                "rating": 3
                            },
                            {
                                "reviewerName": "郭哲維",
                                "reviewerClass": "電子一乙",
                                "content": "非常有詩意，圖片生成的也很有意境",
                                "rating": 4
                            },
                            {
                                "reviewerName": "吳宗恩",
                                "reviewerClass": "電子一乙",
                                "content": "我覺得選的詩很好 咬字清楚",
                                "rating": 5
                            }
                            ]
                    },
                    {
                        studentName: "李韋廷",
                        videoUrl: "https://www.youtube.com/embed/V5yi0bgo--g",
                        title: "初見",
                        comments: [{
                            "reviewerName": "黃弘靜",
                            "reviewerClass": "電子一乙",
                            "content": "咬字清晰",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "黃淯平",
                        videoUrl: "https://www.youtube.com/embed/Q_yXSuQqSPQ",
                        title: "心隙",
                        comments: [ {
                            "reviewerName": "張家祐",
                            "reviewerClass": "電子一乙",
                            "content": "圖片不錯但聲音太小聲了",
                            "rating": 4
                        },
                        {
                            "reviewerName": "呂嘉慶",
                            "reviewerClass": "電子一乙",
                            "content": "語速適中，整體感覺聲情並茂",
                            "rating": 5
                        },
                        {
                            "reviewerName": "呂旼憲",
                            "reviewerClass": "電子一乙",
                            "content": "念的比前面兩個好",
                            "rating": 4
                        },
                        {
                            "reviewerName": "郭哲維",
                            "reviewerClass": "電子一乙",
                            "content": "說話非常清晰，內容也十分好",
                            "rating": 4
                        }]
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
                        title: "浮光無依",
                        comments: [ {
                            "reviewerName": "施博允",
                            "reviewerClass": "電子一乙",
                            "content": "詩的內容很棒",
                            "rating": 3
                        },
                        {
                            "reviewerName": "姚品齊",
                            "reviewerClass": "電子一乙",
                            "content": "內容豐富",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "阮氏茶媚",
                        videoUrl: "https://www.youtube.com/embed/shU7zPCVMR4",
                        title: "星辰與光芒",
                        comments: [ {
                            "reviewerName": "許俊翔",
                            "reviewerClass": "電子一乙",
                            "content": "語調抑揚頓挫",
                            "rating": 4
                        },
                        {
                            "reviewerName": "謝仲傑",
                            "reviewerClass": "電子一乙",
                            "content": "語調很好",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "吳佳霓",
                        videoUrl: "https://www.youtube.com/embed/LVvNEYeNtus",
                        title: "予你",
                        comments: []
                    },
                    {
                        studentName: "畢珮柔",
                        videoUrl: "https://www.youtube.com/embed/WkAU9bbWdbQ",
                        title: "從初見到別離",
                        comments: [{
                            "reviewerName": "施博允",
                            "reviewerClass": "電子一乙",
                            "content": "詩的內容很棒",
                            "rating": 3
                        },
                        {
                            "reviewerName": "姚品齊",
                            "reviewerClass": "電子一乙",
                            "content": "內容豐富",
                            "rating": 4
                        },
                        {
                            "reviewerName": "許俊翔",
                            "reviewerClass": "電子一乙",
                            "content": "我很喜歡他做的AI圖 猛",
                            "rating": 4
                        },
                        {
                            "reviewerName": "謝仲傑",
                            "reviewerClass": "電子一乙",
                            "content": "很棒很棒",
                            "rating": 5
                        }]
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
                        title: "",
                        comments: []
                    },
                    {
                        studentName: "吳柏辰",
                        videoUrl: "https://www.youtube.com/embed/IbGkLdTHk-M",
                        title: "緣起如風",
                        comments: [{
                            "reviewerName": "張皓偉",
                            "reviewerClass": "電子一乙",
                            "content": "詩的內容很棒",
                            "rating": 4
                        },
                        {
                            "reviewerName": "鄭儕蔚",
                            "reviewerClass": "電子一乙",
                            "content": "語調很好",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "鍾天悅",
                        videoUrl: "https://www.youtube.com/embed/8o7wqNQAgmM",
                        title: "緣起如風",
                        comments: []
                    },
                    {
                        studentName: "邱秀和",
                        videoUrl: "https://www.youtube.com/embed/T3lDIJ3czjg",
                        title: "〈關於我們〉",
                        comments: [
                        {
                            "reviewerName": "潘聖恩",
                            "reviewerClass": "流音一乙",
                            "content": "ai 生成圖很有意境",
                            "rating": 3
                        },
                        {
                            "reviewerName": "向栩佑",
                            "reviewerClass": "流音一乙",
                            "content": "咬字清楚",
                            "rating": 4
                        },{
                            "reviewerName": "阮氏茶媚",
                            "reviewerClass": "電子一甲",
                            "content": "報告演講簡單明瞭，詩歌選擇很有代表性，讓我對情詩歌有了更深的了解。演講內容清晰，背景音樂也很搭配，增強了整體氛圍。",
                            "rating": 4
                        },
                        {
                            "reviewerName": "匿名",
                            "reviewerClass": "流音一乙",
                            "content": "圖文搭配很好看",
                            "rating": 5
                        }]
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
                        title: "與你",
                        comments: [{
                            "reviewerName": "黃紘慧",
                            "reviewerClass": "電子一乙",
                            "content": "口齒清晰",
                            "rating": 3
                        },
                        {
                            "reviewerName": "邱宗賢",
                            "reviewerClass": "電子一乙",
                            "content": "圖片使生成的不錯",
                            "rating": 3
                        },
                        {
                            "reviewerName": "郭東昇",
                            "reviewerClass": "電子一乙",
                            "content": "聲音可以再大聲點，然後可以多放背景音樂",
                            "rating": 4
                        },
                        {
                            "reviewerName": "李安",
                            "reviewerClass": "電子一乙",
                            "content": "希望可以有點音樂",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "邱偉翔",
                        videoUrl: "https://www.youtube.com/embed/jbYdwPPHYLM",
                        title: "微光之間",
                        comments: [ {
                            "reviewerName": "黃紘慧",
                            "reviewerClass": "電子一乙",
                            "content": "背景音樂不錯。",
                            "rating": 3
                        },
                        {
                            "reviewerName": "邱宗賢",
                            "reviewerClass": "電子一乙",
                            "content": "口齒清晰",
                            "rating": 3
                        },
                        {
                            "reviewerName": "郭東昇",
                            "reviewerClass": "電子一乙",
                            "content": "聲音很大聲，可是有雜音，有放背景音樂讚",
                            "rating": 4
                        },
                        {
                            "reviewerName": "李安",
                            "reviewerClass": "電子一乙",
                            "content": "講字清楚",
                            "rating": 4
                        },
                        {
                            "reviewerName": "陳奕婷",
                            "reviewerClass": "流音一乙",
                            "content": "圖片背景做得很漂亮 聲音可以再大聲一點",
                            "rating": 4
                        },
                        {
                            "reviewerName": "楊采融",
                            "reviewerClass": "流音一乙",
                            "content": "有點雜音",
                            "rating": 5
                        },
                        {
                            "reviewerName": "吳政峰",
                            "reviewerClass": "流音一乙",
                            "content": "喔整個影片感覺很不錯夢幻",
                            "rating": 4
                        },
                        {
                            "reviewerName": "盧姵辰",
                            "reviewerClass": "流音一乙",
                            "content": "速度剛剛好 很讚！",
                            "rating": 4
                        }]
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
                        title: "",
                        comments: [{
                            "reviewerName": "黃暐閎",
                            "reviewerClass": "電子一乙",
                            "content": "字正腔圓",
                            "rating": 3
                        },
                        {
                            "reviewerName": "李易勳",
                            "reviewerClass": "電子一乙",
                            "content": "版面設計很有創意",
                            "rating": 3
                        },
                        {
                            "reviewerName": "陳思妤",
                            "reviewerClass": "電子一乙",
                            "content": "講的不錯",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "馬克帆",
                        videoUrl: "https://www.youtube.com/embed/ixToHlKUk0I",
                        title: "春風寄語",
                        comments: [{
                            "reviewerName": "黃暐閎",
                            "reviewerClass": "電子一乙",
                            "content": "前所未見",
                            "rating": 3
                        },
                        {
                            "reviewerName": "李易勳",
                            "reviewerClass": "電子一乙",
                            "content": "很會使用ai",
                            "rating": 3
                        },
                        {
                            "reviewerName": "陳思妤",
                            "reviewerClass": "電子一乙",
                            "content": "字體跟照片都很搭",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "李承恩",
                        videoUrl: "https://www.youtube.com/embed/dT8wSVenEUs",
                        title: "燼雪殘香",
                        comments: [{
                            "reviewerName": "吳弘毅",
                            "reviewerClass": "流音一乙",
                            "content": "圖片跟文字很有意境",
                            "rating": 4
                        }]
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
                        title: "初見心動",
                        comments: [ {
                            "reviewerName": "吳祥維",
                            "reviewerClass": "電子一乙",
                            "content": "可以加點音樂",
                            "rating": 3
                        },
                        {
                            "reviewerName": "吳笠豐",
                            "reviewerClass": "電子一乙",
                            "content": "咬字清楚",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "張繼益",
                        videoUrl: "https://www.youtube.com/embed/6W6TMscDGGc?si=imQmlq7zg5WtonLs",
                        title: "遇見你的那一刻",
                        comments: [{
                            "reviewerName": "吳笠豐",
                            "reviewerClass": "電子一乙",
                            "content": "咬字清楚",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "黃昱嘉",
                        videoUrl: "https://www.youtube.com/embed/GwgU2GBwtN4",
                        title: "前世戀人",
                        comments: [{
                            "reviewerName": "吳祥維",
                            "reviewerClass": "電子一乙",
                            "content": "可以大聲一點",
                            "rating": 3
                        },
                        {
                            "reviewerName": "陳慈云",
                            "reviewerClass": "流音一乙",
                            "content": "有思念的感覺",
                            "rating": 5
                        }]
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
                        videoUrl: "https://www.youtube.com/embed/pF6eh_FQpek",
                        title: "",
                        comments: [ {
                            "reviewerName": "李昆諺",
                            "reviewerClass": "電子一乙",
                            "content": "朗讀的節奏很好，圖片符合內容。",
                            "rating": 5
                        },
                        {
                            "reviewerName": "吳宗恩",
                            "reviewerClass": "電子一乙",
                            "content": "我覺得選的詩很棒 在朗讀的聲音也很清晰宏亮",
                            "rating": 5
                        },
                        {
                            "reviewerName": "葉育綸",
                            "reviewerClass": "電子一乙",
                            "content": "念得還不錯但收訊的雜音可以改進",
                            "rating": 5
                        }]
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
                        videoUrl: "https://www.youtube.com/embed/XcmGjBWXFeo",
                        title: "錯過的甜",
                        comments: [    {
                            "reviewerName": "未知",
                            "reviewerClass": "電子一乙",
                            "content": "聲音清楚 有背景音樂",
                            "rating": 5
                        },
                        {
                            "reviewerName": "廖崇凱",
                            "reviewerClass": "電子一乙",
                            "content": "圖文很符合，配置也很棒",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "李奇叡",
                        videoUrl: "https://www.youtube.com/embed/_Zsywy-hVew",
                        title: "",
                        comments: [{
                            "reviewerName": "簡揚凱",
                            "reviewerClass": "電子一乙",
                            "content": "寫的非常好",
                            "rating": 5
                        },
                        {
                            "reviewerName": "張孟綸",
                            "reviewerClass": "電子一乙",
                            "content": "咬字清晰",
                            "rating": 5
                        },
                        {
                            "reviewerName": "廖崇凱",
                            "reviewerClass": "電子一乙",
                            "content": "聲音很有生動",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "賴昱勛",
                        videoUrl: "https://www.youtube.com/embed/9wtF8pwUKxA",
                        title: "",
                        comments: [ {
                            "reviewerName": "張孟綸",
                            "reviewerClass": "電子一乙",
                            "content": "咬字清晰",
                            "rating": 5
                        }, {
                            "reviewerName": "未知",
                            "reviewerClass": "電子一乙",
                            "content": "咬字清晰",
                            "rating": 4
                        }]
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
                        title: "梦回古人",
                        comments: [                      {
                            "reviewerName": "郭彥承",
                            "reviewerClass": "電子一乙",
                            "content": "他的圖選的不錯",
                            "rating": 4
                        },
                        {
                            "reviewerName": "陳品皓",
                            "reviewerClass": "電子一乙",
                            "content": "音量很大 語氣很順暢",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "艾亦偉",
                        videoUrl: "https://www.youtube.com/embed/3yLGGR4DIeU",
                        title: "",
                        comments: [ {
                            "reviewerName": "郭彥承",
                            "reviewerClass": "電子一乙",
                            "content": "這首詩讓我感覺感同身受 寫的很好",
                            "rating": 5
                        },
                        {
                            "reviewerName": "陳品皓",
                            "reviewerClass": "電子一乙",
                            "content": "音量很大 咬字清晰",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "黃柏森",
                        videoUrl: "https://www.youtube.com/embed/zN5m93FrRCo",
                        title: "",
                        comments: [ {
                            "reviewerName": "陳品皓",
                            "reviewerClass": "電子一乙",
                            "content": "語氣流暢",
                            "rating": 5
                        },
                        {
                            "reviewerName": "郭彥承",
                            "reviewerClass": "電子一乙",
                            "content": "這首詩讓我感覺到共鳴",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "洪肇甫",
                        videoUrl: "https://www.youtube.com/embed/T6oONQYY31k",
                        title: "",
                        comments: [{
                            "reviewerName": "郭彥承",
                            "reviewerClass": "電子一乙",
                            "content": "用詞好細膩，情感表達得很真摯，讓人彷彿能感受到那份深情",
                            "rating": 5
                        },
                        {
                            "reviewerName": "陳品皓",
                            "reviewerClass": "電子一乙",
                            "content": "音量較小 內容及語氣很好",
                            "rating": 4
                        }]
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
                        title: "灰色告別",
                        comments:[
                            {
                            "reviewerName": "吳祥維",
                            "reviewerClass": "電子一乙",
                            "content": "詞很好",
                            "rating": 3
                        }]
                    },
                    {
                        studentName: "張文碩",
                        videoUrl: "https://www.youtube.com/embed/7IIhEQRXFbQ",
                        title: "八月的溫柔",
                        comments:[
                            {
                            "reviewerName": "吳祥維",
                            "reviewerClass": "電子一乙",
                            "content": "這不錯!可以繼續加油",
                            "rating": 3
                        },{
                            "reviewerName": "郭彥承",
                            "reviewerClass": "電子一乙",
                            "content": "語速適中，整體感覺聲情並茂",
                            "rating": 3
                        }]
                    },
                    {
                        studentName: "張力升",
                        videoUrl: "https://www.youtube.com/embed/-5rVFxB8Xd0",
                        title: "",
                        comments:[
                            {
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "感覺背景可以再修改一下",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "林毅豪",
                        videoUrl: "https://www.youtube.com/embed/Tvw1IWaWEJg",
                        title: "",
                        comments:[
                            {
                            "reviewerName": "吳祥維",
                            "reviewerClass": "電子一乙",
                            "content": "詞很好，但內容可能要改善點",
                            "rating": 3
                        },{
                            "reviewerName": "林俊翰",
                            "reviewerClass": "電子一乙",
                            "content": "我覺得念得很好 ",
                            "rating": 4
                        }]
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
                        title: "離別之餘溫",
                        comments: [                      {
                            "reviewerName": "陳泊安",
                            "reviewerClass": "電子一乙",
                            "content": "歌詞生動",
                            "rating": 4
                        },
                        {
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "很棒",
                            "rating": 5
                        },
                        {
                            "reviewerName": "柯宥廷",
                            "reviewerClass": "電子一乙",
                            "content": "很好",
                            "rating": 5
                        },
                        {
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "很棒",
                            "rating": 5
                        },
                        {
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "很棒",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "李子盛",
                        videoUrl: "https://www.youtube.com/embed/FTMcLOa-6YE",
                        title: "",
                        comments: [{
                            "reviewerName": "吳佐恩",
                            "reviewerClass": "流音一乙",
                            "content": "語速再慢一點會更好",
                            "rating": 2
                        },]
                    },
                    {
                        studentName: "鄧宇智",
                        videoUrl: "https://www.youtube.com/embed/jguvfcdA4JU",
                        title: "初見",
                        comments: [{
                            "reviewerName": "吳佐恩",
                            "reviewerClass": "流音一乙",
                            "content": "詩寫的很好讓人很好懂",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "李安芽",
                        videoUrl: "https://www.youtube.com/embed/Jl05sQi3uC0",
                        title: "星夜思語 2",
                        comments: [{
                            "reviewerName": "黃至",
                            "reviewerClass": "流音一乙",
                            "content": "圖片上也有字幕，有點影響閱讀。可以加背景音樂會更好",
                            "rating": 3
                        }]
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
                        title: "遇見",
                        comments: [{
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "很棒",
                            "rating": 5
                        },
                        {
                            "reviewerName": "未知",
                            "reviewerClass": "電子一乙",
                            "content": "還不錯 咬字清楚",
                            "rating": 3
                        },
                        {
                            "reviewerName": "柯宥廷",
                            "reviewerClass": "電子一乙",
                            "content": "很好",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "劉曜誠",
                        videoUrl: "https://www.youtube.com/embed/nxsDGKfI3uQ",
                        title: "遇見你",
                        comments: [{
                            "reviewerName": "陳泊安",
                            "reviewerClass": "電子一乙",
                            "content": "講述的很好",
                            "rating": 4
                        },
                        {
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "很不錯",
                            "rating": 5
                        },
                        {
                            "reviewerName": "未知",
                            "reviewerClass": "電子一乙",
                            "content": "圖片好看 聲音好聽",
                            "rating": 3
                        },
                        {
                            "reviewerName": "柯宥廷",
                            "reviewerClass": "電子一乙",
                            "content": "很棒",
                            "rating": 5
                        },
                        {
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "很好",
                            "rating": 5
                        },
                        {
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "很好",
                            "rating": 5
                        },
                        {
                            "reviewerName": "蘇奕揚",
                            "reviewerClass": "流音一乙",
                            "content": "圖片縮放過後好像有點過曝了，導致圖片不像縮圖那麼漂亮。",
                            "rating": 4
                        },
                        {
                            "reviewerName": "黃志賢",
                            "reviewerClass": "流音一乙",
                            "content": "有壓到一些韻還不錯",
                            "rating": 2
                        },
                        {
                            "reviewerName": "吳秉寰",
                            "reviewerClass": "流音一乙",
                            "content": "形容的很好，一定是個專情的人",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "洪偉鈞",
                        videoUrl: "",
                        title: "",
                        comments: []
                    },
                    {
                        studentName: "張雅玟",
                        videoUrl: "https://www.youtube.com/embed/4r0D9RK4aL8",
                        title: "在你眼中",
                        comments: [{
                            "reviewerName": "陳泊安",
                            "reviewerClass": "電子一乙",
                            "content": "歌詞很有意境",
                            "rating": 4
                        },{
                            "reviewerName": "蘇侑峰",
                            "reviewerClass": "電子一乙",
                            "content": "歌詞很有意境",
                            "rating": 4
                        },{
                            "reviewerName": "奕揚蘇",
                            "reviewerClass": "流音一乙",
                            "content": "收音太好所以可以放點背景音樂去蓋掉。",
                            "rating": 4
                        }]
                    }
                ]
            },
            {
                name: "第十三組",
                members: "組員：潘冠佑、許守豐、李哲宇、李孟蒼",
                works: [
                    {
                        studentName: "潘冠佑",
                        videoUrl: "https://www.youtube.com/embed/KNjK9x5Rk-4",
                        title: "情深深",
                        comments: [                      {
                            "reviewerName": "游詩如",
                            "reviewerClass": "流音一乙",
                            "content": "很好",
                            "rating": 5
                        }]
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
                        videoUrl: "https://www.youtube.com/embed/h5uJvWhIS4c",
                        title: "",
                        comments: [{
                            "reviewerName": "林芷沂",
                            "reviewerClass": "流音一乙",
                            "content": "背景音樂很符合",
                            "rating": 3
                        },
                        {
                            "reviewerName": "許心奕",
                            "reviewerClass": "流音一乙",
                            "content": "背景音沒有蓋過他的聲音",
                            "rating": 4
                        }]
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
            "id": "class-b",
            "name": "電子一乙",
            "groups": [
                {
                    "name": "第一組",
                    "members": "組員：呂旼憲 張家祐 郭哲維 呂嘉慶",
                    "works": [
                        {
                            "studentName": "4B330053 郭哲維",
                            "videoUrl": "https://www.youtube.com/embed/zHgVLxBMc14",
                            "title": "青春紀念信",
                            "comments": [
                                {
                                    "reviewerName": "詹景安",
                                    "reviewerClass": "電子一甲",
                                    "content": "內容豐富朗讀輕快",
                                    "rating": 5
                                },
                                {
                                    "reviewerName": "李韋廷",
                                    "reviewerClass": "電子一甲",
                                    "content": "很棒",
                                    "rating": 5
                                },
                                {
                                    "reviewerName": "黃淯平",
                                    "reviewerClass": "電子一甲",
                                    "content": "很棒！",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "黃吉隆",
                                    "reviewerClass": "電子一甲",
                                    "content": "無",
                                    "rating": 5
                                },
                                {
                                    "reviewerName": "張文碩",
                                    "reviewerClass": "電子一甲",
                                    "content": "很棒",
                                    "rating": 5
                                },{
                                    "reviewerName": "沈俊毅",
                                    "reviewerClass": "流音一乙",
                                    "content": "聲音可以再穩定一點",
                                    "rating": 3
                                }
                            ]
                        },
                        {
                            "studentName": "4B330052 張家祐",
                            "videoUrl": "https://www.youtube.com/embed/MjOJZJ-Fads",
                            "title": "流星的命定",
                            "comments": [ {
                                "reviewerName": "詹景安",
                                "reviewerClass": "電子一甲",
                                "content": "故事內容打動朗讀人的心",
                                "rating": 5
                            },
                            {
                                "reviewerName": "李韋廷",
                                "reviewerClass": "電子一甲",
                                "content": "很棒",
                                "rating": 5
                            },
                            {
                                "reviewerName": "黃淯平",
                                "reviewerClass": "電子一甲",
                                "content": "很棒！",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "4b330051 呂旼憲",
                            "videoUrl": "https://www.youtube.com/embed/U2cGkgSo4Mc",
                            "title": "你以後，無人以後",
                            "comments": [{
                                "reviewerName": "黃淯平",
                                "reviewerClass": "電子一甲",
                                "content": "很棒！不錯",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "4b330110 呂嘉慶",
                            "videoUrl": "https://www.youtube.com/embed/E6cAQAgfctM",
                            "title": "愛是無聲的詩行",
                            "comments": [{
                                "reviewerName": "黃淯平",
                                "reviewerClass": "電子一甲",
                                "content": "整體來看算很好",
                                "rating": 4
                            }]
                        }
                    ]
                },
                {
                    "name": "第二組",
                    "members": "組員：許俊翔 謝仲傑 姚品齊 施博允",
                    "works": [
                        {
                            "studentName": "4B330047 許俊翔",
                            "videoUrl": "https://www.youtube.com/embed/hFUXBlDwCiI",
                            "title": "",
                            "comments": [
                                {
                                    "reviewerName": "阮氏茶媚",
                                    "reviewerClass": "電子一甲",
                                    "content": "我覺得同學的演講內容精彩，選取的詩歌具有代表性，展現了情詩歌的魅力。演講清晰有條理，背景音樂搭配得當，增強了氛圍。整體讓我對情詩歌有了更深的理解與喜愛。",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "畢珮柔",
                                    "reviewerClass": "電子一甲",
                                    "content": "詩很優美，有畫面的感覺",
                                    "rating": 3
                                },
                                {
                                    "reviewerName": "張文碩",
                                    "reviewerClass": "電子一甲",
                                    "content": "很棒",
                                    "rating": 5
                                }
                            ]
                        },
                        {
                            "studentName": "4b330058 謝仲傑",
                            "videoUrl": "https://www.youtube.com/embed/hFUXBlDwCiI",
                            "title": "",
                            "comments": [ {
                                "reviewerName": "阮氏茶媚",
                                "reviewerClass": "電子一甲",
                                "content": "我覺得這個演講內容精彩，選取的詩歌具有代表性，展現了情詩歌的魅力。演講清晰有條理，背景音樂搭配得當，增強了氛圍。整體讓我對情詩歌有了更深的理解與喜愛。",
                                "rating": 4
                            },
                            {
                                "reviewerName": "畢珮柔",
                                "reviewerClass": "電子一甲",
                                "content": "影片好像是同一個?是許俊翔的",
                                "rating": 5
                            }]
                        },
                        {
                            "studentName": "4b330059 姚品齊",
                            "videoUrl": "https://www.youtube.com/embed/jTaBYcHrwGQ",
                            "title": "",
                            "comments": [
                                {
                                    "reviewerName": "陳怡晴",
                                    "reviewerClass": "電子一甲",
                                    "content": "唸的很好，不會太急",
                                    "rating": 4
                                }
                            ]
                        },
                        {
                            "studentName": "4B330060 施博允",
                            "videoUrl": "https://www.youtube.com/embed/8E64YJwwX4I",
                            "title": "",
                            "comments": [{
                                "reviewerName": "陳冠宇",
                                "reviewerClass": "電子一甲",
                                "content": "抒情",
                                "rating": 5
                            },
                            {
                                "reviewerName": "陳怡晴",
                                "reviewerClass": "電子一甲",
                                "content": "圖片很符合他的意境",
                                "rating": 5
                            },
                            {
                                "reviewerName": "陳怡晴",
                                "reviewerClass": "電子一甲",
                                "content": "詩的內容寫得很好",
                                "rating": 3
                            }]
                        }
                    ]
                },
                {
                    "name": "第三組",
                    "members": "組員：鄭儕蔚 林岑晏 張皓偉 李宥霖 林朝原",
                    "works": [
                        {
                            "studentName": "4B330069 張皓偉",
                            "videoUrl": "https://www.youtube.com/embed/OzsJ3hn1ots",
                            "title": "盼影",
                            "comments": [
                                {
                                    "reviewerName": "邱秀和",
                                    "reviewerClass": "電子一甲",
                                    "content": "圖不錯 看得出來有心",
                                    "rating": 1
                                },
                                {
                                    "reviewerName": "鍾天悅",
                                    "reviewerClass": "電子一甲",
                                    "content": "聲音清楚",
                                    "rating": 3
                                },
                                {
                                    "reviewerName": "未知",
                                    "reviewerClass": "電子一甲",
                                    "content": "聲音大聲清晰，排版清楚",
                                    "rating": 4
                                }
                            ]
                        },
                        {
                            "studentName": "4B330035 鄭儕蔚",
                            "videoUrl": "https://www.youtube.com/embed/u_D1OgpnjoY",
                            "title": "暮色微涼",
                            "comments": [ {
                                "reviewerName": "邱秀和",
                                "reviewerClass": "電子一甲",
                                "content": "念的不錯 不會很快",
                                "rating": 2
                            },
                            {
                                "reviewerName": "鍾天悅",
                                "reviewerClass": "電子一甲",
                                "content": "聲音清楚",
                                "rating": 3
                            },
                            {
                                "reviewerName": "未知",
                                "reviewerClass": "電子一甲",
                                "content": "聲音清晰，字清楚",
                                "rating": 4
                            }, {
                                "reviewerName": "張文碩",
                                "reviewerClass": "電子一甲",
                                "content": "很棒",
                                "rating": 5
                            },
                            {
                                "reviewerName": "潘聖恩",
                                "reviewerClass": "流音一乙",
                                "content": "聲音大 咬字 讚",
                                "rating": 3
                            }]
                        },
                        {
                            "studentName": "林岑晏",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "李宥霖",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "林朝原",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        }
                    ]
                },
                {
                    "name": "第四組",
                    "members": "組員：李安喆 郭東昇 黃紘慧 邱宗賢",
                    "works": [
                        {
                            "studentName": "4B330101 邱宗賢",
                            "videoUrl": "https://www.youtube.com/embed/hgaOrGTI46w",
                            "title": "別離前夕",
                            "comments": [
                                {
                                    "reviewerName": "張宇皓",
                                    "reviewerClass": "電子一甲",
                                    "content": "聲音夠大念得很清楚",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "邱偉翔",
                                    "reviewerClass": "電子一甲",
                                    "content": "咬字清晰 非常有個人特色",
                                    "rating": 4
                                },{
                                    "reviewerName": "陳柏仁",
                                    "reviewerClass": "電子一甲",
                                    "content": "文字溫柔哀傷，語句流暢自然，描繪出一段深刻的離別情感。",
                                    "rating": 4
                                }
                            ]
                        },
                        {
                            "studentName": "4B330043 郭東昇",
                            "videoUrl": "https://www.youtube.com/embed/n7PUAGpVvJ4",
                            "title": "錯落之間",
                            "comments": [
                                {
                                    "reviewerName": "陳柏仁",
                                    "reviewerClass": "電子一甲",
                                    "content": "這首詩意境深遠，情感真摯，文字婉約動人，令人產生共鳴與反思。",
                                    "rating": 4
                                },{
                                    "reviewerName": "張宇皓",
                                    "reviewerClass": "電子一甲",
                                    "content": "念得非常流暢",
                                    "rating": 3
                                },
                                {
                                    "reviewerName": "邱偉翔",
                                    "reviewerClass": "電子一甲",
                                    "content": "念的非常流暢",
                                    "rating": 4
                                }
                            ]
                        },
                        {
                            "studentName": "4B330044 黃紘慧",
                            "videoUrl": "https://www.youtube.com/embed/Gj_nr9ov2JU",
                            "title": "櫻花下的約定",
                            "comments": [ {
                                "reviewerName": "陳柏仁",
                                "reviewerClass": "電子一甲",
                                "content": "這段話很溫柔，也讓人感覺很感動。",
                                "rating": 4
                            },{
                                "reviewerName": "張宇皓",
                                "reviewerClass": "電子一甲",
                                "content": "可以再念慢一點",
                                "rating": 3
                            },
                            {
                                "reviewerName": "邱偉翔",
                                "reviewerClass": "電子一甲",
                                "content": "非常順暢 咬字清晰",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "4B330041 李安喆",
                            "videoUrl": "https://www.youtube.com/embed/vG_lWHnxaak",
                            "title": "霓虹下的離歌",
                            "comments": [{
                                "reviewerName": "陳柏仁",
                                "reviewerClass": "電子一甲",
                                "content": "這段文字很有畫面感，也讓人覺得感傷又動人。",
                                "rating": 4
                            },
                            {
                                "reviewerName": "邱秀和",
                                "reviewerClass": "電子一甲",
                                "content": "音量不錯",
                                "rating": 3
                            }]
                        }
                    ]
                },
                {
                    "name": "第五組",
                    "members": "組員：陳思妤 李易勳 黃暐閎 葉冠宇",
                    "works": [
                        {
                            "studentName": "4B330093 黃暐閎",
                            "videoUrl": "https://www.youtube.com/embed/Sg5m5GF6Lkw",
                            "title": "回憶的痕跡",
                            "comments": [
                                {
                                    "reviewerName": "許呂安",
                                    "reviewerClass": "電子一甲",
                                    "content": "整體還不錯，速度適中，但是圖片與文字重疊了。",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "李承恩",
                                    "reviewerClass": "電子一甲",
                                    "content": "咬字很清楚",
                                    "rating": 5
                                },{
                                    "reviewerName": "李承恩",
                                    "reviewerClass": "電子一甲",
                                    "content": "排版良好",
                                    "rating": 3
                                },{
                                    "reviewerName": "馬克帆",
                                    "reviewerClass": "電子一甲",
                                    "content": "圖片用得很好",
                                    "rating": 2
                                }
                            ]
                        },
                        {   "studentName": "4B330033 陳思妤", 
                            "videoUrl": "https://www.youtube.com/embed/cMOl36welzg",
                            "title": "殞影",
                            "comments": [ {
                                "reviewerName": "許呂安",
                                "reviewerClass": "電子一甲",
                                "content": "聲音夠大聲，文字圖片也沒重疊，整體來說很棒。",
                                "rating": 4
                            },
                            {
                                "reviewerName": "李承恩",
                                "reviewerClass": "電子一甲",
                                "content": "字幕清晰",
                                "rating": 5
                            },]
                        },
                        {
                            "studentName": "4B330034 李易勳",
                            "videoUrl": "https://www.youtube.com/embed/OPCAB-lDXls",
                            "title": "餘溫",
                            "comments": [
                                {
                                    "reviewerName": "馬克帆",
                                    "reviewerClass": "電子一甲",
                                    "content": "念得很好 字正腔圓",
                                    "rating": 4
                                }
                            ]
                        },
                        {
                            "studentName": "4B330096 葉冠宇",
                            "videoUrl": "https://www.youtube.com/embed/HQErXhTw39s",
                            "title": "靜夜寄語遠方",
                            "comments": [{
                                "reviewerName": "馬克帆",
                                "reviewerClass": "電子一甲",
                                "content": "音量可以聽得很清楚",
                                "rating": 4
                            },{
                                "reviewerName": "許呂安",
                                "reviewerClass": "電子一甲",
                                "content": "速度剛好但是文字撥放方式不是整段放旁邊，有點可惜，整體還不錯。",
                                "rating": 4
                            },
                            {
                                "reviewerName": "李承恩",
                                "reviewerClass": "電子一甲",
                                "content": "很喜歡這部作品",
                                "rating": 5
                            }]
                        }
                    ]
                },
                {
                    "name": "第六組",
                    "members": "組員：張恩菘 簡揚凱 羅振嘉 郭倚修 宋翊帆",
                    "works": [
                        {
                            "studentName": "張恩菘",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "簡揚凱",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "羅振嘉",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "郭倚修",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "宋翊帆",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        }
                    ]
                },
                {
                    "name": "第七組",
                    "members": "組員：吳笠豐 吳祥維 黃政瑋 黃弘靜",
                    "works": [
                        {
                            "studentName": "4B330042 吳祥維",
                            "videoUrl": "https://www.youtube.com/embed/m5WT53nQGWM",
                            "title": "寂寞",
                            "comments": [
                                {
                                    "reviewerName": "黃昱嘉",
                                    "reviewerClass": "電子一甲",
                                    "content": "情感的部分可以加強",
                                    "rating": 4
                                },                      {
                                    "reviewerName": "龔建霖",
                                    "reviewerClass": "電子一甲",
                                    "content": "情感和圖片以及聲音都很契合",
                                    "rating": 4
                                }
                            ]
                        },
                        {
                            "studentName": "4B330030 吳笠豐",
                            "videoUrl": "https://www.youtube.com/embed/ysJBva85QTw",
                            "title": "遺憾的地址",
                            "comments": [
                                {
                                    "reviewerName": "龔建霖",
                                    "reviewerClass": "電子一甲",
                                    "content": "詩不錯",
                                    "rating": 5
                                },
                                {
                                    "reviewerName": "黃昱嘉",
                                    "reviewerClass": "電子一甲",
                                    "content": "講的時候速度放慢一點",
                                    "rating": 4
                                }
                            ]
                        },
                        {
                            "studentName": "黃政瑋",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "黃弘靜",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        }
                    ]
                },
                {
                    "name": "第八組",
                    "members": "組員：詹佳穎 簡仕傑 吳宗恩 李昆諺",
                    "works": [
                        {
                            "studentName": "4B330086 簡仕傑",
                            "videoUrl": "https://www.youtube.com/embed/xQZ-Bkhaslk",
                            "title": "時光的錯落",
                            "comments": [ {
                                "reviewerName": "林芷沂",
                                "reviewerClass": "流音一乙",
                                "content": "說得很好，聲音很符合這首詩",
                                "rating": 3
                            }]
                        },
                        {
                            "studentName": "4B330054 詹佳穎",
                            "videoUrl": "https://www.youtube.com/embed/QU3EIP4VjXU",
                            "title": "還沒寫完的故事",
                            "comments": [{
                                "reviewerName": "許心奕",
                                "reviewerClass": "流音一乙",
                                "content": "背景跟詩詞的搭配很好",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "吳宗恩",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "李昆諺",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        }
                    ]
                },
                {
                    "name": "第九組",
                    "members": "組員：黃奕睿 張孟綸 廖崇凱 張鈞凱",
                    "works": [
                        {
                            "studentName": "4B330108 張鈞凱",
                            "videoUrl": "https://www.youtube.com/embed/NSY2BnXZFow",
                            "title": "浪漫夜晚",
                            "comments": [
                                {
                                    "reviewerName": "黃翊銘",
                                    "reviewerClass": "電子一甲",
                                    "content": "圖片很夢幻",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "黃翊銘",
                                    "reviewerClass": "電子一甲",
                                    "content": "圖片夢幻",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "許善喜",
                                    "reviewerClass": "電子一甲",
                                    "content": "排版配置不錯",
                                    "rating": 3
                                },
                                {
                                    "reviewerName": "黃翊銘",
                                    "reviewerClass": "電子一甲",
                                    "content": "圖片很夢幻",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "未知",
                                    "reviewerClass": "電子一甲",
                                    "content": "聲音清晰很棒",
                                    "rating": 5
                                },
                                {
                                    "reviewerName": "李奇叡",
                                    "reviewerClass": "電子一甲",
                                    "content": "圖跟詩詞很合",
                                    "rating": 3
                                }
                            ]
                        },
                        {
                            "studentName": "4B330055 廖崇凱",
                            "videoUrl": "https://www.youtube.com/embed/Q8ggpMcexyY",
                            "title": "",
                            "comments": [{
                                "reviewerName": "許善喜",
                                "reviewerClass": "電子一甲",
                                "content": "圖片生成很有意境",
                                "rating": 3
                            },
                            {
                                "reviewerName": "黃翊銘",
                                "reviewerClass": "電子一甲",
                                "content": "歌詞很棒",
                                "rating": 4
                            },
                            {
                                "reviewerName": "李奇叡",
                                "reviewerClass": "電子一甲",
                                "content": "聲音有帶點感情",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "4B330048 張孟綸",
                            "videoUrl": "https://www.youtube.com/embed/jy0DcK55SH0",
                            "title": "留在風裡的思念",
                            "comments": [ {
                                "reviewerName": "許善喜",
                                "reviewerClass": "電子一甲",
                                "content": "字體舒適，容易觀賞",
                                "rating": 2
                            },
                            {
                                "reviewerName": "黃翊銘",
                                "reviewerClass": "電子一甲",
                                "content": "聲音特別",
                                "rating": 4
                            },
                            {
                                "reviewerName": "匿名",
                                "reviewerClass": "電子一甲",
                                "content": "有配樂很好但聲音可以在大聲點！",
                                "rating": 3
                            },
                            {
                                "reviewerName": "李奇叡",
                                "reviewerClass": "電子一甲",
                                "content": "背景音樂很好聽，可以小聲一點就更好了",
                                "rating": 3
                            }]
                        },
                        {
                            "studentName": "4B330040 黃奕睿",
                            "videoUrl": "https://www.youtube.com/embed/ZeK7UyehaTg",
                            "title": "情歌朗讀",
                            "comments": [                        {
                                "reviewerName": "黃翊銘",
                                "reviewerClass": "電子一甲",
                                "content": "為什麼字會閃",
                                "rating": 2
                            },
                            {
                                "reviewerName": "黃翊銘",
                                "reviewerClass": "電子一甲",
                                "content": "為什麼字會閃",
                                "rating": 2
                            },
                            {
                                "reviewerName": "許善喜",
                                "reviewerClass": "電子一甲",
                                "content": "圖片和詩詞有點令人「刮目相看」",
                                "rating": 3
                            },
                            {
                                "reviewerName": "黃翊銘",
                                "reviewerClass": "電子一甲",
                                "content": "圖片很好看 歌詞寫的好",
                                "rating": 4
                            },
                            {
                                "reviewerName": "未知",
                                "reviewerClass": "電子一甲",
                                "content": "不錯但速度有點快",
                                "rating": 5
                            },
                            {
                                "reviewerName": "李奇叡",
                                "reviewerClass": "電子一甲",
                                "content": "圖非常好看，詩詞也很棒",
                                "rating": 4
                            }]
                        }
                    ]
                },
                {
                    "name": "第十組",
                    "members": "組員：陳品皓 徐浩凱 郭彥承 黃榆証",
                    "works": [
                        {
                            "studentName": "4B330057 徐浩凱",
                            "videoUrl": "https://www.youtube.com/embed/j_221_l5rak",
                            "title": "遺忘的流浪",
                            "comments": [
                                {
                                    "reviewerName": "黃柏森",
                                    "reviewerClass": "電子一甲",
                                    "content": "停頓跟語調控制得很好，讓人聽得很舒服",
                                    "rating": 5
                                }
                            ]
                        },
                        {
                            "studentName": "4B330114 黃榆証",
                            "videoUrl": "https://www.youtube.com/embed/s0WahbyZTuw",
                            "title": "我們都累了",
                            "comments": [
                            {
                                "reviewerName": "黃柏森",
                                "reviewerClass": "電子一甲",
                                "content": "講的很大聲，聽得很清楚",
                                "rating": 5
                            }]
                        },
                        {
                            "studentName": "4B330084 郭彥承",
                            "videoUrl": "https://www.youtube.com/embed/N4GQCiPI0Kc",
                            "title": "影中故人",
                            "comments": [                      {
                                "reviewerName": "黃柏森",
                                "reviewerClass": "電子一甲",
                                "content": "我覺得這篇作品有些地方還可以改進，例如詩的書寫方式應該分行；聲音表現也不錯，整體的影像製作也蠻漂亮的。",
                                "rating": 5
                            },{
                                "reviewerName": "黃柏森",
                                "reviewerClass": "電子一甲",
                                "content": "咬字很清楚，很棒",
                                "rating": 5
                            },
                            {
                                "reviewerName": "黃榆証",
                                "reviewerClass": "電子一乙",
                                "content": "可以有精神一點",
                                "rating": 3
                            }]
                        },
                        {
                            "studentName": "4B330050 陳品皓",
                            "videoUrl": "https://www.youtube.com/embed/phNcGoD9Sro",
                            "title": "牽手的風景",
                            "comments": [
                                {
                                    "reviewerName": "黃柏森",
                                    "reviewerClass": "電子一甲",
                                    "content": "講的很清楚，讓人聽得很舒服",
                                    "rating": 4
                                },{
                                    "reviewerName": "黃柏森",
                                    "reviewerClass": "電子一甲",
                                    "content": "作品稍微有點短，不過整體來說還不錯，所使用的圖片也與詩的內容相當契合。",
                                    "rating": 5
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "第十一組",
                    "members": "組員：陽劼睿 利宥伶 許晉翊 葉育綸",
                    "works": [
                        {
                            "studentName": "4B330036 陽劼睿",
                            "videoUrl": "https://www.youtube.com/embed/zbSTfwh4JTo",
                            "title": "告別",
                            "comments": [ {
                                "reviewerName": "方柏竣",
                                "reviewerClass": "流音一乙",
                                "content": "這首詩表達出許多人的狀況，明明有許多種方式，卻依舊無法靠近妳，也都希望若有重新選擇的機會，一定會選擇在妳身旁好好道別，只可惜世界幾乎是無法重新來過的",
                                "rating": 5
                            },
                            {
                                "reviewerName": "吳政峰",
                                "reviewerClass": "流音一乙",
                                "content": "AI指令感覺給的不錯",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "4B330038 利宥伶",
                            "videoUrl": "https://www.youtube.com/embed/xp7YuLE0OG4",
                            "title": "風中的悸動",
                            "comments": [ {
                                "reviewerName": "鄭延俊",
                                "reviewerClass": "流音一乙",
                                "content": "很棒",
                                "rating": 5
                            },
                            {
                                "reviewerName": "林相名",
                                "reviewerClass": "流音一乙",
                                "content": "很棒",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "4B330087 葉育綸",
                            "videoUrl": "https://www.youtube.com/embed/SJ-WR1FWyRA",
                            "title": "",
                            "comments": [
                                {
                                    "reviewerName": "黃榆証",
                                    "reviewerClass": "電子一乙",
                                    "content": "很像RAP",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "林芷沂",
                                    "reviewerClass": "流音一乙",
                                    "content": "速度適中很好",
                                    "rating": 4
                                },{
                                    "reviewerName": "陳冠宇",
                                    "reviewerClass": "電子一甲",
                                    "content": "做得很用心",
                                    "rating": 5
                                },
                                {
                                    "reviewerName": "方柏竣",
                                    "reviewerClass": "流音一乙",
                                    "content": "在眾多的人群中，卻很剛好的照亮了作者，說明這份關係一定是有背後許多因素已經在慢慢結合而發生的",
                                    "rating": 3
                                },
                            ]
                        },
                        {
                            "studentName": "許晉翊",
                            "videoUrl": "https://www.youtube.com/embed/9mdK-Uk_rQ4",
                            "title": "沉默的證詞",
                            "comments": [                                {
                                "reviewerName": "吳政峰",
                                "reviewerClass": "流音一乙",
                                "content": "蠻有想法的",
                                "rating": 4
                            },
                            {
                                "reviewerName": "林相名",
                                "reviewerClass": "流音一乙",
                                "content": "很棒",
                                "rating": 4
                            }]
                        }
                    ]
                },
                {
                    "name": "第十二組",
                    "members": "組員：蘇侑峰 陳泊安 柯宥廷 林俊翰",
                    "works": [
                        {
                            "studentName": "4B330064 林俊翰",
                            "videoUrl": "https://www.youtube.com/embed/3huL-lcqtnw",
                            "title": "",
                            "comments": [
                                {
                                    "reviewerName": "謝駿彬",
                                    "reviewerClass": "電子一甲",
                                    "content": "詩非常的深奧",
                                    "rating": 5
                                },
                                {
                                    "reviewerName": "林毅豪",
                                    "reviewerClass": "電子一甲",
                                    "content": "他錄的時候有其他聲音",
                                    "rating": 4
                                },
                                {
                                    "reviewerName": "張力升",
                                    "reviewerClass": "電子一甲",
                                    "content": "我覺得念得很好",
                                    "rating": 4
                                }
                            ]
                        },
                        {
                            "studentName": "4B330063 柯宥廷",
                            "videoUrl": "https://www.youtube.com/embed/zvMzShw2jsI",
                            "title": "",
                            "comments": [{
                                "reviewerName": "謝駿彬",
                                "reviewerClass": "電子一甲",
                                "content": "詩很有畫面感",
                                "rating": 5
                            },
                            {
                                "reviewerName": "林毅豪",
                                "reviewerClass": "電子一甲",
                                "content": "可以念慢一點",
                                "rating": 3
                            },
                            {
                                "reviewerName": "張力升",
                                "reviewerClass": "電子一甲",
                                "content": "好像念得太快了 感覺在趕火車",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "4B330031 蘇侑峰",
                            "videoUrl": "https://www.youtube.com/embed/e4R4YAOvRtw",
                            "title": "深情",
                            "comments": [                     {
                                "reviewerName": "謝駿彬",
                                "reviewerClass": "電子一甲",
                                "content": "這首詩深情表達得很好",
                                "rating": ""
                            },
                            {
                                "reviewerName": "林毅豪",
                                "reviewerClass": "電子一甲",
                                "content": "挺好的",
                                "rating": 4
                            },
                            {
                                "reviewerName": "張力升",
                                "reviewerClass": "電子一甲",
                                "content": "這個念得很好而且背景很好看",
                                "rating": 4
                            }]
                        },
                        {
                            "studentName": "4B330045 陳泊安",
                            "videoUrl": "https://www.youtube.com/embed/Zlwn2aVfhYc",
                            "title": "月光海誓",
                            "comments": [ {
                                "reviewerName": "謝駿彬",
                                "reviewerClass": "電子一甲",
                                "content": "詩寫得很有空間感會讓人感覺在外太空",
                                "rating": 5
                            },
                            {
                                "reviewerName": "林毅豪",
                                "reviewerClass": "電子一甲",
                                "content": "圖不搭",
                                "rating": 4
                            }]
                        }
                    ]
                },
                {
                    "name": "第十三組",
                    "members": "組員：林仲謙 黃柏霖 鄭書堯 黃勁瑋",
                    "works": [
                        {
                            "studentName": "林仲謙",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        },
                        {
                            "studentName": "黃柏霖",
                            "videoUrl": "https://www.youtube.com/embed/iBcdauXuTuI",
                            "title": "遇見情詩",
                            "comments": [               
                            {
                            "reviewerName": "黃柏霖",
                            "reviewerClass": "電子一乙",
                            "content": "內容不錯，音量剛剛好",
                            "rating": 5
                        }]
                        },
                        {
                            "studentName": "鄭書堯",
                            "videoUrl": "https://www.youtube.com/embed/oBZbQFQ6pWc",
                            "title": "",
                            "comments": [      {
                                "reviewerName": "陽劼睿",
                                "reviewerClass": "電子一乙",
                                "content": "他生成出來的文章很有趣",
                                "rating": 5
                            }]
                        },
                        {
                            "studentName": "黃勁瑋",
                            "videoUrl": "",
                            "title": "",
                            "comments": []
                        }
                    ]
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
                        title: "獨燈",
                        comments: [                      {
                            "reviewerName": "陽劼睿",
                            "reviewerClass": "電子一乙",
                            "content": "他生成出來的文章很有趣精妙 值得細細品味",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "吳政峰",
                        videoUrl: "https://www.youtube.com/embed/_fp-yiQF_Eg",
                        title: "",
                        comments: [{
                            "reviewerName": "葉育綸",
                            "reviewerClass": "電子一乙",
                            "content": "很有意境",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "方柏竣",
                        videoUrl: "https://www.youtube.com/embed/L-CANqas_Qw",
                        title: "微光航向",
                        comments: [ {
                            "reviewerName": "葉育綸",
                            "reviewerClass": "電子一乙",
                            "content": "有有加上配樂更有詩境境",
                            "rating": 5
                        },
                        {
                            "reviewerName": "沈俊毅",
                            "reviewerClass": "流音一乙",
                            "content": "非常的投入 很棒",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "林相名",
                        videoUrl: "https://www.youtube.com/embed/JwFcIkMKa8M",
                        title: "",
                        comments: [{
                            "reviewerName": "沈俊毅",
                            "reviewerClass": "流音一乙",
                            "content": "很棒",
                            "rating": 5
                        }, {
                            "reviewerName": "葉育綸",
                            "reviewerClass": "電子一乙",
                            "content": "圖片不錯",
                            "rating": 5
                        }]
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
                        title: "思君如夢",
                        comments: [                      {
                            "reviewerName": "郭倚修",
                            "reviewerClass": "電子一乙",
                            "content": "背景音樂有點蓋掉本人的音量",
                            "rating": 3
                        },
                        {
                            "reviewerName": "羅振嘉",
                            "reviewerClass": "電子一乙",
                            "content": "音樂可以再小聲一些還有換相對更抒情的音樂 可以更符合‘’愛情‘’的主題",
                            "rating": 3
                        },
                        {
                            "reviewerName": "李安芽",
                            "reviewerClass": "電子一乙",
                            "content": "配音不太合內容 但唸起來很剛好",
                            "rating": 3
                        }]
                    },
                    {
                        studentName: "吳佐恩",
                        videoUrl: "https://www.youtube.com/embed/81rOwlLZ7z4",
                        title: "漸行漸遠的我們",
                        comments: [ 
                        {
                            "reviewerName": "郭倚修",
                            "reviewerClass": "電子一乙",
                            "content": "字體顏色可以改成鮮豔一點的，且字體能在大一點點",
                            "rating": 4
                        },
                        {
                            "reviewerName": "羅振嘉",
                            "reviewerClass": "電子一乙",
                            "content": "字體大小可以更大排版更清晰 或是在字體底下加一個背板喔！",
                            "rating": 4
                        },
                        {
                            "reviewerName": "李安芽",
                            "reviewerClass": "電子一乙",
                            "content": "整體可以 但字跟圖片要分開比較好",
                            "rating": 4
                        }]
                    },
                    {
                        studentName: "林軒佑",
                        videoUrl: "https://www.youtube.com/embed/oVJ4Zdg_SJA",
                        title: "怕我",
                        comments: [                      {
                            "reviewerName": "李榮富",
                            "reviewerClass": "電子一甲",
                            "content": "念的很棒",
                            "rating": 5
                        },
                        {
                            "reviewerName": "李子盛",
                            "reviewerClass": "流音一乙",
                            "content": "標題取的與內容符合",
                            "rating": 2
                        }, {
                            "reviewerName": "郭倚修",
                            "reviewerClass": "電子一乙",
                            "content": "念的速度可以在慢一點",
                            "rating": 3
                        },
                        {
                            "reviewerName": "羅振嘉",
                            "reviewerClass": "電子一乙",
                            "content": "背景音樂可以用符合主題的風格",
                            "rating": 4
                        },
                        {
                            "reviewerName": "李安芽",
                            "reviewerClass": "電子一乙",
                            "content": "配音不對 影片比例不好",
                            "rating": 3
                        }]
                    },
                    {
                        studentName: "沈俊毅",
                        videoUrl: "https://www.youtube.com/embed/ZjY3om6oL30",
                        title: "夢鄉",
                        comments: [ {
                            "reviewerName": "李子盛",
                            "reviewerClass": "流音一乙",
                            "content": "背景圖顯得突出",
                            "rating": 4
                        }]
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
                        title: "寧靜時刻",
                        comments: [{
                            "reviewerName": "洪偉鈞",
                            "reviewerClass": "電子一甲",
                            "content": "還不錯",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "蘇奕揚",
                        videoUrl: "https://www.youtube.com/embed/tzKa9n564Hk",
                        title: "戀愛的形狀",
                        comments: [ {
                            "reviewerName": "劉曜誠",
                            "reviewerClass": "電子一甲",
                            "content": "讚",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "黃志賢",
                        videoUrl: "https://www.youtube.com/embed/_2pbEly1yVE",
                        title: "寂寞的那心",
                        comments: [{
                            "reviewerName": "劉曜誠",
                            "reviewerClass": "電子一甲",
                            "content": "讚",
                            "rating": 5
                        },{
                            "reviewerName": "蘇映君",
                            "reviewerClass": "電子一甲",
                            "content": "這是目前我看過最標準的報告了，給予高分",
                            "rating": 5
                        }]
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
                        title: "念與祝福交錯",
                        comments: [{
                            "reviewerName": "邱秀和",
                            "reviewerClass": "電子一甲",
                            "content": "念的不錯不會很快",
                            "rating": 2
                        },
                        {
                            "reviewerName": "鍾天悅",
                            "reviewerClass": "電子一甲",
                            "content": "背景音樂很配圖片",
                            "rating": 4
                        },
                        {
                            "reviewerName": "匿名",
                            "reviewerClass": "電子一甲",
                            "content": "背景音樂襯托景象，排版清晰",
                            "rating": 4
                        }]
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
                        title: "霧中無聲之雨",
                        comments: [{
                            "reviewerName": "邱秀和",
                            "reviewerClass": "電子一甲",
                            "content": "音樂搭的不錯",
                            "rating": 5
                        },{
                            "reviewerName": "鍾天悅 ",
                            "reviewerClass": "電子一甲",
                            "content": "聲音宏亮，圖片符合詩意，排版清晰",
                            "rating": 5
                        }]
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
                        title: "晨曦未央",
                        comments: [{
                            "reviewerName": "郭東昇",
                            "reviewerClass": "電子一甲",
                            "content": "選的字和照片挺對應的",
                            "rating": 5
                        },{
                            "reviewerName": "鍾天悅 ",
                            "reviewerClass": "電子一甲",
                            "content": "圖片符合詩意，排版好",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "黃綉庭",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "陳銥玟",
                        videoUrl: "https://www.youtube.com/embed/13pmdGYMob8",
                        title: "微塵",
                        comments: [                        {
                            "reviewerName": "馬克帆",
                            "reviewerClass": "電子一甲",
                            "content": "聲音清楚很好聽",
                            "rating": 4
                        },
                        {
                            "reviewerName": "邱秀和",
                            "reviewerClass": "電子一甲",
                            "content": "圖片不錯",
                            "rating": 3
                        },
                        {
                            "reviewerName": "鍾天悅",
                            "reviewerClass": "電子一甲",
                            "content": "背景音樂很棒",
                            "rating": 4
                        },
                        {
                            "reviewerName": "匿名",
                            "reviewerClass": "電子一甲",
                            "content": "聲音清晰，背景音樂搭配得很好，圖片也與內容相符。",
                            "rating": 4
                        }]
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
                        title: "夜光",
                        comments: [                                          {
                            "reviewerName": "鄭書堯",
                            "reviewerClass": "電子一乙",
                            "content": "愛情本來就是有點無腦的等待",
                            "rating": 5
                        },
                        {
                            "reviewerName": "潘冠佑",
                            "reviewerClass": "電子一甲",
                            "content": "這首詩給我一種好像是愛情在內心掀起波瀾，心動的感覺。",
                            "rating": 5
                        },
                        {
                            "reviewerName": "陳怡晴",
                            "reviewerClass": "電子一甲",
                            "content": "詩選的很好，講得很有感情",
                            "rating": 4
                        },
                        {
                            "reviewerName": "陳怡晴",
                            "reviewerClass": "電子一甲",
                            "content": "詩選的很好，講得很有感情",
                            "rating": 4
                        },
                        {
                            "reviewerName": "張文碩",
                            "reviewerClass": "電子一甲",
                            "content": "很棒",
                            "rating": 5
                        },
                        {
                            "reviewerName": "李承恩",
                            "reviewerClass": "電子一甲",
                            "content": "很喜歡這部作品",
                            "rating": 5
                        },
                        {
                            "reviewerName": "許善喜",
                            "reviewerClass": "電子一甲",
                            "content": "內容很豐富，圖片也選得很好",
                            "rating": 4
                        },
                        {
                            "reviewerName": "未知",
                            "reviewerClass": "電子一甲",
                            "content": "語音清晰，圖片與內容相符，背景音樂搭配得宜，整體表現非常好。",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "賴詠晞",
                        videoUrl: "https://www.youtube.com/embed/88yvJR7QSfU",
                        title: "撞擊",
                        comments: [                     
                            {
                                "reviewerName": "潘冠佑",
                                "reviewerClass": "電子一甲",
                                "content": "詩的內容很精彩 用車禍慘烈的狀況來形容轟轟烈烈的愛情。",
                                "rating": 5
                            },
                             {
                            "reviewerName": "鄭書堯",
                            "reviewerClass": "電子一乙",
                            "content": "不管如何 都不要活在過去 應該向前",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "楊采融",
                        videoUrl: "https://www.youtube.com/embed/eHHdr1_0a9E",
                        title: "遙遠的月光",
                        comments: [                      {
                            "reviewerName": "鄭書堯",
                            "reviewerClass": "電子一乙",
                            "content": "兩個人有心會越來越好",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "陳奕婷",
                        videoUrl: "https://www.youtube.com/embed/q3xf4beWytg",
                        title: "邊界之間",
                        comments: [{
                            "reviewerName": "李奇叡",
                            "reviewerClass": "電子一甲",
                            "content": "詩詞與圖片搭配得很好，很有意境",
                            "rating": 4
                        },
                        {
                            "reviewerName": "黃翊銘",
                            "reviewerClass": "電子一甲",
                            "content": "圖片好看",
                            "rating": 4
                        },
                        ]
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
                        title: "故地守望",
                        comments: [ {
                            "reviewerName": "李昆諺",
                            "reviewerClass": "電子一乙",
                            "content": "有配樂，聲音清晰沒被音樂蓋過。",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "林芷沂",
                        videoUrl: "https://www.youtube.com/embed/fJF1bqNuQ9o",
                        title: "無法戒掉的你",
                        comments: [{
                            "reviewerName": "李昆諺",
                            "reviewerClass": "電子一乙",
                            "content": "有配樂，聲音清晰沒被音樂蓋過。",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "邱筠筑",
                        videoUrl: "https://www.youtube.com/embed/yeMOYyM8A-A",
                        title: "",
                        comments: [{
                            "reviewerName": "陳冠宇",
                            "reviewerClass": "電子一甲",
                            "content": "這也說的很好",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "游詩如",
                        videoUrl: "https://www.youtube.com/embed/TQcHbJKtS8M",
                        title: "",
                        comments: [                      {
                            "reviewerName": "李昆諺",
                            "reviewerClass": "電子一乙",
                            "content": "圖片符合內容，有配樂。",
                            "rating": 5
                        },
                        {
                            "reviewerName": "吳宗恩",
                            "reviewerClass": "電子一乙",
                            "content": "詩選的很好",
                            "rating": 5
                        }]
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
                        title: "風",
                        comments: [                      {
                            "reviewerName": "黃昱嘉",
                            "reviewerClass": "電子一甲",
                            "content": "配樂小聲一點",
                            "rating": 5
                        }]
                    },
                    {
                        studentName: "李豐鑫",
                        videoUrl: "",
                        title: ""
                    },
                    {
                        studentName: "李均",
                        videoUrl: "https://www.youtube.com/embed/0d3L4Simgkw",
                        title: "伴",
                        comments: [                      {
                            "reviewerName": "龔建霖",
                            "reviewerClass": "電子一甲",
                            "content": "背景音樂配這首很搭",
                            "rating": 3
                        }]
                    }
                ]
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
    
    // 添加全局評論控制按鈕
    const globalCommentsControl = document.createElement('div');
    globalCommentsControl.classList.add('global-comments-control');
    globalCommentsControl.innerHTML = `
        <button id="toggleAllComments" class="global-comments-btn">
            <span class="btn-text">展開所有評論</span>
            <span class="toggle-icon">▼</span>
        </button>
    `;
    document.querySelector('header').appendChild(globalCommentsControl);
    
    // 全局評論展開狀態
    let isAllCommentsExpanded = false;
    
    // 綁定全局評論控制按鈕事件
    const toggleAllCommentsBtn = document.getElementById('toggleAllComments');
    toggleAllCommentsBtn.addEventListener('click', function() {
        isAllCommentsExpanded = !isAllCommentsExpanded;
        
        // 更新所有評論區域的顯示狀態
        document.querySelectorAll('.comments-content').forEach(content => {
            content.style.display = isAllCommentsExpanded ? 'block' : 'none';
        });
        
        // 更新所有評論按鈕的狀態
        document.querySelectorAll('.comments-toggle').forEach(toggle => {
            toggle.setAttribute('aria-expanded', isAllCommentsExpanded);
            toggle.innerHTML = `
                <span>${isAllCommentsExpanded ? '收起' : '展開'}評論</span>
                <span class="toggle-icon">${isAllCommentsExpanded ? '▲' : '▼'}</span>
            `;
        });
        
        // 更新全局按鈕文字和圖標
        this.innerHTML = `
            <span class="btn-text">${isAllCommentsExpanded ? '收起' : '展開'}所有評論</span>
            <span class="toggle-icon">${isAllCommentsExpanded ? '▲' : '▼'}</span>
        `;
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
                
                // 創建作品卡片容器
                const workItem = document.createElement('div');
                workItem.classList.add('work-item');
                
                // 創建卡片內容容器
                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');
                
                // 學生姓名
                const studentName = document.createElement('div');
                studentName.classList.add('student-name');
                studentName.textContent = work.studentName;
                cardContent.appendChild(studentName);
                
                // 視頻容器
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('video-container');
                
                // 創建預覽圖容器
                const videoPreview = document.createElement('div');
                videoPreview.classList.add('video-preview');
                
                // 從 YouTube URL 提取視頻 ID
                const videoId = work.videoUrl.split('/embed/')[1];
                if (videoId) {
                    // 設置預覽圖背景
                    videoPreview.style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`;
                    
                    // 添加播放按鈕
                    const playButton = document.createElement('div');
                    playButton.classList.add('play-button');
                    videoPreview.appendChild(playButton);
                    
                    // 點擊預覽圖時載入影片
                    videoPreview.addEventListener('click', function() {
                        // 顯示載入指示器
                        const loadingIndicator = document.createElement('div');
                        loadingIndicator.classList.add('loading-indicator');
                        videoContainer.appendChild(loadingIndicator);
                        
                        // 創建 iframe
                        const iframe = document.createElement('iframe');
                        iframe.src = `${work.videoUrl}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
                        iframe.title = "YouTube video player";
                        iframe.frameBorder = "0";
                        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                        iframe.allowFullscreen = true;
                        
                        // 影片載入完成後移除載入指示器
                        iframe.onload = function() {
                            loadingIndicator.remove();
                        };
                        
                        // 移除預覽圖，添加 iframe
                        videoPreview.remove();
                        videoContainer.appendChild(iframe);
                    });
                }
                
                videoContainer.appendChild(videoPreview);
                cardContent.appendChild(videoContainer);
                
                // 作品標題
                const workTitle = document.createElement('div');
                workTitle.classList.add('work-title');
                workTitle.textContent = work.title;
                cardContent.appendChild(workTitle);
                
                // 將卡片內容添加到作品卡片
                workItem.appendChild(cardContent);
                
                // 添加評論區域
                const commentsSection = document.createElement('div');
                commentsSection.classList.add('comments-section');
                
                // 創建評論標題區域
                const commentsHeader = document.createElement('div');
                commentsHeader.classList.add('comments-header');
                
                const commentsTitle = document.createElement('div');
                commentsTitle.classList.add('comments-title');
                commentsTitle.innerHTML = `
                    <span>評論</span>
                    <span class="comments-count">${work.comments ? work.comments.length : 0}</span>
                `;
                
                commentsHeader.appendChild(commentsTitle);
                commentsSection.appendChild(commentsHeader);
                
                // 創建評論內容容器
                const commentsContent = document.createElement('div');
                commentsContent.classList.add('comments-content');
                commentsContent.style.display = 'none';
                commentsContent.style.background = '#fff';
                
                // 創建評論列表
                const commentsList = document.createElement('div');
                commentsList.classList.add('comments-list');
                
                // 檢查是否有評論
                if (work.comments && work.comments.length > 0) {
                    // 每頁顯示的評論數量
                    const commentsPerPage = 3;
                    let currentPage = 1;
                    
                    // 顯示當前頁的評論
                    function showComments(page) {
                        commentsList.innerHTML = '';
                        const start = (page - 1) * commentsPerPage;
                        const end = start + commentsPerPage;
                        const pageComments = work.comments.slice(start, end);
                        
                        pageComments.forEach(comment => {
                            const commentElement = document.createElement('div');
                            commentElement.classList.add('comment');
                            
                            const commentHeader = document.createElement('div');
                            commentHeader.classList.add('comment-header');
                            
                            const commenterInfo = document.createElement('div');
                            commenterInfo.classList.add('commenter-info');
                            
                            // 添加評分星星
                            const ratingStars = '★'.repeat(comment.rating) + '☆'.repeat(5 - comment.rating);
                            commenterInfo.innerHTML = `
                                <span class="commenter-name">${comment.reviewerName}</span>
                                <span class="commenter-class">${comment.reviewerClass}</span>
                                <span class="rating-stars" title="${comment.rating}分">${ratingStars}</span>
                            `;
                            
                            const commentContent = document.createElement('div');
                            commentContent.classList.add('comment-content');
                            commentContent.textContent = comment.content;
                            
                            commentHeader.appendChild(commenterInfo);
                            commentElement.appendChild(commentHeader);
                            commentElement.appendChild(commentContent);
                            commentsList.appendChild(commentElement);
                        });
                        
                        // 更新分頁按鈕狀態
                        updatePagination();
                    }
                    
                    // 創建分頁控制
                    const pagination = document.createElement('div');
                    pagination.classList.add('comments-pagination');
                    
                    function updatePagination() {
                        pagination.innerHTML = '';
                        const totalPages = Math.ceil(work.comments.length / commentsPerPage);
                        
                        for (let i = 1; i <= totalPages; i++) {
                            const pageButton = document.createElement('button');
                            pageButton.classList.add('page-button');
                            if (i === currentPage) pageButton.classList.add('active');
                            pageButton.textContent = i;
                            pageButton.addEventListener('click', () => {
                                currentPage = i;
                                showComments(currentPage);
                            });
                            pagination.appendChild(pageButton);
                        }
                    }
                    
                    // 初始顯示第一頁
                    showComments(currentPage);
                    commentsContent.appendChild(commentsList);
                    commentsContent.appendChild(pagination);
                } else {
                    const noComments = document.createElement('div');
                    noComments.classList.add('no-comments');
                    noComments.textContent = '暫無評論';
                    commentsContent.appendChild(noComments);
                }
                
                // 添加評論內容到評論區域
                commentsSection.appendChild(commentsContent);
                
                // 將評論區域添加到作品卡片
                workItem.appendChild(commentsSection);
                
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
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .global-comments-control {
        position: fixed;
        bottom: 30px;
        left: 30px;
        z-index: 1000;
    }
    
    .global-comments-btn {
        background: linear-gradient(135deg, #e8c4c4, #d3a5a5);
        color: white;
        border: none;
        border-radius: 25px;
        padding: 12px 24px;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    
    .global-comments-btn:hover {
        background: linear-gradient(135deg, #dbb6b6, #c99797);
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }
    
    .global-comments-btn .toggle-icon {
        font-size: 12px;
        transition: transform 0.3s ease;
    }
    
    .global-comments-btn:hover .toggle-icon {
        transform: translateY(2px);
    }

    /* 手機版樣式 */
    @media (max-width: 768px) {
        .global-comments-control {
            bottom: 20px;
            left: 20px;
        }
        
        .global-comments-btn {
            padding: 8px 16px;
            font-size: 14px;
            gap: 4px;
        }
        
        .global-comments-btn .toggle-icon {
            font-size: 10px;
        }
    }

    /* 更小螢幕的樣式 */
    @media (max-width: 480px) {
        .global-comments-control {
            bottom: 15px;
            left: 15px;
        }
        
        .global-comments-btn {
            padding: 6px 12px;
            font-size: 12px;
        }
        
        .global-comments-btn .toggle-icon {
            font-size: 8px;
        }
    }

    .rating-stars {
        color: #FFD700;
        margin-left: 8px;
        font-size: 0.9em;
    }
`;
document.head.appendChild(styleSheet); 