// создание заголовка
function createAppTitle(title) {
  const appTitle = document.createElement('h2');
  appTitle.innerHTML = title;
  return appTitle;
}


// создание формы
function createTodoItemForm() {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const buttonWrapper = document.createElement('div');
  const button = document.createElement('button');

  form.classList.add('input-group', 'mb-3');
  input.classList.add('form-control');
  input.placeholder = 'Введите название нового дела';
  buttonWrapper.classList.add('input-group-append');
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Добавить дело';
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

// создание списка дел
function createTodoList() {
  const list = document.createElement('ul');
  list.classList.add('list-group');
  return list;
}

// создание элемента списка
function createTodoItem(task) {
  const item = document.createElement('li');
  const buttonGroup = document.createElement('div');
  const doneButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  item.textContent = task.name;
  item.id = task.id;

  buttonGroup.classList.add('btn-group', 'btn-group-sm');
  doneButton.classList.add('btn', 'btn-success');
  doneButton.textContent = 'Готово';
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.textContent = 'Удалить';

  buttonGroup.append(doneButton);
  buttonGroup.append(deleteButton);
  item.append(buttonGroup);

  return {
    item,
    doneButton,
    deleteButton,
  };
}

// приложение
function createTodoApp(container, title = 'Список дел', storeModule) {
  const storeBtn = createStoreBtn();
  const todoAppTitle = createAppTitle(title);
  const todoItemForm = createTodoItemForm();
  const todoList = createTodoList();

  container.append(storeBtn);
  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);

  storeModule.getTasks(title)
  .then(tasks => {
    tasks.map((task) => {
      todoList.append(prepareItem(task, storeModule));
    });
  })
  .catch(e => console.log(e));


  todoItemForm.form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!todoItemForm.input.value) {
      return;
    }

    storeModule.createTask(todoItemForm.input.value, title)
    .then(task => {
      todoList.append(prepareItem(task, storeModule));
    })
    .catch(e => console.log(e));

    todoItemForm.input.value = '';
    todoItemForm.button.disabled = true;
  });
}

// кнопки действий
function prepareItem(task, storeModule) {
  const todoItem = createTodoItem(task);
  if (task.done) {
    todoItem.item.classList.add('list-group-item-success');
  }
  todoItem.doneButton.addEventListener('click', function() {
    storeModule.toggleDone(todoItem.item.id)
    .then(() => todoItem.item.classList.toggle('list-group-item-success'))
    .catch(e => console.log(e));
  });
  todoItem.deleteButton.addEventListener('click', function() {
    if (confirm('Вы уверены?')) {
      storeModule.deleteTask(todoItem.item.id)
      .then(() => todoItem.item.remove())
      .catch(e => console.log(e));
    }
  });
  return todoItem.item;
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

export {createTodoApp};
