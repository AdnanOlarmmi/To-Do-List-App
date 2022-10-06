import toDoItemsArray from './toDoItemsArray.js';

const removeT = (task) => {
  toDoItemsArray.splice(task, 1);
};

export default removeT;