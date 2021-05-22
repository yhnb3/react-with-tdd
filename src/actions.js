export function setTasks(tasks) {
    return {
      type: 'setTasks',
      payload: {
        tasks,
      },
    };
  }
  
  
export function addTodo(task) {
  return {
    type: 'addTodo',
    payload: {
      task,
    },
  };
}