import toDoItemsArray from './toDoItemsArray.js';
import updateTasksAndUi from './updateTasks.js';

const addTask = (newTask) => {
  const input = document.querySelector('input');
  if (newTask) {
    const newTodo = {
      description: newTask,
      completed: false,
    };
    toDoItemsArray.push(newTodo);
    updateTasksAndUi();
  } else {
    input.classList.add('inputError');
    setTimeout(() => {
      input.classList.remove('inputError');
    }, 1000);
  }
};

export default addTask;