import toDoItemsArray from './toDoItemsArray.js';
import updateTasksAndUi from './updateTasks.js';

const checked = (itmId) => {
  const { completed } = toDoItemsArray[itmId];

  if (completed) {
    toDoItemsArray[itmId].completed = false;
  } else {
    toDoItemsArray[itmId].completed = true;
  }

  updateTasksAndUi();
};

export default checked;