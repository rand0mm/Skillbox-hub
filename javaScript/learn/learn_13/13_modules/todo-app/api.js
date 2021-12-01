//запрос на список всех дел
export const getTasks = async (owner) => {
  const response = await fetch(`http://localhost:3000/api/todos?owner=${owner}`);
  const retData = await response.json();
  return retData;
};

// создание дела
export const createTask = async (name, owner) => {
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      owner
    })
  });
  const task = await response.json();
  return task;
};

// изменение статуса дела
export const toggleDone = async (taskId) => {
  const taskResp = await fetch(`http://localhost:3000/api/todos/${taskId}`);
  const task = await taskResp.json();
  const response = await fetch(`http://localhost:3000/api/todos/${taskId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done: !task.done })
  });
};

// удалить дело
export const deleteTask = async(taskId) => {
  const response = await fetch(`http://localhost:3000/api/todos/${taskId}`, {
    method: 'DELETE',
  });
};

