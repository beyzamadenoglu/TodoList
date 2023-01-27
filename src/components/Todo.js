import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from "@mui/material/IconButton";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import DeleteTodo from "../services/Delete"
import UpdateTodo from "../services/Update";

const Todo = ({ todo }) => {
    const [completed, setCompleted] = useState(todo.completed);
    const dispatch = useDispatch();

    useEffect(() => {
        UpdateTodo(todo._id, completed).then((data) => {
            dispatch(
                (updateTodo({
                    ...todo,
                    completed: completed
                }))
            )
        })
    }, [completed]);

    const deleteItem = () => {
        DeleteTodo(todo._id).then( (data) => {
            if (data.status == 200) {
                alert("Task succesfully deleted! ❤️‍🔥")
                dispatch(deleteTodo(todo._id)) 
            } else {
                alert("Sorry, this task can not be deleted 💔")
            }
            
        });
    }
    return (
        <div className="todo">
            <Checkbox checked={completed} onChange={() => setCompleted(completed => !completed)} />
            <p>{todo.name}</p>
            <p>{todo.completed}</p>
            <IconButton className="button" onClick={deleteItem}>
                <DeleteOutlineIcon />
            </IconButton>

        </div>
    )
}

export default Todo;