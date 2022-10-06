import toDoItemsArray from './toDoItemsArray.js';

const editT = (task, num) => {
  toDoItemsArray[num].description = task;
};

export default editT;