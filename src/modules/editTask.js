import updateTasksAndUi from './updateTasks.js';
import toDoItemsArray from './toDoItemsArray.js';

const editTask = (currentTask, taskID) => {
  const editedTask = currentTask.value;
  if (editedTask) {
    toDoItemsArray[taskID].description = editedTask;
    updateTasksAndUi();
  } else {
    currentTask.classList.add('inputError');
    setTimeout(() => {
      currentTask.classList.remove('inputError');
    }, 1000);
  }
};

export default editTask;