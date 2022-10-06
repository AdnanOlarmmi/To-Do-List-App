import addTask from './src/modules/addTask.js';
import toDoItemsArray from './src/modules/toDoItemsArray.js';
import removeT from './src/modules/remove.js';

describe('test addTask and removeTask', () => {
  test('test add task function', () => {
    addTask('first task');
    addTask('second task');
    expect(toDoItemsArray).toHaveLength(2);
  });

  test('test remove task function', () => {
    removeT(0); // remove first task
    expect(toDoItemsArray).toHaveLength(1);
  });
});
