//создаем и возвращаем заголовок приложения
function createAppTitle(title) {
  let appTitle = document.createElement('h2');
  appTitle.innerHTML = title;
  return appTitle;
}

//создаем и возвращаем форму для создания дела
function createTodoItemForm() {
let form          = document.createElement('form');
let input         = document.createElement('input');
let buttonWrapper = document.createElement('div');
let button        = document.createElement('button');


form.classList.add('input-group', 'mb-3');
input.classList.add('form-control');
input.placeholder = 'Введите название нового дела';
buttonWrapper.classList.add('input-group-append');
button.classList.add('btn', 'btn-primary');
button.textContent = 'Добавить дело';


// дизейбл для пустого инпута
button.disabled = true;
  input.addEventListener('input', () => {
    button.disabled = input.value ? false : true;
  });

buttonWrapper.append(button);
form.append(input);
form.append(buttonWrapper);

return {
  form,
  input,
  button,
};
}

//создаем и возвращаем заголовок приложения
function createTodoList() {
  let list = document.createElement('ul');
  list.classList.add('list-group');
  return list;
}

// создаем элемент списка
function createTodoItemElement(todoItem, { onDone, onDelete }) {
const item = document.createElement('li');
const doneClass = 'list-group-item-success'
// кнопки помещаем в элемент, который красиво покажет их в ондой группе
const buttonGroup = document.createElement('div');
const doneButton = document.createElement('button');
const deleteButton = document.createElement('button');

// устанавливаем стили для элемента списка, а также  для размещения кнопок
// в его правой части с помощью flex
item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
if (todoItem.done) {
  item.classList.add(doneClass);
}
item.textContent = todoItem.name;

buttonGroup.classList.add('btn-group', 'btn-group-sm');
doneButton.classList.add('btn', 'btn-success');
doneButton.textContent = 'Готово';
deleteButton.classList.add('btn', 'btn-danger');
deleteButton.textContent = 'Удалить';


// добавляем обработчик на кнопки
doneButton.addEventListener('click', () => {
  onDone({ todoItem, element: item });
  item.classList.toggle(doneClass);
});
deleteButton.addEventListener('click', () => {
  onDelete({ todoItem, element: item });
});

// вкладываем кнопки в отдельный элемент, чтобы они объединились  в один блок
buttonGroup.append(doneButton);
buttonGroup.append(deleteButton);
item.append(buttonGroup);

return item;
}

// приложение
async function createTodoApp(container, {
  title,
  owner,
  getTodoItemList,
  onCreateFormSubmit,
  onDoneClick,
  onDeleteClick,
}) {

// кнопка смены источника
const storeBtn = createStoreBtn();
// получаем массив дел
const todoItemList = await getTodoItemList(owner);
// заголовок
const todoAppTitle = createAppTitle(title);
// инпут дел
const todoItemForm = createTodoItemForm();
//список дел
const todoList = createTodoList();
// функции помощники для кнопок действий
const handlers =  { onDone: onDoneClick, onDelete: onDeleteClick }

container.append(storeBtn);
container.append(todoAppTitle);
container.append(todoItemForm.form);
container.append(todoList);

// создаем элемент из массива дел и добавляем в список
todoItemList.forEach(todoItem => {
  const todoItemElement = createTodoItemElement(todoItem, handlers);
  todoList.append(todoItemElement);
})

// браузер создает событие submit на форме по нажатию enter или на кнопку создания дела
todoItemForm.form.addEventListener('submit', async e => {
  // этра строчка необходима, чтобы предотвратить стандартное действие браузера
  // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
  e.preventDefault();

  // игнорируем создание элемента, если пользователь ничего не ввёл в поле
  if (!todoItemForm.input.value) {
    return;
  }

  const todoItem = await onCreateFormSubmit({
    owner,
    name: todoItemForm.input.value.trim(),
  });

  const todoItemElement = createTodoItemElement(todoItem, handlers);

  // создаем и добавляем в список новое дело с названием поля для ввода
  todoList.append(todoItemElement);

  // обнуляем значение в поле, чтобы не пришлось стирать его вручную
  todoItemForm.input.value = '';
})
}

// кнопка переключения хранилища
function createStoreBtn() {
  const toLocal = 'Перейти на локальное хранилище';
  const toApi = 'Перейти на серверное хранилище';
  let storeType = localStorage.getItem('store') || 'local';
  const storeBtn = document.createElement('button');
  storeBtn.classList.add('btn', 'btn-primary', 'mb-3');
  storeBtn.textContent = storeType == 'local' ? toApi : toLocal;

  storeBtn.addEventListener('click', () => {
    if (storeBtn.textContent == toApi) {
      storeBtn.textContent = toLocal;
      storeType = 'api';
    } else {
      storeBtn.textContent = toApi;
      storeType = 'local';
    }
    localStorage.setItem('store', storeType);
    window.location.reload();
  });
  return storeBtn;
}

export { createTodoApp }
