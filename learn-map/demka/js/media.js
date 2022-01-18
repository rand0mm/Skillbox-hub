

function scrollMedia() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 590px)');
  let desktop = window.matchMedia('(min-width: 591px)');

  // Enable (for mobile)
  if(mobile.matches) {
    $(document).ready(function(){
      $("#painters").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1000);
      });
    });
  }
};

var eventSwiper= new Swiper('.event__slider', {
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
            }
});
var init = false;

/* Which media query
**************************************************************/
function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 590px)');
  let desktop = window.matchMedia('(min-width: 591px)');

  // Enable (for mobile)
  if(mobile.matches) {
      if (!init) {
          init = true;
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

            }
          })
      }

  }
  // Disable (for desktop)
  else if(desktop.matches) {
    if (eventSwiper !== undefined) {
      eventSwiper.destroy(true, true);
      init = false;
    }
    return;
  }
}


/* On Load
**************************************************************/
window.addEventListener('load', function() {
  swiperMode();
  scrollMedia
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
  swiperMode();
  scrollMedia();
});
