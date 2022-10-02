import './styles.css';
import addTask from './modules/addTask.js';
import renderToDoItems from './modules/renderTasks.js';
import clearCompleted from './modules/clearCompleted.js';
import clearAll from './modules/clearAll.js';
import init from './modules/init.js';

addTask();
renderToDoItems();
clearCompleted();
clearAll();
init();
