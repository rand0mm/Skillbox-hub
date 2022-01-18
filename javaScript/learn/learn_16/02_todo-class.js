class TodoItem {
  done = false;
  createAdt = new Date(2016, 8, 1, 12 , 0 , 0);

  constructor(title = 'Новоде дело') {
    this.title = title;
  }
}

const todoItem = new TodoItem('Купить хлеб');


// Date, Promise, Error, SyntaxError, TypeError примеры классов
