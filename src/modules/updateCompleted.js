import toDoItemsArray from './toDoItemsArray.js';

const completed = (index, complt) => {
  toDoItemsArray[index].description = complt;
};

export default completed;