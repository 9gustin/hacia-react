/* eslint-disable import/prefer-default-export */
import App from '../../App';
import Challenge1 from '../../challenges/1-about-us/App';
import Challenge2 from '../../challenges/2-list-page';

import { PATHS } from './paths';

export const ROUTES = [
  {
    path: PATHS.home,
    component: App,
  },
  {
    path: PATHS.challenge1,
    component: Challenge1,
  },
  {
    path: PATHS.challenge2,
    component: Challenge2,
  },
];
