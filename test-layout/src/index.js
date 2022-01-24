import './main.scss';
import Swiper, { EffectFade, Thumbs } from 'swiper';
import Choices from 'choices.js';
import counter from './js/counter';

Swiper.use([EffectFade, Thumbs]);

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.left-box__slider', {
  fadeEffect: {
    crossFade: true,
  },
  touchRatio: 0,
  spaceBetween: 0,
  thumbs: {
    swiper: {
      direction: 'vertical',
      el: '.left-box__mini-image-slider',
      slidesPerView: 5,
      spaceBetween: 7,
      breakpoints: {

        320: {
          spaceBetween: 4,
        },
      },
    },
  },
});
const choicesElement = document.querySelector('.choices');
// eslint-disable-next-line no-unused-vars
const choices = new Choices(choicesElement, {
  silent: true,
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false,
  itemSelectText: '',
});
counter();
