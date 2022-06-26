Vue.component('like-button', {
  data: function() {
    return {
      counter: 0
    }
  },
  template: '<button type="button" @click="counter++">&#9829; {{counter}}</button> '
})


var app = new Vue({
  el: '#app',
  data: {
    title: 'Список задач',
    subtitle: 'Осталось сделать задач',
    message: 'Привет, Vue!',
    tasks: [
      {text: 'Развернуть окружение в Codepen', done: true},
      {text: 'Пройти курс по Vue', done: false},
      {text: 'Сделать интернет-магазин на Vue', done: false},
    ],
    tasksTwo: [
      'Использовать знания в реальных проектах',
      'Набрать побольше опыта',
      'Стать сеньером-фронтендером с отличным знанием Vue',
    ]
  },
  methods: {
    addTask() {
      this.tasks.push({text: this.message, done:false});
      this.message = '';
    },
    count() {
      return this.tasks.filter(task => !task.done).length;
    },
  }
})