const swiper = new Swiper(".section__work_slider .swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  watchSlidesProgress: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiiper2 = new Swiper(".section_location_slider .swiper", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 500px
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
const swiper3 = new Swiper(".comments_section .swiper", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 500px
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
