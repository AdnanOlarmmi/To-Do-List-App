import './styles.css';
import addTask from './modules/addTask.js';
import renderToDoItems from './modules/renderTasks.js';
import clearCompleted from './modules/clearCompleted.js';
import clearAll from './modules/clearAll.js';
import init from './modules/init.js';
import toDoItemsArray from './modules/toDoItemsArray.js';
import removeT from './modules/remove.js';

const todoinputEl = document.querySelector('.to-do__input');
const addForm = document.querySelector('.to-do__add');

const updateTasks = () => {
  localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
  renderToDoItems();
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoinputEl.value);
  updateTasks();
  todoinputEl.value = '';
  init();
});

renderToDoItems();
clearCompleted();
clearAll();

const removeBtnsEl = [...document.getElementsByClassName('dltTaskBtn')];
removeBtnsEl.forEach((item) => {
  item.addEventListener('click', (e) => {
    removeT(e.target.id);
    updateTasks();
  });
});
