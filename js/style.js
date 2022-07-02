
    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 35,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 4.5,
            },
            1800: {
                slidesPerView: 5.5,
            },
        }
    });



// article js
var swiper = new Swiper('.myArticle', {
    slidesPerView: 3.5,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3.5,
        },
    }
});


// camercial js
var swiper = new Swiper('.myCammercial', {
    spaceBetween: 90,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 6,
        },
    }
});

