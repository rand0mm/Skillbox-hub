window.addEventListener('DOMContentLoaded', function(){
  const swiper = new Swiper('.gallery__slider', {
    a11y: {
      containerMessage: 'Галерея работ',
    },
    loop: false,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    grid: {
    rows: 2,
    fill: 'column',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    a11y: {
      prevSlideMessage: 'Предудщий слайд',
      nextSlideMessage: 'Следующий слайд',
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
          rows: 2,
          fill: 'column',
        },
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },

      1201: {
        slidesPerView: 3,
        slidesPerGroup: 6,
        spaceBetween: 50,
        grid: {
          rows: 2,
          fill: 'column',
          },
      },

      1440: {
        slidesPerView: 3,
        slidesPerGroup: 6,
        spaceBetween: 50,
        grid: {
          rows: 2,
          fill: 'column',
          },
      }

    }

    });

})
