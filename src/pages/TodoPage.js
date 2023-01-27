import React from "react"
import Form from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoPage() {
  return (
    <div>
        <Form />
        <TodoList />
    </div>
  )
}

export default TodoPage