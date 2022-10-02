import renderToDoItems from './renderTasks.js';
import toDoItemsArray from './toDoItemsArray.js';

const editTaskBtnEl = document.getElementsByClassName('editTaskBtn');
const editTaskEl = document.getElementsByClassName('to-do__edit');
const toDoTask = document.getElementsByClassName('to-do__task');

const init = () => {
  const editTask = () => {
    const editTaskBtns = [...editTaskBtnEl];
    editTaskBtns.forEach((item) => {
      item.addEventListener('click', () => {
        const taskID = item.id;
        const editTaskEls = [...editTaskEl];
        const currentTask = editTaskEls[taskID];
        const currentTaskEdit = currentTask.childNodes[1];
        toDoTask[taskID].classList.add('hide');
        currentTask.classList.remove('hide');
        currentTaskEdit.value = toDoItemsArray[taskID].description;
        currentTask.childNodes[3].addEventListener('click', (e) => {
          e.preventDefault();
          const editedTask = currentTask.childNodes[1].value;
          if (editedTask) {
            toDoItemsArray[taskID].description = editedTask;
            localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
            renderToDoItems();
            init();
          } else {
            currentTaskEdit.classList.add('inputError');
            setTimeout(() => {
              currentTaskEdit.classList.remove('inputError');
            }, 1000);
          }
        });
      });
    });
  };

  const removeTask = () => {
    const removeBtnsEl = [...document.getElementsByClassName('dltTaskBtn')];
    removeBtnsEl.forEach((item) => {
      item.addEventListener('click', (e) => {
        toDoItemsArray.splice(e.target.id, 1);
        localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
        renderToDoItems();
        init();
      });
    });
  };

  removeTask();
  editTask();
};

export default init;