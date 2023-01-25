import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";


const TodoList = () => {
    const todoList = useSelector((state) => state.todo.todoList);
    console.log("todolist", todoList);

    return (
        <div>
            {todoList &&
                todoList.length > 0
                ? todoList.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                )) : <p>no show</p>
            }
        </div>
    )
}

export default TodoList;