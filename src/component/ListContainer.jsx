import React from 'react';
import { useSelector } from 'react-redux';
import List from './List'

function ListContainer() {
  const tasks = useSelector(state => state.TodoReducer.tasks)
  return (
    <List tasks={tasks}/>
  );
}

export default ListContainer;
