import React, { useState } from "react";
import { FormGroup, InputLabel, Input, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { addTodo } from "../slices/todoSlice";
import AddTodo from '../services/Add';

const TodoForm = () => {
  const [todo, setTodo] = useState([]);
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  const handleService = async () => {
    const todoObject = {
      name: todo,
      status: false,
      date: date,
    }
    return await AddTodo(todoObject).then(response => {
      if (response.status === 200) {
        return { success: true, response: response }
      } else {
        return { success: false, response: response }
      }
    });
  }

  const successMessage = () => {
    toast.success("Succesfully added!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const errorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const handleSubmit = (e) => {
    e.target.reset();
    e.preventDefault();

    handleService().then((res) => {
      if (res['success']) {
        successMessage();
        setDate(new Date().toLocaleString())
        dispatch(
          addTodo({
            _id: res.response.data._id,
            name: todo,
            status: status,
            date: new Date().toLocaleString()
          })
        )
      } else {
        if (res.response.code == "ERR_BAD_REQUEST") {
          errorMessage("Task already added!");
        } else {
          errorMessage("Error occured!");
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
          <InputLabel sx={{ gridArea: 'label' }} htmlFor="my-input">Add Your Todos</InputLabel>
          <Input placeholder={"Task description"} sx={{ gridArea: 'input' }} id="my-input" aria-describedby="my-helper-text" onChange={(e) => setTodo(e.target.value)} />
          <Button sx={{ gridArea: 'button' }} variant="contained" color="secondary" className="button" type="submit">Add Todo</Button>
        </FormGroup>
      </form>
    </div>
  )
}

export default TodoForm;