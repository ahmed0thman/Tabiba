const contractorsSwiper = new Swiper("#contractors", {
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    410: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    4500: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    786: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
