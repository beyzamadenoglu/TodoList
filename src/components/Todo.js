import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from "@mui/material/IconButton";
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import DeleteTodo from "../services/Delete"
import UpdateTodo from "../services/Update";

const Todo = ({ todo }) => {
    const [completed, setCompleted] = useState(todo.completed);
    const dispatch = useDispatch();

    useEffect(() => {
        UpdateTodo(todo._id, completed).then(() => {
            dispatch(
                (updateTodo({
                    ...todo,
                    completed: completed
                }))
            )
        })
    }, [completed]);

    const successMessage = () => {
        toast.success("Succesfully Deleted!", {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const errorMessage = () => {
        toast.error("Task did not deleted!", {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const deleteItem = () => {
        DeleteTodo(todo._id).then((data) => {
            if (data.status == 200) {
                successMessage();
                dispatch(deleteTodo(todo._id))
            } else {
                errorMessage();
            }

        });
    }
    return (
        <div className={completed ? "todo done" : "todo"}>
            <Checkbox checked={completed} onChange={() => setCompleted(completed => !completed)} />
            <p>{todo.name}</p>
            <p>{todo.completed}</p>
            <p className="date">{format(new Date(todo.date), 'p, dd/MM/yy')}</p>
            <IconButton className="button" onClick={deleteItem}>
                <DeleteOutlineIcon />
            </IconButton>

        </div>
    )
}

export default Todo;