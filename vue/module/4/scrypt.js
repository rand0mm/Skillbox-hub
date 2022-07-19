Vue.component('like-dislike-buttons', {
  props: ['counterlike','counterdislike'],
  template: `<span><button type="button" @click="incrementLike">&#9829; {{counterlike}}</button><button type="button" @click="incrementDisLike">&#128078; {{counterdislike}}</button></span>`,
  methods: {
    increment(){
      this.$emit('update:counterlike', this.counterlike + 1);
    },
    incrementDisLike(){
      this.$emit('update:counterdislike', this.counterdislike + 1);
    },
  }
});

Vue.component('tasks-list', {
  props: ['tasks', 'title'],
  template: `
  <div class="list">
    <h2 v-if="title">{{ title }}</h2>
    <div class="item" :class="{done: task.done}" v-for="task in tasks" :key="task.text">
      <input type="checkbox" v-model="task.done">
      {{ task.text }}
      <like-dislike-buttons :counterlike="task.likes" :counterdislike="task.dislikes"></like-dislike-buttons>
    </div>
  </div>`
});

var app = new Vue({
  el: '#app',
  data: {
    title: 'Список задач',
    subtitle: 'Осталось сделать задач',
    message: 'Привет, Vue!',
    likesHeader: 2,
    likesForm: 3,
    likesDisHeader: 1,
    likesDisForm: 0,
    tasks: [
      {text: 'Развернуть окружение в Codepen', done: true, likes: 2, dislikes: 3},
      {text: 'Пройти курс по Vue', done: false, likes: 1, dislikes: 3},
      {text: 'Сделать интернет-магазин на Vue', done: false, likes: 4, dislikes: 2},
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
      return this.tasks.filter(task => task.done);
    },
    uncompletedTasks() {
      return this.tasks.filter(task => !task.done);
    },
    countLikes() {
      return this.likesHeader + this.likesForm + this.tasks.reduce((value, task) => value + task.likes, 0);
    },
    countDisLikes() {
      return this.likesDisHeader + this.likesDisForm + this.tasks.reduce((value, task) => value + task.likesDis, 0);
    },
  }
});