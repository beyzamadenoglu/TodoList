import React, { useState } from "react";
import { InputLabel, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import AddTodo from '../services/Add';
import getAllTodos from '../services/GetAll';

const TodoForm = () => {

  const [todo, setTodo] = useState([]); 
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  const handleService = async () => {
    const todoObject = {
      name: todo,
      status: false,
    } 
    AddTodo(todoObject).then(response => {
        if (response.status === 200) {
          getAllTodos().then((data) => {
            console.log(data)
        });
      
      } else {
           console.log("hatakuu", response)
        }
    });
}

  const handleSubmit = () => {
    dispatch(
      addTodo({
        name: todo,
        status: status,
      })
    )
    handleService();
  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="my-input">Add your ToDos</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>


  )
}

export default TodoForm;