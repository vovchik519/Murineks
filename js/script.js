document.addEventListener('DOMContentLoaded', () => {

    const onScrollHeader = () => {

        const header = document.querySelector('.header')

        let prevScroll = window.pageYOffset
        let currentScroll

        window.addEventListener('scroll', () => {

            currentScroll = window.pageYOffset

            const headerHidden = () => header.classList.contains('header_hidden')

            if (currentScroll > prevScroll && !headerHidden()) {
                header.classList.add('header_hidden')
            }
            if (currentScroll < prevScroll && headerHidden()) {
                header.classList.remove('header_hidden')
            }

            prevScroll = currentScroll

        })

    }

    onScrollHeader()

});
var swiper = new Swiper(".offer__wrapper", {
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 40,
    navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
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
    spaceBetween: 45,
    navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
    },
    pagination: {
        el: '.slider-pagination',
        type: 'bullets',
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
    spaceBetween: 100,
    navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
    }
});

let bodyOverflow = document.querySelector('body');
let menuBtn = document.querySelector('.menu-btn');
let headerWrap = document.querySelector('.header__wrap');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    headerWrap.classList.toggle('active');
    bodyOverflow.classList.toggle('active');
})