import renderToDoItems from './renderTasks.js';
import toDoItemsArray from './toDoItemsArray.js';

const checked = (itmId) => {
  const { completed } = toDoItemsArray[itmId];

  if (completed) {
    toDoItemsArray[itmId].completed = false;
  } else {
    toDoItemsArray[itmId].completed = true;
  }

  localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
  renderToDoItems();
};

export default checked;