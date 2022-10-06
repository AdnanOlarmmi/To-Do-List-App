import addTask from './src/modules/addTask.js';
import toDoItemsArray from './src/modules/toDoItemsArray.js';
import clearCompleted from './src/modules/clearCompleted.js';
import editT from './src/modules/edit.js';
import completed from './src/modules/updateCompleted.js';

describe('test edit and clearcompleted', () => {
  test('test edit task function', () => {
    addTask('first task');
    addTask('second task');
    editT('changed', 0);
    expect(toDoItemsArray[0].description).toBe('changed');
  });

  test('test completed function', () => {
    completed(0, true);
    expect(toDoItemsArray[0].description).toBe(true);
  });

  test('test clear completed task function', () => {
    toDoItemsArray[0].completed = true;
    clearCompleted();
    expect(toDoItemsArray).toHaveLength(1);
  });
});