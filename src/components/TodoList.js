import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import getAllTodos from '../services/GetAll';
import { setTodo } from "../slices/todoSlice";
import Pagination from "./Pagination";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const localTodos = useSelector(state => state.todo.todoList)
    const dispatch = useDispatch();

    useEffect(() => {
        getAllTodos().then((data) => {
            setTodoList(data);
        });
    }, [])

    useEffect(() => {
        dispatch(
            setTodo(todoList)
        );
    }, [todoList])

    useEffect(() => {
        console.log("dfadsf", localTodos)
        setTodoList(localTodos)
    }, [localTodos.length])


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = todoList.slice(firstPostIndex, lastPostIndex)

    return (
        <div className="todos">
            {currentPosts &&
                currentPosts.length > 0
                ? currentPosts.map((todo) => (
                    <Todo className="todo" key={todo._id} todo={todo} />

                )) : <p><h3>Oops! Nothing to show here</h3> You can add by using above &quot;Add Your Todos&quot; section 🎉</p>
            }
            <Pagination totalPosts={todoList.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
    )
}

export default TodoList;