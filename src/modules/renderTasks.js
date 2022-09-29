import toDoItemsArray from './toDoItemsArray.js';
import checked from './checked.js';

const toDoItemsEl = document.querySelector('.to-do__items');
const editTaskBtnEl = document.getElementsByClassName('editTaskBtn');
const editTaskEl = document.getElementsByClassName('to-do__edit');
const toDoTask = document.getElementsByClassName('to-do__task');

const renderToDoItems = () => {
  let markup = '';

  toDoItemsArray.forEach((elem, index) => {
    markup += `<section class="to-do__item  border-bottom" id=${index}>
    <div class="to-do__edit hide flex-row border-bottom">
    <input type="text" class="to-do__input" placeholder="Input a task or use the delete button..."/>
    <span class="material-symbols-outlined to-do__addTask">add_task</span>
    </div>
    <div class="flex-row to-do__task">
    <input class='checkbox' type="checkbox" ${elem.completed && 'checked'}/>
    <p class='description'>${elem.description}</p>
    <span class="to-do__item-icons">
    <span class="material-symbols-outlined dltTaskBtn" id=${index}>delete</span>
    <span class="material-symbols-outlined editTaskBtn" id=${index}>edit_note</span>
    </span>
    </div>
  </section>`;
  });

  const removeTask = () => {
    const removeBtnsEl = [...document.getElementsByClassName('dltTaskBtn')];
    removeBtnsEl.forEach((item) => {
      item.addEventListener('click', (e) => {
        toDoItemsArray.splice(e.target.id, 1);
        localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
        renderToDoItems();
      });
    });
  };

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
        currentTask.childNodes[3].addEventListener('click', () => {
          const editedTask = currentTask.childNodes[1].value;
          if (editedTask) {
            toDoItemsArray[taskID].description = editedTask;
            localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
            renderToDoItems();
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
  toDoItemsEl.innerHTML = markup;
  removeTask();
  editTask();
  checked();
};

export default renderToDoItems;