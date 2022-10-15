import toDoItemsArray from './toDoItemsArray.js';
import updateTasksAndUi from './updateTasks.js';

const clearAll = (clearAllEl) => {
  clearAllEl.classList.add('rotate');
  toDoItemsArray.splice(0);
  updateTasksAndUi();
  setTimeout(() => {
    clearAllEl.classList.remove('rotate');
  }, 2100);
};

export default clearAll;