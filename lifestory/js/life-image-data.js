// 生命圖像資料
// 格式：{ id, image, description, class, studentId, studentName }
const lifeImageData = [
    // 範例資料 - 您可以根據實際情況修改
    { id: 1, image: 'img/life1/1.jpg', description: '我的生命就像是未完待續的經典漫畫，經典的開局，經典的故事，經典的平凡，但即使是沒有色彩只是黑白的灰階的生命圖，也阻止不了你看見我生動的靈魂。', 
    class: 'class1', studentId: '4b4k0057', studentName: '陳安柔' ,isVertical: true},
    { id: 2, image: 'img/life1/2.jpg', description: '我的生命就像我親手攤開了我的布，裡面有許多充滿回憶的物品。有陪我十幾年的米奇玩偶，它灰灰的看起來很舊，還有小睡袍，麻麻都會幫我穿，還有國小到高中養的倉鼠。', 
    class: 'class1', studentId: '4B4K0190', studentName: '林玥妡' ,isVertical: true},
    { id: 3, image: 'img/life1/3.jpg', description: '我覺得我的生命彷彿像一個章魚哥，外表看起來冷靜、有點厭世，總是默默把情緒藏起來。我認為人生就是在現實與理想之間來回拉扯，一邊被生活推著走，一邊又想守住內心真正想要的東西。', class: 'class1', studentId: '4B4K0053', studentName: '林軒妤' },
    { id: 4, image: 'img/life1/4.jpg', description: '生命就是一個圓環，時而大順暢，有時也會發生一些意外。細想時會發現大部份保留下來的記憶都是不好的才會刻骨銘心，不過也還是有幾個令我印象深刻的好故事。', class: 'class1', studentId: '4B4K0078', studentName: '林明哲' },
    { id: 5, image: 'img/life1/5.jpg', description: '或許人生像一部電影、一部幻燈片、一個老膠卷，或是跑馬燈，但我會說人生就是一顆轉瞬即逝的流星，燦爛、美好，但終就只是曇花一現，流星的尾巴也會因你的遭遇而有不同的光彩。', class: 'class1', studentId: '4B4K0150', studentName: '王子芹' },
    { id: 6, image: 'img/life1/6.jpg', description: '我人生就像充滿張力的雜亂線條堆疊成一個深邃的球，但感覺人生就是某個階段長這樣。雖然都是形容，但都是活著的感想，希望未來這個人生可以變成暖色調，照亮周圍圖，而不是把周遭變灰暗。', class: 'class1', studentId: '4b4k0057', studentName: '陳安柔' },
    { id: 7, image: 'img/life1/7.jpg', description: '人生就像由畫筆所繪製出來的畫，每一個筆觸、下筆的力度都影響著最後想呈現的感覺，若當下的感覺是開心、色、形狀必定是多彩、自由的；若是難過、憂鬱的，必定是無色、拘束的。', class: 'class1', studentId: '4B4K0014', studentName: '謝旼靜' },
    { id: 8, image: 'img/life1/8.jpg', description: '我覺得我的人生就像紙飛機一樣自由飛翔，有時飛高遇見許多快樂且美好的事物，有時又飛到低處體會到許多不開心的事情，人生就像紙飛機一樣大起大落，穿梭在不同的時間線與背景。', class: 'class1', studentId: '4B4K0091', studentName: '呂喬葳' },
    { id: 9, image: 'img/life1/9.jpg', description: '生命就像蟲，我就像是超討厭蟲然後對它們狂噴殺蟲劑的人，蟲有好有壞，我不會對好蟲噴殺蟲劑，我會對壞蟲噴上一整罐的殺蟲劑，就像問題一定有方法解決，殺蟲劑也絕不會沒用。', class: 'class1', studentId: '4B4K0003', studentName: '紀驊恩' },
    { id: 10, image: 'img/life1/10.jpg', description: '我的生命像IG上的泡泡，限時動態紀錄著我生命的每一刻，不論是會考前緊張徬徨的心、統測後不安的想法，只要順手一拍，按下發送，那些情緒就好像消失了一樣，心裡也得到慰藉。', class: 'class1', studentId: '4B4K0220', studentName: '簡岑芳' },
    { id: 11, image: 'img/life1/13A.jpg', description: '這張圖中的人物是來自日本的歌手優里，他是我最喜歡的歌手。', class: 'class2', studentId: '4b41d004', studentName: '蔡博宇' },
    { id: 12, image: 'img/life1/14A.jpg', description: '這畫面描繪了一對古風情侶，男主角戴著獨眼眼罩， 旁邊的蝴蝶是我人生中最開心、最重要的事，這些重要的事，支撐著我殘破的人生。', class: 'class2', studentId: '4b41d009', studentName: '梁俊彥' },
    { id: 13, image: 'img/life1/11A.jpg', description: '這幅畫作以蔬果為隱喻，圍繞蘋果有兩隻，編織出一場關於生命滋味的奇幻旅程。', class: 'class2', studentId: '4b41d112', studentName: '李之歆' },
    { id: 14, image: 'img/life1/15A.jpg', description: '這個充滿各種顏色的花是日本一位藝術家叫村上隆的創作，我會選擇這個圖案是因為他用的顏色幾乎都是比較鮮豔的用色，跟我目前的情況一樣。', class: 'class2', studentId: '4b41d040', studentName: '劉祐宇' },
    
    { id: 15, image: 'img/life1/11.jpg', description: '整體視覺不是分裂的多重自我(如火影忍者的各種人物)，是一條從痛苦走向理解、從生存走向選擇的內在軌跡。呈現人在矛盾中前行、在承受中形成自我的過程。', class: 'class2', studentId: '4b430100', studentName: '戴冠程' },
    { id: 16, image: 'img/life1/12.jpg', description: '這個作品的創作理念在於以電腦介面隱喻人生的結構與流動。', class: 'class2', studentId: '4b430010', studentName: '洪世宇' },
    { id: 17, image: 'img/life1/13.jpg', description: '這張生命圖像用了一隻大雨傘像似台灣商家有的經典大雨傘。', class: 'class2', studentId: '4b430111', studentName: '蔡汶榛' },
    { id: 18, image: 'img/life1/14.jpg', description: '很多人對金魚的印象就是記性不好，而我剛好也是個很健忘的人。', class: 'class2', studentId: '4b430033', studentName: '賴慧安' },
    { id: 19, image: 'img/life1/15.jpg', description: '我的生命圖像以紙飛機作為象徵，代表我在人生中不斷前進與嘗試的過程。', class: 'class2', studentId: '4b430054', studentName: '謝晉瑋' },
    { id: 20, image: 'img/life1/16.jpg', description: '我用樹來代表自己，因為我覺得人生就像一棵樹，會慢慢成長，也會留下很多回憶。', class: 'class2', studentId: '4b430046', studentName: '陳俊廷' },
    
    { id: 21, image: 'img/life1/17.jpg', description: '我覺得我的人生就像一顆炸彈，而我是那個拆炸彈的人。', class: 'class3', studentId: '4b430078', studentName: '張瑋真' },
    { id: 22, image: 'img/life1/18.jpg', description: '我以火炮為主角，用他調整瞄準生命中的挑戰以及目標去表示方向所在。', class: 'class3', studentId: '4b430105', studentName: '陳宥潤' },
    { id: 23, image: 'img/life1/19.jpg', description: '我的興趣是收藏唱片及聆聽，唱片都是灌錄的，也是一種作品，我認為我的人生都是可以灌錄進去的。', class: 'class3', studentId: '4b430036', studentName: '張晉瑋' , isVertical: true},
    { id: 24, image: 'img/life1/20.jpg', description: '這幅畫作重塑了交叉路口的一項，道路上空無一人，卻處處是選擇下的痕跡。', class: 'class3', studentId: '4b430062', studentName: '張裕程' }
];

