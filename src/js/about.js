import '../assets/scss/about.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeroSlider } from './components/about/slider';
import { useInsightCircleType } from './components/about/circletype';

//components
useTheme();
useBurger();
useInsightCircleType();
useHeroSlider();
