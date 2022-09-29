import renderToDoItems from './renderTasks.js';
import toDoItemsArray from './toDoItemsArray.js';

const footer = document.querySelector('footer');

const clearCompleted = () => {
  footer.addEventListener('click', () => {
    toDoItemsArray.forEach((item) => {
      if (item.completed) {
        const itemIndex = toDoItemsArray.indexOf(item);
        toDoItemsArray.splice(itemIndex, 1);
      }
    });
    localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
    renderToDoItems();
  });
};

export default clearCompleted;