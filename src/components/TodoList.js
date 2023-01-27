import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Todo from "./Todo";
import getAllTodos from '../services/GetAll';
import { setTodo } from "../slices/todoSlice";
import Pagination from "./Pagination";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [currentTodos, setCurrentTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState("ASC");
    const localTodos = useSelector(state => state.todo.todoList)
    const dispatch = useDispatch();
    const lastTodosIndex = currentPage * 5;
    const firstTodosIndex = lastTodosIndex - 5;

    const handleOrder = () => {
        let sortedArr = currentTodos;
        if (order == "ASC") {
            sortedArr = sortedArr.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            })
            setOrder("DESC")
        } else if (order == "DESC") {
            sortedArr = sortedArr.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            })
            setOrder("ASC")
        }

        setCurrentTodos(sortedArr);
    }

    useEffect(() => {
        getAllTodos().then((data) => {
            setTodoList(data);
        });
    }, []);

    useEffect(() => {
        dispatch(setTodo(todoList));
    }, [todoList]);

    useEffect(() => {
        setTodoList(localTodos);
    }, [localTodos.length]);

    useEffect(() => {
        if (currentTodos.length == 0 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }, [currentTodos.length]);

    useEffect(() => {
        setCurrentTodos(todoList.slice(firstTodosIndex, lastTodosIndex));
    }, [todoList, currentPage]);

    return (
        <div className="todos">
            {currentTodos &&
                currentTodos.length > 0
                ? currentTodos.map((todo, index) => (
                    <Todo key={index} todo={todo} />
                )) : <> <h3>Oops! Nothing to show here</h3><p>You can add by using above &quot;Add Your Todos&quot; section 🎉</p></>
            }
            <Button variant="outlined" color="secondary" className="button" onClick={handleOrder}>
                Order by date ({order})
            </Button>
            <Pagination totalTodos={todoList.length} todosPerPage={5} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
    )
}

export default TodoList;