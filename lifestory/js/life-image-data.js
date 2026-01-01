// 生命圖像資料
// 格式：{ id, image, description, class, studentId, studentName }
const lifeImageData = [
    // 範例資料 - 您可以根據實際情況修改
    { id: 1, image: 'img/life1/1.jpg', description: '我的生命就像是未完待續的經典漫畫，經典的開局，經典的故事，經典的平凡，但即使是沒有色彩只是黑白的灰階的生命圖，也阻止不了你看見我生動的靈魂。', 
    class: 'class1', studentId: '4b4k0057', studentName: '陳安柔' ,isVertical: true},
    { id: 2, image: 'img/life1/2.jpg', description: '成長的過程充滿挑戰，但每一步都值得珍惜', 
    class: 'class1', studentId: '110123457', studentName: '李四' ,isVertical: true},
    { id: 3, image: 'img/life1/3.jpg', description: '友誼是生命中最珍貴的禮物', class: 'class1', studentId: '110123458', studentName: '王五' },
    { id: 4, image: 'img/life1/4.jpg', description: '夢想是引導我們前進的明燈', class: 'class1', studentId: '110123459', studentName: '趙六' },
    { id: 5, image: 'img/life1/5.jpg', description: '家庭是我們永遠的避風港', class: 'class1', studentId: '110123460', studentName: '錢七' },
    { id: 6, image: 'img/life1/6.jpg', description: '學習讓我們不斷成長和進步', class: 'class1', studentId: '110123461', studentName: '孫八' },
    { id: 7, image: 'img/life1/7.jpg', description: '堅持是通往成功的唯一道路', class: 'class1', studentId: '110123462', studentName: '周九' },
    { id: 8, image: 'img/life1/8.jpg', description: '回憶是時間留給我們最美好的禮物', class: 'class1', studentId: '110123463', studentName: '吳十' },
    { id: 9, image: 'img/life1/9.jpg', description: '愛是生命中最強大的力量', class: 'class1', studentId: '110123464', studentName: '鄭一' },
    { id: 10, image: 'img/life1/10.jpg', description: '希望讓我們在黑暗中看見光明', class: 'class1', studentId: '110123465', studentName: '陳二' },
    { id: 11, image: 'img/class2/W2-1.png', description: '每一次的選擇都塑造了今天的我們', class: 'class2', studentId: '110123466', studentName: '林三' },
    { id: 12, image: 'img/class2/W2-2.png', description: '勇氣讓我們敢於面對未知的挑戰', class: 'class2', studentId: '110123467', studentName: '黃四' },
    { id: 13, image: 'img/class2/W2-3.png', description: '感恩讓我們珍惜身邊的一切', class: 'class2', studentId: '110123468', studentName: '劉五' },
    { id: 14, image: 'img/class2/W2-4.png', description: '時間是最好的老師，教會我們成長', class: 'class2', studentId: '110123469', studentName: '楊六' },
    { id: 15, image: 'img/class2/W3-1.png', description: '分享讓快樂加倍，讓痛苦減半', class: 'class2', studentId: '110123470', studentName: '朱七' },
    { id: 16, image: 'img/class2/W3-2.png', description: '信任是建立關係的基礎', class: 'class2', studentId: '110123471', studentName: '許八' },
    { id: 17, image: 'img/class2/W3-3.png', description: '創造力讓我們看見不同的可能性', class: 'class2', studentId: '110123472', studentName: '何九' },
    { id: 18, image: 'img/class2/W3-4.png', description: '耐心是成就大事的關鍵', class: 'class2', studentId: '110123473', studentName: '羅十' },
    { id: 19, image: 'img/class2/W6-1.png', description: '合作讓我們能夠完成更大的目標', class: 'class2', studentId: '110123474', studentName: '高十一' },
    { id: 20, image: 'img/class2/W6-2.png', description: '反思讓我們從經驗中學習', class: 'class2', studentId: '110123475', studentName: '謝十二' },
    
    { id: 21, image: 'img/class3/W2-1.png', description: '生命是一場美麗的旅程', class: 'class3', studentId: '110123476', studentName: '郭十三' },
    { id: 22, image: 'img/class3/W2-2.png', description: '每個人都擁有獨特的光芒', class: 'class3', studentId: '110123477', studentName: '馬十四' },
    { id: 23, image: 'img/class3/W2-3.png', description: '改變是成長的開始', class: 'class3', studentId: '110123478', studentName: '梁十五' },
    { id: 24, image: 'img/class3/W2-4.png', description: '真誠是建立深厚關係的橋樑', class: 'class3', studentId: '110123479', studentName: '宋十六' },
    { id: 25, image: 'img/class3/W3-1.png', description: '知識是我們最寶貴的財富', class: 'class3', studentId: '110123480', studentName: '唐十七' },
    { id: 26, image: 'img/class3/W3-2.png', description: '熱情讓我們對生活充滿期待', class: 'class3', studentId: '110123481', studentName: '韓十八' },
    { id: 27, image: 'img/class3/W3-3.png', description: '寬容讓我們的心更加寬廣', class: 'class3', studentId: '110123482', studentName: '馮十九' },
    { id: 28, image: 'img/class3/W3-4.png', description: '堅持夢想，總有一天會實現', class: 'class3', studentId: '110123483', studentName: '于二十' },
    { id: 29, image: 'img/class3/W4-1.png', description: '生命中的每一刻都值得被記錄', class: 'class3', studentId: '110123484', studentName: '董二一' },
    { id: 30, image: 'img/class3/W4-2.png', description: '愛與被愛是人生最大的幸福', class: 'class3', studentId: '110123485', studentName: '蕭二二' }
];

