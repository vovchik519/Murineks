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
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2

        },
        1024: {
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
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
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
        320: {
            slidesPerView: 1
        },
        768: {
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

let menuBtn = document.querySelector('.menu-btn');
let headerWrap = document.querySelector('.header__wrap');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    headerWrap.classList.toggle('active');
})