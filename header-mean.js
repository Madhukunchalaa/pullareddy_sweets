
document.addEventListener("DOMContentLoaded", function() {
    const uniHamburger = document.getElementById('uni-hamburger-toggle');
    const uniSidebar = document.querySelector('.uni-mobile-sidebar');
    const uniOverlay = document.querySelector('.uni-mobile-overlay');
    const uniClose = document.querySelector('.uni-mobile-close');

    uniHamburger.addEventListener('click', () => {
        uniSidebar.classList.add('active');
        uniOverlay.classList.add('active');
    });

    uniClose.addEventListener('click', () => {
        uniSidebar.classList.remove('active');
        uniOverlay.classList.remove('active');
    });

    uniOverlay.addEventListener('click', () => {
        uniSidebar.classList.remove('active');
        uniOverlay.classList.remove('active');
    });
});

