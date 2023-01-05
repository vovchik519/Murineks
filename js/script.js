var swiper = new Swiper(".offer__wrapper", {
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 30,
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