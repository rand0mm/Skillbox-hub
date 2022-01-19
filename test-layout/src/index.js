import './main.scss';
import Swiper, { EffectFade, Thumbs } from 'swiper';
import Choices from 'choices.js';

Swiper.use([EffectFade, Thumbs]);

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
    },
  },
});
const choicesElement = document.querySelector('.choices');
const choices = new Choices(choicesElement, {
  silent: true,
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false,
  itemSelectText: '',
});
