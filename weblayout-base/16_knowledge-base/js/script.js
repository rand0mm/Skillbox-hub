const exampleSelect = () => {
  const elements = document.querySelectorAll('.select');
  elements.forEach(element => {
    const choices = new Choices(element, {
      searchEnabled: false,
      position: 'bottom',
      shouldSort: false,
      itemSelectText: '',
    });
  });
};

exampleSelect();

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map-example", {
    center: [48.872185073737896, 2.354223999999991],
    zoom: 12
  });

  var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/marker.svg',
    iconImageSize: [28, 40],
  });

  myMap.geoObjects.add(myPlacemark);

}

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },

    tel: {
      required: true,
      strength: {custom: '[^_]$'},
    },

    mail:{
      required: true,
      email: true
    },
  },

  messages: {
    name: {
      required: 'Обязательное поле',
      minLength: 'Короткое имя',
      maxLength: 'Длинное имя'
    },

    tel: 'Неккоректно введен номер',

    mail: 'Введите корректный email'

  },

});

tippy('#tooltip', {
  content: 'Глава 2, страница 176',
  theme: 'example'
});

tippy('#tooltip2', {
  content: 'Глава 29, страница 1766',
  theme: 'example'
});
