import renderToDoItems from './renderTasks.js';
import toDoItemsArray from './toDoItemsArray.js';

const footer = document.querySelector('footer');

const clearCompleted = () => {
  footer.addEventListener('click', () => {
    const nonCompletedTasks = toDoItemsArray.filter((item) => item.completed === false);

    toDoItemsArray.splice(0, toDoItemsArray.length, ...nonCompletedTasks);

    localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
    renderToDoItems();
  });
};

export default clearCompleted;