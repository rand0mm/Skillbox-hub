// Отправляем запрос на список всех дел
export async function getTodoList(owner) {
  const taskStr = localStorage.getItem('tasks');
  return new Promise(resolve => resolve(
    taskStr
    ? JSON.parse(taskStr).filter(todoItem => todoItem.owner === owner)
    : [])
  );
}

// создание дела
export async function createTodoItem ({ owner, name}){
  const taskStr = localStorage.getItem('tasks');
  const tasks = JSON.parse(taskStr);
  const newTask = {
    name,
    owner,
    done: false,
    id: Date.now().toString()
  };
  localStorage.setItem('tasks', JSON.stringify([...(tasks ? tasks : []), newTask]));
  return new Promise(resolve => resolve(newTask));
};

// переключение статуса
export async function switchTodoItemDone({ todoItem }) {
  const taskStr = localStorage.getItem('tasks');
  const tasks = JSON.parse(taskStr);
  const id = todoItem.id
  const curTask = tasks.filter(todoItem => todoItem.id === id)[0];
  curTask.done = !curTask.done;
  localStorage.setItem(
    'tasks',
    JSON.stringify([...tasks.filter(todoItem => todoItem.id !== id), curTask])
  );
  return new Promise(resolve => resolve(true));
};

// удаление элемента
export async function deleteTodoItem({ element, todoItem }) {
  if (!confirm('Вы уверены?')) {
    return;
  }
  element.remove();
  const id = todoItem.id;
  const taskStr = localStorage.getItem('tasks');
  const tasks = JSON.parse(taskStr);
  localStorage.setItem(
    'tasks',
    JSON.stringify([...tasks.filter(todoItem => todoItem.id !== id)])
  );
  return new Promise(resolve => resolve(true));
};
