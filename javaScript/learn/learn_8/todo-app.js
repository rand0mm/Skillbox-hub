(function () {

  function saveLocalStorage() {
    let list = document.querySelectorAll('.list-group-item');
    let saveList = [];
    for(let i of list) {
      let element = {
        name: i.innerText.replace('\nГотово\nУдалить', ''),
        done: i.status,
      }
      saveList.push(element)
    }

    return saveList;
    }
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
    button.setAttribute('disabled', 'disabled');

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

  function createTodoItem(name, status) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиво покажет их в ондой группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также  для размещения кнопок
    // в его правой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;
    item.status = status;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';
    if (item.status === true) {
      item.classList.add('list-group-item-success');
    }

    // вкладываем кнопки в отдельный элемент, чтобы они объединились  в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    }
  }

  function createTodoApp(container, title = 'Список дел', tasks = []) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    if (tasks.length > 0) {
      for (let el of Object.values(tasks)) {
        let todoItem = createTodoItem(el.name, el.done);
        if (todoItem.item.status === true) {
          todoItem.item.classList.add('list-group-item-success');
        };
        todoItem.doneButton.addEventListener('click', function(){
          todoItem.item.classList.toggle('list-group-item-success');
          if(todoItem.item.classList.contains('list-group-item-success')) {
            todoItem.item.status = true;
          } else {
            todoItem.item.status = false;
          }
        let saveList = saveLocalStorage()
        localStorage.setItem(`${key}`, JSON.stringify(saveList));
        });
        todoItem.deleteButton.addEventListener('click', function() {
          if (confirm('Вы уверены?')) {
            todoItem.item.remove();
            let saveList = saveLocalStorage()
            localStorage.setItem(`${key}`, JSON.stringify(saveList));
          }
        });
        todoList.append(todoItem.item);
      };
    };


    // браузер создает событие submit на форме по нажатию enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function(e) {
      let button = document.querySelector(".btn");
      // этра строчка необходима, чтобы предотвратить стандартное действие браузера
      // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
      e.preventDefault();

      let todoItem = createTodoItem(todoItemForm.input.value);
      // добавляем обработчик на кнопки
      todoItem.doneButton.addEventListener('click', function(){
        todoItem.item.classList.toggle('list-group-item-success');
        if(todoItem.item.classList.contains('list-group-item-success')) {
          todoItem.item.status = true;
        } else {
          todoItem.item.status = false;
        }
      let saveList = saveLocalStorage()
      localStorage.setItem(`${key}`, JSON.stringify(saveList));
      });
      todoItem.deleteButton.addEventListener('click', function() {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
          let saveList = saveLocalStorage()
          localStorage.setItem(`${key}`, JSON.stringify(saveList));
        }
      });

      // создаем и добавляем в список новое дело с названием поля для ввода
      todoList.append(todoItem.item);

      // обнуляем значение в поле, чтобы не пришлось стирать его вручную
      todoItemForm.input.value = '';
      button.setAttribute('disabled', 'disabled');
      let saveList = saveLocalStorage()
      localStorage.setItem(`${key}`, JSON.stringify(saveList));
    })
  }


  window.createTodoApp = createTodoApp;

  document.addEventListener('DOMContentLoaded', function() {
    let timeOut;
    let button = document.querySelector(".btn");
    let input = document.querySelector(".form-control");
    input.addEventListener('input', function() {
      if(timeOut) {
        timeOut = clearTimeout(timeOut);
        timeOut = setTimeout(function() {
          if(input.value !== '') {
       button.removeAttribute('disabled');
      }
        }, 300)
      } else {
        timeOut = setTimeout(function() {
          if(input.value !== '') {
       button.removeAttribute('disabled');
      } else {button.setAttribute('disabled', 'disabled');}
        }, 300)
      }

    });
    input.addEventListener('input', function() {
      if(input.value !== '') {
       button.removeAttribute('disabled');
      } else {button.setAttribute('disabled', 'disabled');}
    });
  })


})();
