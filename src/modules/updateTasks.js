import toDoItemsArray from './toDoItemsArray.js';
import renderToDoItems from './renderTasks.js';

const updateTasksAndUi = () => {
  localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
  renderToDoItems();
};

export default updateTasksAndUi;