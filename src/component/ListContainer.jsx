import React from 'react';
import { useSelector } from 'react-redux';
import List from './List'

function ListContainer() {
  const { tasks } = useSelector(state => {
    return ({
      tasks: state.tasks
    })
  })
  return (
    <List tasks={tasks}/>
  );
}

export default ListContainer;

