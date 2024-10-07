import '../assets/scss/blog.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeroSlider } from './components/blog/slider';
import { useTab } from './components/blog/switch-content';

//components
useTheme();
useBurger();
const swiper = useHeroSlider();
useTab(swiper);
