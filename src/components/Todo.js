import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../slices/todoSlice";


const Todo = ({ todo }) => {

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(
            (deleteTodo(todo.id))
        )
    }
    return (
        <div>
            <div className="todo-item">
                <p>{todo.name}</p>
                <p>{todo.status}</p>
                <button onClick={deleteItem}>delete</button>
            </div>
        </div>
    )
}

export default Todo;