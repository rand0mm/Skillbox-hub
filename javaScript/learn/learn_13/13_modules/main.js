import {createTodoApp} from "./todo-app/todo-app.js";

const getModule = async (storeType) => {
  if (storeType && storeType === 'api') {
    return await import("./todo-app/api.js");
  } else {
    return await import("./todo-app/local.js");
  }
}

const storeType = localStorage.getItem('store') || 'local';

const owner = document.title;
getModule(storeType)
.then(mod => createTodoApp(document.getElementById('todo-app'), owner, mod))
.catch(e => console.log(e));
