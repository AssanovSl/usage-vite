import '../assets/scss/main.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider';

//components
useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
