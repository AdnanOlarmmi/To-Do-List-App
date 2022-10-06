import addTask from './src/modules/addTask.js';
import toDoItemsArray from './src/modules/toDoItemsArray.js';
import editT from './src/modules/edit.js';
import completed from './src/modules/updateCompleted.js';
import clearCompleted from './src/modules/clearCompleted.js';

describe('test edit and clear completed', () => {
  test('test edit task function', () => {
    addTask('First task');
    addTask('Second task');
    editT('changed', 0);
    expect(toDoItemsArray[0].description).toBe('changed');
  });

  test('test edit task function', () => {
    completed(0, true);
    expect(toDoItemsArray[0].description).toBe(true);
  });

  test('test clear completed task function', () => {
    toDoItemsArray[0].completed = true;
    clearCompleted();
    expect(toDoItemsArray).toHaveLength(1);
  });
});