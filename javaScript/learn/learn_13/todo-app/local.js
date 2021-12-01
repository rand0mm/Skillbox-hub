//запрос на получение данных
export async function getTodoList(owner) {
  return JSON.parse(localStorage.getItem(`${owner}`));
}

// создание дела
export async function createTodoItem({ owner, name}) {
  let saveList = JSON.parse(localStorage.getItem(`${owner}`));
  let item = {owner, name}
  localStorage.setItem(`${key}`, JSON.stringify(saveList))
}
