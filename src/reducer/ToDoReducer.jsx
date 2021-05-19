const initialState = {
    tasks: []
};

export default function TodoReducer (state = initialState, action){
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                tasks: state.tasks.push(action.payload)
            }
        }
        default: {
            return {...state}
        }
    }
}