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

export const useTeamSlider = () => {
  new Swiper('.our-team__slider', {
    modules: [Navigation],
    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 32,
    slidesPerView: 1.6,
    loop: false,
    navigation: {
      nextEl: '.our-team__slider-next',
      prevEl: '.our-team__slider-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        centeredSlides: false,
        initialSlide: 0,
      },
      576: {
        slidesPerView: 2.4,
      },

      380: {
        slidesPerView: 2,
      },
    },
  });
};
