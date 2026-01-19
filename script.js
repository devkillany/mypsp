document.addEventListener('DOMContentLoaded', () => {

    // 1. القائمة في الموبايل
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // إغلاق القائمة عند الضغط على أي رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // 2. محرك الأنيميشن عند السكرول (Scroll Reveal Engine)
    // هذا الكود يبحث عن أي عنصر لديه كلاس reveal ويقوم بإظهاره عند الوصول إليه
    const revealElements = document.querySelectorAll('.reveal-text, .reveal-image, .reveal-card, .reveal-flip');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // مسافة التفعيل

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // تشغيل الدالة مرة واحدة في البداية
    revealOnScroll();

    // 3. توثيق المطور في الكونسول
    console.log("%cتم التطوير بواسطة: محمد الكيلاني", "color: #008ba3; font-size: 16px; font-weight: bold; background: #f0f9ff; padding: 10px; border-radius: 5px; border: 1px solid #008ba3;");
    console.log("Portfolio: https://devkillany.github.io/portofolio/");
});