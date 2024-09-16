import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
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
