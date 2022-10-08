import toDoItemsArray from './toDoItemsArray.js';
import updateTasksAndUi from './updateTasks.js';

const removeTask = (taskID) => {
  toDoItemsArray.splice(taskID, 1);
  updateTasksAndUi();
};

export default removeTask;