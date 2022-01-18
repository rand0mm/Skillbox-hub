window.addEventListener('DOMContentLoaded', function(){
  var editSwiper= new Swiper('.edit__slider', {
    a11y: {
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

    a11y: {
      prevSlideMessage: 'Предудщий слайд',
      nextSlideMessage: 'Следующий слайд',
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
      }

    }
  });
  var init = false;

  /* Which media query
  **************************************************************/
  function swiperModeB() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 590px)');
  let desktop = window.matchMedia('(min-width: 591px)');

  // Enable (for mobile)
  if(mobile.matches) {
    if (editSwiper !== undefined) {
      editSwiper.destroy(true, true);
      init = false;
      }
      return;
  }
  // Disable (for desktop)
  else if(desktop.matches) {
    if (!init) {
      init = true;
      editSwiper = new Swiper('.edit__slider', {
        a11y: {
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

        a11y: {
          prevSlideMessage: 'Предудщий слайд',
          nextSlideMessage: 'Следующий слайд',
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
          }

        }
      });
      }
  return;
  }
  }

  function mediaB() {
    let large = window.matchMedia('(min-width: 1201px)');
    if(large.matches) {
      document.getElementById('nav-menu').removeAttribute("style")
    }
  }
  /* On Load
  **************************************************************/
  window.addEventListener('load', function() {
  swiperModeB();
  mediaB();
  });

  /* On Resize
  **************************************************************/
  window.addEventListener('resize', function() {
  swiperModeB();
  mediaB();
  });
})

