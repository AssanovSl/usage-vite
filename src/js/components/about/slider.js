import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Navigation],
    initialSlide: 0,
    slidesPerView: 2.6,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.hero__slider-next',
      prevEl: '.hero__slider-prev',
    },
  });
};
