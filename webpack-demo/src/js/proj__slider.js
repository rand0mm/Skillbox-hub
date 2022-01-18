import Swiper, {
  Navigation, A11y, Pagination, Grid,
} from 'swiper';

Swiper.use([Navigation, Pagination, A11y, Grid]);

function progSlider() {
  // eslint-disable-next-line no-unused-vars
  const projSwiper = new Swiper('.proj__slider', {
    a11y: {
      prevSlideMessage: 'Предудщий слайд',
      nextSlideMessage: 'Следующий слайд',
      containerMessage: 'Партнеры проекта',
    },
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    grid: {
      rows: 1,
      fill: '',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 34,
        grid: {
          rows: 1,
          fill: 'row',
        },

      },

      591: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },

      1201: {
        slidesPerView: 3,
        slidesPerGroup: 6,
        spaceBetween: 50,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },

      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },

    },

  });
}
export default progSlider;
