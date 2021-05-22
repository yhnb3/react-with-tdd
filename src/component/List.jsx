import React from 'react'

export default function List({ tasks }) {
  console.log(tasks)
  if (tasks.length === 0) {
    return (
      <p>할 일이 없습니다.</p>
    )
  }
  return (
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}{''}<button key={task.id}>완료</button></li>
      ))}
    </ol>
  );
}

