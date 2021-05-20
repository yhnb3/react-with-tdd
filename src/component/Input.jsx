import React from "react";
import { useDispatch } from "react-redux";
export default function Input() {
    const dispatch = useDispatch();
    const addTodo = (task) => {
        dispatch({type: 'ADD_TODO', payload: task})
    }
    return (
        <input onKeyDown={(e) => {
            if (e.key === 'Enter') {
                addTodo(e.target.value)
                e.target.value = ""
            }
        }}></input>
    )
}