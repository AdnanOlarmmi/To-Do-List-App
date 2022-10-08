import toDoItemsArray from './toDoItemsArray.js';
import updateTasksAndUi from './updateTasks.js';

const clearCompleted = () => {
  const nonCompletedTasks = toDoItemsArray.filter((item) => item.completed === false);
  toDoItemsArray.splice(0, toDoItemsArray.length, ...nonCompletedTasks);
  updateTasksAndUi();
};

export default clearCompleted;