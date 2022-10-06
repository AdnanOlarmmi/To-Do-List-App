import addTask from './src/modules/addTask.js';
import toDoItemsArray from './src/modules/toDoItemsArray.js';

describe('test addTask and removeTask', () => {
  test('test add task function', () => {
    addTask('first task');
    addTask('second task');
    expect(toDoItemsArray).toHaveLength(2);
  });

});
