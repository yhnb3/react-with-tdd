const initialState = {
    id: 0,
    tasks: [
      {id:1, title: 'jest 해보기'},
      {id:2, title: '그 다음엔 뭘해볼까'}
    ]
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
            return state
        }
    }
}