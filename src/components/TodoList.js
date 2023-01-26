import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import getAllTodos from '../services/GetAll';
import { setTodo } from "../slices/todoSlice";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllTodos().then((data) => {
            setTodos(data);
        });
    }, [])

    useEffect(() => {
        dispatch(
            setTodo(todos)
        );
    }, [todos])

    const todoList = useSelector((state) => state.todo.todoList);

    return (
        <div>
            {todoList &&
                todoList.length > 0
                ? todoList.map((todo) => (
                    <Todo key={todo._id} todo={todo} />

                )) : <p>no show</p>

            }
        </div>
    )
}

export default TodoList;