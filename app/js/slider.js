import Swiper from "swiper/bundle";

var swiper = new Swiper(".partners-js", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 80,
    }
  },
});



var swiper = new Swiper(".services-js", {
  slidesPerView: 1,
  allowTouchMove: false,
  
  
  navigation: {
    prevEl: ".slider-btn_prev",
    nextEl: ".slider-btn_next",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    }
  },
});
var swiper = new Swiper(".reviews-js", {
  slidesPerView: 1,
  
  navigation: {
    prevEl: ".slider-btn_prev",
    nextEl: ".slider-btn_next",
  }
});



