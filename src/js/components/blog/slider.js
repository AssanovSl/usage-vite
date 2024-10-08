import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  const heroSlider = new Swiper('.hero__slider', {
    modules: [Navigation],
    initialSlide: 0,
    spaceBetween: 32,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.hero__slider-next',
      prevEl: '.hero__slider-prev',
    },
  });

  return heroSlider;
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    initialSlide: 0,
    spaceBetween: 32,
    slidesPerView: 3,
    loop: false,
    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },
  });
};
