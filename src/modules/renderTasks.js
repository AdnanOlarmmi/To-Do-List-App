import toDoItemsArray from './toDoItemsArray.js';
import checked from './checked.js';

const toDoItemsEl = document.querySelector('.to-do__items');

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

  toDoItemsEl.innerHTML = markup;
  checked();
};

export default renderToDoItems;