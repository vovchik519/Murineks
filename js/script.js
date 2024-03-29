var swiper = new Swiper(".offer__wrapper", {
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.slider-pagination',
                type: 'bullets',
                clickable: true,
            },
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 10,

        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
});

var swiper = new Swiper(".news__wrapper", {
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
    },
    pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1
        },
        769: {
            slidesPerView: 2
        },
        1025: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".purchases__wrapper", {
    slidesPerView: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 50,
    navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
    },
    pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1
        },
        769: {
            slidesPerView: 2
        }
    }
});

var swiper = new Swiper(".usp__slider", {
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 10,
    pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
    },
});

let bodyOverflow = document.querySelector('body');
let menuBtn = document.querySelector('.menu-btn');
let headerWrap = document.querySelector('.header__wrap');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    headerWrap.classList.toggle('active');
    bodyOverflow.classList.toggle('active');
})

let menuList = document.querySelector('.menu__list');
menuList.addEventListener('click', function () {
    menuBtn.classList.remove('active');
    headerWrap.classList.remove('active');
    bodyOverflow.classList.remove('active');
})