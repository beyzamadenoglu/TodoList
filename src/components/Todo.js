import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from "@mui/material/IconButton";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import DeleteTodo from "../services/Delete"

const Todo = ({ todo }) => {

    const [completed, setCompleted] = useState(() => todo.completed === "Completed" ? true : false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            (updateTodo({
                ...todo,
                completed: completed ? "Completed" : "Uncompleted"
            }))
        )
    }, [completed]);

    const deleteItem = () => {
        DeleteTodo(todo._id).then( (data) => {
            console.log("delete data", data);
            
            dispatch(
                deleteTodo(todo.id)
            )
        });
    }
    return (
        <div>
            <div className="todo-item">
                <Checkbox checked={completed} onChange={() => setCompleted(completed => !completed)} />
                <p>{todo.name}</p>
                <p>{todo.completed}</p>
                <IconButton onClick={deleteItem}>
                    <DeleteOutlineIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Todo;