export const getTasks = async (owner) => {
  const taskStr = localStorage.getItem('tasks');
  return new Promise(resolve => resolve(
    taskStr
    ? JSON.parse(taskStr).filter(task => task.owner === owner)
    : [])
  );
}

export const createTask = async (name, owner) => {
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

export const toggleDone = async (taskId) => {
  const taskStr = localStorage.getItem('tasks');
  const tasks = JSON.parse(taskStr);
  const curTask = tasks.filter(task => task.id === taskId)[0];
  curTask.done = !curTask.done;
  localStorage.setItem(
    'tasks',
    JSON.stringify([...tasks.filter(task => task.id !== taskId), curTask])
  );
  return new Promise(resolve => resolve(true));
};

export const deleteTask = async(taskId) => {
  const taskStr = localStorage.getItem('tasks');
  const tasks = JSON.parse(taskStr);
  localStorage.setItem(
    'tasks',
    JSON.stringify([...tasks.filter(task => task.id !== taskId)])
  );
  return new Promise(resolve => resolve(true));
};
