import renderToDoItems from './renderTasks.js';
import toDoItemsArray from './toDoItemsArray.js';
import init from './init.js';

const todoinputEl = document.querySelector('.to-do__input');
const input = document.querySelector('input');
const addForm = document.querySelector('.to-do__add');

const addTask = () => {
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = todoinputEl.value;
    if (newTask) {
      const newTodo = {
        description: newTask,
        completed: false,
      };
      toDoItemsArray.push(newTodo);
      localStorage.setItem('toDoItemsArray', JSON.stringify(toDoItemsArray));
      renderToDoItems();
      init();
      todoinputEl.value = '';
    } else {
      input.classList.add('inputError');
      setTimeout(() => {
        input.classList.remove('inputError');
      }, 1000);
    }
  });
};

export default addTask;