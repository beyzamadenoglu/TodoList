import React, { useState } from "react";
import { InputLabel, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const TodoForm = () => {

  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("Not completed");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(todo);
    dispatch(
      addTodo({
        id: new Date().valueOf(),
        name: todo,
        status: status,
      })
    )
  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="my-input">Add your ToDos</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>


  )
}

export default TodoForm;