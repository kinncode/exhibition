
    const activityImages = [
        {
            src: 'img/resume/MCES1.png',
            alt: '學生創作活動照片 1',
            caption: '學生們專注創作履歷表'
        },
        {
            src: 'img/activity/activity2.jpg',
            alt: '學生創作活動照片 2',
            caption: '作品討論與分享'
        },
        {
            src: 'img/activity/activity3.jpg',
            alt: '學生創作活動照片 3',
            caption: '創意發想過程'
        },
        {
            src: 'img/activity/activity4.jpg',
            alt: '學生創作活動照片 4',
            caption: '作品展示與交流'
        }
        // 可以在這裡添加更多圖片
        // {
        //     src: 'img/activity/activity5.jpg',
        //     alt: '學生創作活動照片 5',
        //     caption: '更多活動照片'
        // }
    ];

    // 動態創建輪播幻燈片
    const carouselTrack = document.getElementById('carousel-track');
    
    function createSlides() {
        activityImages.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.onerror = function() {
                this.style.display = 'none';
            };
            
            const caption = document.createElement('div');
            caption.className = 'slide-caption';
            caption.textContent = image.caption;
            
            slide.appendChild(img);
            slide.appendChild(caption);
            carouselTrack.appendChild(slide);
        });
    }

    // 創建幻燈片
    createSlides();
    