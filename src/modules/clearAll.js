import toDoItemsArray from './toDoItemsArray.js';
import renderToDoItems from './renderTasks.js';

const clearAllEl = document.querySelector('.clearAll');

const clearAll = () => {
  clearAllEl.addEventListener('click', () => {
    clearAllEl.classList.add('rotate');
    toDoItemsArray.splice(0);
    localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
    renderToDoItems();
    setTimeout(() => {
      clearAllEl.classList.remove('rotate');
    }, 2100);
  });
};

export default clearAll;