document.querySelectorAll('.scroll').forEach(el =>{
  new SimpleBar(el, {
    scrollbarMaxSize: 28,
  });
});


new SimpleBar(document.querySelector('.scroll-1'), {
  autoHide: true,
 });

// var buttons = document.getElementsByClassName('puls'),
//     forEach = Array.prototype.forEach;

// forEach.call(buttons, function (b) {
//     b.addEventListener('click', addElement);
// });

// function addElement(e) {
//     var addDiv  = document.createElement('div'),
//         mValue  = 44,
//         rect    = this.getBoundingClientRect();
//         sDiv    = addDiv.style,
//         px      = 'px';

//     sDiv.width  = sDiv.height = mValue + px;
//     sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
//     sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

//     addDiv.classList.add('pulse');
//     this.appendChild(addDiv);

//     setTimeout(() =>{
//       addDiv.parentNode.removeChild(addDiv)
//     }, 600);
// }

const filterSelect = () => {
  const elements = document.querySelectorAll('.filter-select');
  elements.forEach(element => {
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


const eventBtn = document.querySelector('.event__btn');

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.event__btn').forEach(function(eventBtn){
    eventBtn.addEventListener('click', function(event){
      document.querySelectorAll('.event-list__item').forEach(function(tabContent){
        setTimeout(() =>{
          tabContent.style.display = 'flex';
          setTimeout(() =>{
            tabContent.style.opacity = 1;
          }, 1);
         }, 300);
      });
      setTimeout(() =>{
       eventBtn.style.display = 'none';
      }, 300);
      eventBtn.style.opacity = '0';
    });
  });
});

tippy('#tooltip', {
  content: 'Пример современных тенденций - современная методология разработки ',
  theme: 'main'
});

tippy('#tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
  theme: 'main'
});

tippy('#tooltip-3', {
  content: 'В стремлении повысить качество ',
  theme: 'main'
});


ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.758701958592866, 37.60106810015546],
    zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([55.758701958592866, 37.60106810015546], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.svg',
    iconImageSize: [28, 40],
  });

  myMap.geoObjects.add(myPlacemark);

}

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });

  $("#hero").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".accordion-empty").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $("#painters").on("click","a", function (event) {
    event.preventDefault();
  });


  $(".gallery__descr").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

