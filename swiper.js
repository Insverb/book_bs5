
const swiper = new Swiper('.swiper1',  {
    speed: 600,
    spaceBetween: 100,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    breakpoints: {
        320: {
            slidesPerView: 1.5
        },
        480: {
            slidesPerView: 2
        },
        760: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        },
        1300: {
            slidesPerView: 6
        },
    },

    spaceBetween: 25,

    loop: true,

    loopedSlides: 6,

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    }
});

  const swiper2 = new Swiper('.swiper2',  {
    speed: 600,
    spaceBetween: 25,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    slidesPerView: 1,

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    loop: true,

    loopedSlides: 5,

})
