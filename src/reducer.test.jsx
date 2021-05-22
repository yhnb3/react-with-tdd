  
import reducer from './reducer';

import {
  setTasks,
  addTodo
} from './actions';
describe('reducer', () => {
  const initialState = {
    tasks: [],
  }  
  describe('setTasks', () => {
    it('changes tasks array', () => {
      const tasks = [
        {id:1, title: 'jest 해보기'},
        {id:2, title: '그 다음엔 뭘해볼까'}
      ]
      const state = reducer(initialState, setTasks(tasks));
      expect(state.tasks).not.toHaveLength(0);
    });
  });
  describe('addTodo', () => {
    it('add task in array', () => {
      const task = '안녕?'

      const state = reducer(initialState, addTodo(task));

      expect(state.tasks).not.toHaveLength(0);
    });
  });
})