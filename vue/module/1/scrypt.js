var app = new Vue({
  el: '#app',
  data: {
      title: 'Список задач',
      subtitle: 'Осталось сделать задач',
      message: 'Привет, Vue!',
      tasks: [
          'Развернуть окружение в Codepen',
          'Пройти курс по Vue',
          'Сделать интернет-магазин на Vue',
      ],
     tasksTwo: [
          'Использовать знания в реальных проектах',
          'Набрать побольше опыта',
          'Стать сеньером-фронтендером с отличным знанием Vue',
      ]
  }
})