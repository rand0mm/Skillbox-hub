document.addEventListener('DOMContentLoaded', function(){
  let tasks = [{ name: 'Взять книгу', done: true }, { name: 'Почитать книгу', done: false}, { name: 'Вернуть книгу', done: false}]
  let restoredSession = JSON.parse(localStorage.getItem(`${key}`));
  if (restoredSession) {
    tasks = restoredSession;
  } else tasks = tasks;
  createTodoApp(document.getElementById('todo-app'), appName, tasks)
});
