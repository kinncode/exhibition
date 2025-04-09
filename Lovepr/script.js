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
                        videoUrl: "https://www.youtube.com/embed/-mGlmr2rcco",
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
                        videoUrl: "https://www.youtube.com/embed/LVvNEYeNtus",
                        title: "予你"
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
                        videoUrl: "https://www.youtube.com/embed/8o7wqNQAgmM",
                        title: "緣起如風"
                    },
                    {
                        studentName: "邱秀和",
                        videoUrl: "https://www.youtube.com/embed/T3lDIJ3czjg",
                        title: "〈關於我們〉"
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
                        videoUrl: "https://www.youtube.com/embed/dT8wSVenEUs",
                        title: "燼雪殘香"
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
                        videoUrl: "https://www.youtube.com/embed/pF6eh_FQpek",
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
                        videoUrl: "https://www.youtube.com/embed/XcmGjBWXFeo",
                        title: "錯過的甜"
                    },
                    {
                        studentName: "李奇叡",
                        videoUrl: "https://www.youtube.com/embed/_Zsywy-hVew",
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
                        videoUrl: "https://www.youtube.com/embed/3yLGGR4DIeU",
                        title: ""
                    },
                    {
                        studentName: "黃柏森",
                        videoUrl: "https://www.youtube.com/embed/zN5m93FrRCo",
                        title: ""
                    },
                    {
                        studentName: "洪肇甫",
                        videoUrl: "https://www.youtube.com/embed/T6oONQYY31k",
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
                        videoUrl: "https://www.youtube.com/embed/Tvw1IWaWEJg",
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
                        videoUrl: "https://www.youtube.com/embed/FTMcLOa-6YE",
                        title: ""
                    },
                    {
                        studentName: "鄧宇智",
                        videoUrl: "https://www.youtube.com/embed/jguvfcdA4JU",
                        title: "初見"
                    },
                    {
                        studentName: "李安芽",
                        videoUrl: "https://www.youtube.com/embed/Jl05sQi3uC0",
                        title: "星夜思語 2"
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
                        videoUrl: "https://www.youtube.com/embed/4r0D9RK4aL8",
                        title: "在你眼中"
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
                        title: "情深深"
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
            members: "組員：呂旼憲 張家祐 郭哲維 呂嘉慶",
            works: [
              { studentName: "4B330053 郭哲維", videoUrl: "https://www.youtube.com/embed/zHgVLxBMc14", title: "青春紀念信" },
              { studentName: "4B330052 張家祐", videoUrl: "https://www.youtube.com/embed/MjOJZJ-Fads", title: "流星的命定" },
              { studentName: "呂旼憲", videoUrl: "https://www.youtube.com/embed/U2cGkgSo4Mc", title: "你以後，無人以後" },
              { studentName: "呂嘉慶", videoUrl: "", title: "" }
            ]
          },
          {
            name: "第二組",
            members: "組員：許俊翔 謝仲傑 姚品齊 施博允",
            works: [
              { studentName: "4B330047 許俊翔", videoUrl: "https://www.youtube.com/embed/hFUXBlDwCiI", title: "" },
              { studentName: "謝仲傑", videoUrl: "https://www.youtube.com/embed/hFUXBlDwCiI", title: "" },
              { studentName: "4b330059 姚品齊", videoUrl: "https://www.youtube.com/embed/jTaBYcHrwGQ", title: "" },
              { studentName: "4B330060 施博允", videoUrl: "https://www.youtube.com/embed/8E64YJwwX4I", title: "" }
            ]
          },
          {
            name: "第三組",
            members: "組員：鄭儕蔚 林岑晏 張皓偉 李宥霖 林朝原",
            works: [
              { studentName: "4B330069 張皓偉", videoUrl: "https://www.youtube.com/embed/OzsJ3hn1ots", title: "盼影" },
              { studentName: "4B330035 鄭儕蔚", videoUrl: "https://www.youtube.com/embed/u_D1OgpnjoY", title: "暮色微涼" },
              { studentName: "林岑晏", videoUrl: "", title: "" },
              { studentName: "李宥霖", videoUrl: "", title: "" },
              { studentName: "林朝原", videoUrl: "", title: "" }
            ]
          },
          {
            name: "第四組",
            members: "組員：李安喆 郭東昇 黃紘慧 邱宗賢",
            works: [
              { studentName: "4B330101 邱宗賢", videoUrl: "https://www.youtube.com/embed/hgaOrGTI46w", title: "別離前夕" },
              { studentName: "4B330043 郭東昇", videoUrl: "https://www.youtube.com/embed/n7PUAGpVvJ4", title: "錯落之間" },
              { studentName: "4B330044 黃紘慧", videoUrl: "https://www.youtube.com/embed/Gj_nr9ov2JU", title: "櫻花下的約定" },
              { studentName: "4B330041 李安喆", videoUrl: "https://www.youtube.com/embed/vG_lWHnxaak", title: "霓虹下的離歌" }
            ]
          },
          {
            name: "第五組",
            members: "組員：陳思妤 李易勳 黃暐閎 葉冠宇",
            works: [
              { studentName: "4B330093 黃暐閎", videoUrl: "https://www.youtube.com/embed/Sg5m5GF6Lkw", title: "回憶的痕跡" },
              { studentName: "4B330033 陳思妤", videoUrl: "https://www.youtube.com/embed/cMOl36welzg", title: "殘影" },
              { studentName: "4B330034 李易勳", videoUrl: "https://www.youtube.com/embed/OPCAB-lDXls", title: "餘溫" },
              { studentName: "4B330096 葉冠宇", videoUrl: "https://www.youtube.com/embed/HQErXhTw39s", title: "靜夜寄語遠方" }
            ]
          },
          {
            name: "第六組",
            members: "組員：張恩菘 簡揚凱 羅振嘉 郭倚修 宋翊帆",
            works: [
              { studentName: "張恩菘", videoUrl: "", title: "" },
              { studentName: "簡揚凱", videoUrl: "", title: "" },
              { studentName: "羅振嘉", videoUrl: "", title: "" },
              { studentName: "郭倚修", videoUrl: "", title: "" },
              { studentName: "宋翊帆", videoUrl: "", title: "" }
            ]
          },
          {
            name: "第七組",
            members: "組員：吳笠豐 吳祥維 黃政瑋 黃弘靜",
            works: [
              { studentName: "4B330042 吳祥維", videoUrl: "https://www.youtube.com/embed/m5WT53nQGWM", title: "寂寞" },
              { studentName: "4B330030 吳笠豐", videoUrl: "https://www.youtube.com/embed/ysJBva85QTw", title: "遺憾的地址" },
              { studentName: "黃政瑋", videoUrl: "", title: "" },
              { studentName: "黃弘靜", videoUrl: "", title: "" }
            ]
          },
          {
            name: "第八組",
            members: "組員：詹佳穎 簡仕傑 吳宗恩 李昆諺",
            works: [
              { studentName: "4B330086 簡仕傑", videoUrl: "https://www.youtube.com/embed/xQZ-Bkhaslk", title: "時光的錯落" },
              { studentName: "4B330054 詹佳穎", videoUrl: "https://www.youtube.com/embed/QU3EIP4VjXU", title: "還沒寫完的故事" },
              { studentName: "吳宗恩", videoUrl: "", title: "" },
              { studentName: "李昆諺", videoUrl: "", title: "" }
            ]
          },
          {
            name: "第九組",
            members: "組員：黃奕睿 張孟綸 廖崇凱 張鈞凱",
            works: [
              { studentName: "4B330108 張鈞凱", videoUrl: "https://www.youtube.com/embed/NSY2BnXZFow", title: "浪漫夜晚" },
              { studentName: "4B330055 廖崇凱", videoUrl: "https://www.youtube.com/embed/Q8ggpMcexyY", title: "" },
              { studentName: "4B330048 張孟綸", videoUrl: "https://www.youtube.com/embed/jy0DcK55SH0", title: "留在風裡的思念" },
              { studentName: "4B330040 黃奕睿", videoUrl: "https://www.youtube.com/embed/ZeK7UyehaTg", title: "情歌朗讀" }
            ]
          },
          {
            name: "第十組",
            members: "組員：陳品皓 徐浩凱 郭彥承 黃榆証",
            works: [
              { studentName: "4B330057 徐浩凱", videoUrl: "https://www.youtube.com/embed/j_221_l5rak", title: "遺忘的流浪" },
              { studentName: "4B330114 黃榆証", videoUrl: "https://www.youtube.com/embed/s0WahbyZTuw", title: "我們都累了" },
              { studentName: "4B330084 郭彥承", videoUrl: "https://www.youtube.com/embed/N4GQCiPI0Kc", title: "影中故人" },
              { studentName: "4B330050 陳品皓", videoUrl: "https://www.youtube.com/embed/phNcGoD9Sro", title: "牽手的風景" }
            ]
          },
          {
            name: "第十一組",
            members: "組員：陽劼睿 利宥伶 許晉翊 葉育綸",
            works: [
              { studentName: "4B330036 陽劼睿", videoUrl: "https://www.youtube.com/embed/zbSTfwh4JTo", title: "告別" },
              { studentName: "4B330038 利宥伶", videoUrl: "https://www.youtube.com/embed/xp7YuLE0OG4", title: "風中的悸動" },
              { studentName: "4B330087 葉育綸", videoUrl: "https://www.youtube.com/embed/SJ-WR1FWyRA", title: "" },
              { studentName: "許晉翊", videoUrl: "", title: "" }
            ]
          },
          {
            name: "第十二組",
            members: "組員：蘇侑峰 陳泊安 柯宥廷 林俊翰",
            works: [
              { studentName: "4B330064 林俊翰", videoUrl: "https://www.youtube.com/embed/3huL-lcqtnw", title: "" },
              { studentName: "4B330063 柯宥廷", videoUrl: "https://www.youtube.com/embed/zvMzShw2jsI", title: "" },
              { studentName: "4B330031 蘇侑峰", videoUrl: "https://www.youtube.com/embed/e4R4YAOvRtw", title: "深情" },
              { studentName: "4B330045 陳泊安", videoUrl: "https://www.youtube.com/embed/Zlwn2aVfhYc", title: "月光海誓" }
            ]
          },
          {
            name: "第十三組",
            members: "組員：林仲謙 黃柏霖 鄭書堯 黃勁瑋",
            works: [
              { studentName: "林仲謙", videoUrl: "", title: "" },
              { studentName: "黃柏霖", videoUrl: "", title: "" },
              { studentName: "鄭書堯", videoUrl: "", title: "" },
              { studentName: "黃勁瑋", videoUrl: "", title: "" }
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
                        title: "獨燈"
                    },
                    {
                        studentName: "吳政峰",
                        videoUrl: "https://www.youtube.com/embed/_fp-yiQF_Eg",
                        title: ""
                    },
                    {
                        studentName: "方柏竣",
                        videoUrl: "https://www.youtube.com/embed/L-CANqas_Qw",
                        title: "微光航向"
                    },
                    {
                        studentName: "林相名",
                        videoUrl: "https://www.youtube.com/embed/JwFcIkMKa8M",
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
                        videoUrl: "https://www.youtube.com/embed/tzKa9n564Hk",
                        title: "戀愛的形狀"
                    },
                    {
                        studentName: "黃志賢",
                        videoUrl: "https://www.youtube.com/embed/_2pbEly1yVE",
                        title: "寂寞的那心"
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
                        videoUrl: "https://www.youtube.com/embed/0d3L4Simgkw",
                        title: "伴"
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
