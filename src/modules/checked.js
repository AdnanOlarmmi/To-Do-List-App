import toDoItemsArray from './toDoItemsArray.js';

const checkedBoxEls = document.getElementsByClassName('checkbox');

const checked = () => {
  const checkedBoxElsArray = [...checkedBoxEls];
  checkedBoxElsArray.forEach((item) => {
    item.addEventListener('click', () => {
      const itmId = item.parentNode.parentNode.id;
      const { completed } = toDoItemsArray[itmId];

      if (completed) {
        toDoItemsArray[itmId].completed = false;
      } else {
        toDoItemsArray[itmId].completed = true;
      }

      localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
    });
  });
};

export default checked;