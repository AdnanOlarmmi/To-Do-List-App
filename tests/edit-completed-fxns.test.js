import addTask from '../src/modules/addTask.js';
import toDoItemsArray from '../src/modules/toDoItemsArray.js';
import editTask from '../src/modules/editTask.js';
import checked from '../src/modules/checked.js';
import clearCompleted from '../src/modules/clearCompleted.js';
import 'jest-localstorage-mock';

describe('test edit and clear completed', () => {
  test('test edit task function', () => {
    addTask('First task');
    addTask('Second task');
    editTask('changed', 0);
    expect(toDoItemsArray[0].description).toBe('changed');
  });

  test('test completed function', () => {
    checked(0);
    expect(toDoItemsArray[0].description).toBe(true);
  });

  test('test clear completed task function', () => {
    toDoItemsArray[0].completed = true;
    clearCompleted();
    expect(toDoItemsArray).toHaveLength(1);
  });
});