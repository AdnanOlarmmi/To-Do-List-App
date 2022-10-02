import toDoItemsArray from './toDoItemsArray.js';
import renderToDoItems from './renderTasks.js';

const clearAllEl = document.querySelector('.clearAll');

const clearAll = () => {
  clearAllEl.addEventListener('click', () => {
    toDoItemsArray.splice(0);
    localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
    renderToDoItems();
  });
};

export default clearAll;