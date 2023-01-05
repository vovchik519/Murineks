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