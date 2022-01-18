import Swiper from 'swiper';

function heroSwiper() {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.hero__slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    touchRatio: 0,
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
    },
    speed: 3000,
  });
}

export default heroSwiper;
