const initialState = {
    id: 0,
    tasks: []
}
export default function TodoReducer (state = initialState, action){
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                tasks: state.tasks.concat({id: state.id, title: action.payload}),
                id: state.id + 1
            }
        }
        default: {
            return {...state}
        }
    }
}