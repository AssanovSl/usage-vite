import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  const heroSlider = new Swiper('.hero__slider', {
    modules: [Navigation],
    initialSlide: 0,
    spaceBetween: 32,
    slidesPerView: 2.6,
    loop: true,
    navigation: {
      nextEl: '.hero__slider-next',
      prevEl: '.hero__slider-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
      },
    },
  });

  return heroSlider;
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    initialSlide: 0,
    spaceBetween: 20,
    slidesPerView: 1.3,
    loop: false,
    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },
    breakpoints: {
      577: {
        spaceBetween: 16,
        slidesPerView: 2.4,
      },
      993: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
    },
  });
};
