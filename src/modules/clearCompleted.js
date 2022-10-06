import toDoItemsArray from './toDoItemsArray.js';
import init from './init.js';

const clearCompleted = () => {
  const nonCompletedTasks = toDoItemsArray.filter((item) => item.completed === false);
  toDoItemsArray.splice(0, toDoItemsArray.length, ...nonCompletedTasks);
  init();
};

export default clearCompleted;