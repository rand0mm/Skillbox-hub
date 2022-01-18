/* eslint-disable no-new */
// import ' /dist/tippy.css';
// import 'simplebar/dist/simplebar.css';
import $ from 'jquery';
import tippy from 'tippy.js';
import Swiper, {
  Navigation, A11y, Pagination, Grid,
} from 'swiper';
import SimpleBar from 'simplebar';
import Choices from 'choices.js';
import heroSwiper from './js/swiper';
import sendmail from './js/sendmail';
import tabs from './js/tabs';
import searchingForm from './js/search-form';
import dropDown from './js/drop-down';
import gallerySlider from './js/gallery-slider';
import progSlider from './js/proj__slider';
import navMenuFunc from './js/nav-menu';
import modal from './js/modal';
import './main.scss';

require('webpack-jquery-ui/accordion');

Swiper.use([Navigation, Pagination, A11y, Grid]);

global.jQuery = $;
global.$ = $;
heroSwiper();
sendmail();
tabs();
searchingForm();
dropDown();
gallerySlider();
progSlider();
navMenuFunc();
modal();

$(() => {
  $('#accordion').accordion({
    active: 0,
    collapsible: true,
    heightStyle: 'content',
  });
});

$(() => {
  $('#accordion-empty').accordion({
    active: false,
    collapsible: true,
    heightStyle: 'content',
  });
});

const mobile = window.matchMedia('(min-width: 0px) and (max-width: 590px)');
const desktop = window.matchMedia('(min-width: 591px)');
const large = window.matchMedia('(min-width: 1201px)');

let eventSwiper = new Swiper('.event__slider', {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  grid: {
    rows: 1,
    fill: 'row',
  },
  pagination: {
    el: '.event__slider-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      grid: {
        rows: 1,
        fill: 'row',
      },

    },

    591: {
      slidesPerView: 10,
      slidesPerGroup: 10,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});
let editSwiper = new Swiper('.edit__slider', {
  a11y: {
    revSlideMessage: 'Предудщий слайд',
    nextSlideMessage: 'Следующий слайд',
    containerMessage: 'Галерея работ',
  },
  loop: false,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

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
      allowTouchMove: false,
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
      spaceBetween: 49,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },

    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
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
let initA = false;
let initB = false;
/* Which media query
************************************************************* */
function swiperMode() {
  // Enable (for mobile)
  if (mobile.matches) {
    // $(document).ready(() => {
    //   $('#painters').on('click', 'a', (event) => {
    //     event.preventDefault();
    //     const id = $(this).attr('href');
    //     const { top } = $(id).offset();
    //     $('body,html').animate({ scrollTop: top }, 1000);
    //   });
    // });
    if (editSwiper !== undefined) {
      editSwiper.destroy(true, true);
      initB = false;
    }
    if (!initA) {
      initA = true;
      eventSwiper = new Swiper('.event__slider', {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: 'row',
        },
        pagination: {
          el: '.event__slider-pagination',
          type: 'bullets',
          clickable: true,
        },

        breakpoints: {

          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            grid: {
              rows: 1,
              fill: 'row',
            },
          },

        },
      });
    }
  } else if (desktop.matches) {
    if (!initB) {
      initB = true;
      editSwiper = new Swiper('.edit__slider', {
        a11y: {
          prevSlideMessage: 'Предудщий слайд',
          nextSlideMessage: 'Следующий слайд',
          containerMessage: 'Галерея работ',
        },
        loop: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,

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
            allowTouchMove: false,
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
            spaceBetween: 49,
            grid: {
              rows: 1,
              fill: 'row',
            },
          },

          1201: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 25,
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
    if (eventSwiper !== undefined) {
      eventSwiper.destroy(true, true);
      initA = false;
    } else if (large.matches) {
      document.getElementById('nav-menu').removeAttribute('style');
    }
  }
}

window.addEventListener('load', () => {
  swiperMode();
});

/* On Resize
************************************************************* */
window.addEventListener('resize', () => {
  swiperMode();
});

document.querySelectorAll('.scroll').forEach((el) => {
  new SimpleBar(el, {
    scrollbarMaxSize: 28,
  });
});

new SimpleBar(document.querySelector('.scroll-1'), {
  autoHide: true,
});

const filterSelect = () => {
  const elements = document.querySelectorAll('.filter-select');
  elements.forEach((element) => {
    // eslint-disable-next-line no-unused-vars
    const choices = new Choices(element, {
      silent: true,
      searchEnabled: false,
      position: 'bottom',
      shouldSort: false,
      itemSelectText: '',
    });
  });
};

filterSelect();
const eventBtns = document.querySelectorAll('.event__btn');
const priceFormInput = document.querySelectorAll('.filter-interval__input');
let timeOut;
priceFormInput.forEach((element) => element.addEventListener('input', () => {
  if (timeOut) {
    timeOut = clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      if (element.value !== '') {
        if (element.value <= 0) {
          element.value = 0;
        }
      } else {
        element.value = 0;
      }
    }, 1000);
  } else {
    timeOut = setTimeout(() => {
      if (element.value !== '') {
        if (element.value <= 0) {
          element.value = 0;
        }
      } else {
        element.value = 0;
      }
    }, 1000);
  }
}));

eventBtns.forEach((eventBtn) => {
  eventBtn.addEventListener('click', () => {
    document.querySelectorAll('.event-list__item').forEach((tabContent) => {
      setTimeout(() => {
        tabContent.style.display = 'flex';
        setTimeout(() => {
          tabContent.style.opacity = 1;
        }, 1);
      }, 300);
    });
    setTimeout(() => {
      eventBtn.style.display = 'none';
    }, 300);
    eventBtn.style.opacity = '0';
  });
});

tippy('#tooltip', {
  content: 'Пример современных тенденций - современная методология разработки ',
  theme: 'main',
});

tippy('#tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
  theme: 'main',
});

tippy('#tooltip-3', {
  content: 'В стремлении повысить качество ',
  theme: 'main',
});
$('#menu').on('click', 'a', (event) => {
  event.preventDefault();
  const id = $(this).attr('href');
  const { top } = $(id).offset();
  $('body,html').animate({ scrollTop: top }, 1000);
});

$('#hero').on('click', 'a', (event) => {
  event.preventDefault();
  const id = $(this).attr('href');
  const { top } = $(id).offset();
  $('body,html').animate({ scrollTop: top }, 1000);
});

$('.accordion-empty').on('click', 'a', (event) => {
  event.preventDefault();
  const id = $(this).attr('href');
  const { top } = $(id).offset();
  $('body,html').animate({ scrollTop: top }, 1000);
});

$('#painters').on('click', 'a', (event) => {
  event.preventDefault();
});

$('.gallery__descr').on('click', 'a', (event) => {
  event.preventDefault();
  const id = $(this).attr('href');
  const { top } = $(id).offset();
  $('body,html').animate({ scrollTop: top }, 1000);
});
function initial() {
  const myMap = new ymaps.Map('map', {
    center: [55.758701958592866, 37.60106810015546],
    zoom: 15,
  });

  const myPlacemark = new ymaps.Placemark([55.758701958592866, 37.60106810015546], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.svg',
    iconImageSize: [28, 40],
  });

  myMap.geoObjects.add(myPlacemark);
}
ymaps.ready(initial);
