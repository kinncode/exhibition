// 等待 DOM 載入完成後再執行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 滾動時導航欄效果
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
            } else {
                nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        }
    });

    // 滾動動畫
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // 取得 DOM 元素
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // 檢查元素是否存在
    if (!menuToggle || !navLinks) {
        return; // 如果元素不存在，直接返回
    }

    // === 切換漢堡選單 ===
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // === 手機版下拉選單切換 ===
    function toggleDropdown(event) {
        if (window.innerWidth <= 768) {
            event.stopPropagation();
            const navItem = event.currentTarget.closest('li');
            if (navItem) {
                navItem.classList.toggle('active');
            }
        }
    }

    // === 手機版點擊展開下拉選單 ===
    document.querySelectorAll('.nav-links > li > a').forEach(link => {
        link.addEventListener('click', function(e) {
            const dropdown = this.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown') && window.innerWidth <= 768) {
                e.preventDefault(); // 手機點擊父項不要直接跳頁
                toggleDropdown(e);
            }
        });
    });

    // === 關閉選單 ===
    function closeMenu() {
        if (menuToggle) menuToggle.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        // 關閉所有展開的下拉選單
        document.querySelectorAll('.nav-links > li').forEach(item => {
            item.classList.remove('active');
        });
    }

    // === 點擊下拉選單項目時關閉選單 ===
    document.querySelectorAll('.nav-links .dropdown a').forEach(dropdownLink => {
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                // 延遲關閉，讓頁面有時間跳轉
                setTimeout(() => {
                    closeMenu();
                }, 100);
            }
        });
    });

    // === 點擊外部關閉選單 ===
    document.addEventListener('click', function(event) {
        if (navLinks && menuToggle) {
            const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
            if (!isClickInside && navLinks.classList.contains('active')) {
                closeMenu();
            }
        }
    });

    // === 當視窗變大時自動清除手機樣式 ===
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});