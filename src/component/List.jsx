import React from 'react'

export default function List({ tasks }) {
  return (
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ol>
  );
}

