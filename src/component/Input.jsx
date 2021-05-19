import React from "react";
// import { useDispatch } from "react-redux";
export default function Input() {
    // const dispatch = useDispatch();
    // function addTodo(task) {
    //     dispatch({type: 'ADD_TODO', payload: task})
    // }
    return (
        <input onKeyDown={(e) => {
            if (e.key === 'Enter') {
                console.log(e.target.value)
                // addTodo(e.target.value)
            }
        }}></input>
    )
}