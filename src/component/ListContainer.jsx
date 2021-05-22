import React from 'react';
import { useSelector } from 'react-redux';
import List from './List'

function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks : state.tasks,
  }))
  console.log(tasks)
  return (
    <List tasks={tasks}/>
  );
}

export default ListContainer;

