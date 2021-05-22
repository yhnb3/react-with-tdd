const initialState = {
    id: 0,
    tasks: []
}
export default function TodoReducer (state = initialState, action){
    switch (action.type) {
        case 'addTodo': {
            return {
                tasks: state.tasks.concat({id: state.id, title: action.payload}),
                id: state.id + 1
            }
        }
        case 'setTasks': {
            const {tasks} = action.payload
            return {
                tasks,
                id: tasks.length,
            }
        }
        default: {
            return state
        }
    }
}