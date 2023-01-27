import React, { useState } from "react";
import { FormGroup, InputLabel, Input, Button } from "@mui/material";
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
    return await AddTodo(todoObject).then(response => {
      if (response.status === 200) {
        return { success: true, response: response }
      } else {
        return { success: false, response: response }
      }
    });
  }

  const handleSubmit = (e) => {
    e.target.reset();
    e.preventDefault();

    handleService().then((res) => {
      if (res['success']) {
        alert("Your todo successfully added!");
        dispatch(
          addTodo({
            name: todo,
            status: status,
          })
        )
      } else {
        if (res.response.code == "ERR_BAD_REQUEST") {
          alert("Sorry, same task can not be re-added 💔")
        } else {
          alert(res.response);
        }
      }
  });
  }
  return (
    <div>
     <form onSubmit={(e) => handleSubmit(e)}>
     <FormGroup sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"label . ."
        "input input button"`,
      }} className="add-form">
        <InputLabel sx={{gridArea: 'label'}} htmlFor="my-input">Add Your Todos</InputLabel>
        <Input placeholder={"Task description"} sx={{ gridArea: 'input' }} id="my-input" aria-describedby="my-helper-text" onChange={(e) => setTodo(e.target.value)} />
        <Button sx={{ gridArea: 'button' }} variant="contained" color="secondary" className="button" type="submit">Add Todo</Button>
      </FormGroup>
     </form>
    </div>
  )
}

export default TodoForm;