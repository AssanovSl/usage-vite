import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.insight__slider-next',
      prevEl: '.insight__slider-prev',
    },
    breakpoints: {
      992: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
