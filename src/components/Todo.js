import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import { deleteTodo, updateTodo } from "../slices/todoSlice";


const Todo = ({ todo }) => {

    const [status, setStatus] = useState(() => todo.status === "Completed" ? true : false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            (updateTodo({
                ...todo,
                status: status ? "Completed" : "Uncompleted"
            }))
        )
    }, [status]);

    const deleteItem = () => {
        dispatch(
            (deleteTodo(todo.id))
        )
    }
    return (
        <div>
            <div className="todo-item">
                <Checkbox checked={status} onChange={() => setStatus(status => !status)} />
                <p>{todo.name}</p>
                <p>{todo.status}</p>
                <button onClick={deleteItem}>delete</button>
            </div>
        </div>
    )
}

export default Todo;