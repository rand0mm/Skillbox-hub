Vue.component('like-dislike-buttons', {
  prod: ['counterLike','counterDisLike']
  template: '<span><button type="button" @click="counterLike++">&#9829; {{counterLike}}</button><button type="button" @click="counterDisLike++">&#128078; {{counterDisLike}}</button></span>'
})

Vue.component('tasks-list', {
  props: ['tasks', 'title'],
  template: `
  <div class="list">
    <h2 v-if="title">{{ title }}</h2>
    <div class="item" :class="{done: task.done}" v-for="task in tasks" :key="task.text">
      <input type="checkbox" v-model="task.done">
      {{ task.text }}
      <like-button></like-button>
      <dislike-button></dislike-button>
    </div>
  </div>`
})

var app = new Vue({
  el: '#app',
  data: {
    title: 'Список задач',
    subtitle: 'Осталось сделать задач',
    message: 'Привет, Vue!',
    likesHeader: 2,
    likesList: 3,
    likesDisHeader: 1,
    likesDisList: 0,
    tasks: [
      {text: 'Развернуть окружение в Codepen', done: true, likes: 0},
      {text: 'Пройти курс по Vue', done: false, likes: 0},
      {text: 'Сделать интернет-магазин на Vue', done: false, likes: 0},
    ],
    tasksTwo: [
      'Использовать знания в реальных проектах',
      'Набрать побольше опыта',
      'Стать сеньером-фронтендером с отличным знанием Vue',
    ]
  },
  methods: {
    addTask() {
      this.tasks.push({text: this.message, done:false, likes: 0});
      this.message = '';
    },
  },
  computed: {
    count() {
      return this.tasks.filter(task => !task.done).length;
    },
    completedTasks() {
      return this.tasks.filter(task => task.done)
    },
    uncompletedTasks() {
      return this.tasks.filter(task => !task.done)
    },
    countLikes() {
      return this.likesHeader + this.likesList + this.tasks.reduce((value, task) => value + task.likes, 0);
    },
    countDisLikes() {
      return this.likesDisHeader + this.likesDisList + this.tasks.reduce((value, task) => value + task.likesDis, 0);
    },
  }
})