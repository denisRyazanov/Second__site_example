let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider__next').addEventListener('click', function(){
    offset = offset + 204;
    if (offset > 408) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__prev').addEventListener('click', function () {
    offset = offset - 204;
    if (offset < 0) {
        offset = 408;
    }
    sliderLine.style.left = -offset + 'px';
});

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const closeItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    closeItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active');
            });
        }
    }
}());