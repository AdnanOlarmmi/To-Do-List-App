import './styles.css';
import addTask from './modules/addTask.js';
import renderToDoItems from './modules/renderTasks.js';
import clearCompleted from './modules/clearCompleted.js';
import clearAll from './modules/clearAll.js';
import removeTask from './modules/removeTask.js';
import toDoItemsArray from './modules/toDoItemsArray.js';
import editTask from './modules/editTask.js';
import checked from './modules/checked.js';

const clearAllEl = document.querySelector('.clearAll');
const todoItemsEl = document.querySelector('.to-do__items');
const addForm = document.querySelector('.to-do__add');
const todoinputEl = document.querySelector('.to-do__input');
const footerEl = document.querySelector('footer');

clearAllEl.addEventListener('click', () => {
  clearAll(clearAllEl);
});

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoinputEl.value);
  todoinputEl.value = '';
});

todoItemsEl.addEventListener('click', (e) => {
  const task = e.target.parentNode.parentNode.parentNode;
  const taskId = task.id;
  if (e.target.matches('.dltTaskBtn')) {
    removeTask(taskId);
  } else if (e.target.matches('.editTaskBtn')) {
    task.childNodes[1].classList.remove('hide');
    task.childNodes[3].classList.add('hide');
    const currentDescription = task.childNodes[1].childNodes[1];
    currentDescription.value = toDoItemsArray[taskId].description;
    const editForm = task.childNodes[1];
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      editTask(currentDescription, taskId);
    });
  } else if (e.target.matches('.checkbox')) {
    const checkedId = e.target.parentNode.parentNode.id;

    checked(checkedId);
  }
});

footerEl.addEventListener('click', () => {
  clearCompleted();
});

renderToDoItems();
