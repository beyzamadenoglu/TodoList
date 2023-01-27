import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import getAllTodos from '../services/GetAll';
import { setTodo } from "../slices/todoSlice";
import Pagination from "./Pagination";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [currentTodos, setCurrentTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const localTodos = useSelector(state => state.todo.todoList)
    const dispatch = useDispatch();
    const lastTodosIndex = currentPage * 5;
    const firstTodosIndex = lastTodosIndex - 5;

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
            <Pagination totalTodos={todoList.length} todosPerPage={5} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
    )
}

export default TodoList;