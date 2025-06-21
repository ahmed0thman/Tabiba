// var ThumbnailsSwiper = new Swiper("#Thumbnails", {
//   // loop: true,
//   breakpoints: {
//     0: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//     460: {
//       slidesPerView: 5,
//       spaceBetween: 10,
//     },
//     550: {
//       slidesPerView: 6,
//       spaceBetween: 10,
//     },
//     700: {
//       slidesPerView: 8,
//       spaceBetween: 10,
//     },
//     992: {
//       slidesPerView: 5,
//       spaceBetween: 10,
//     },
//   },
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var ImagesSwiper = new Swiper("#Images", {
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
//   },
//   spaceBetween: 10,
//   slidesPerView: 1,
//   slidesPerView: 1,
//   navigation: {
//     nextEl: ".swiper-button-prev",
//     prevEl: ".swiper-button-next",
//   },
//   thumbs: {
//     swiper: ThumbnailsSwiper,
//   },
// });

var ThumbnailsSwiper = new Swiper("#Thumbnails", {
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    410: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 7,
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
  freeMode: true,
  watchSlidesProgress: true,
});
var swiimagesSwiper = new Swiper("#Images", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: ThumbnailsSwiper,
  },
});
