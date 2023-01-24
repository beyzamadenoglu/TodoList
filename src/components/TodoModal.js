import React from "react";
import { FormControl, InputLabel, Input } from "@mui/material";
const TodoModal = () => {

  const handleSubmit = () => {

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="my-input">Add your ToDos</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </form>
    </div>
  )
}

export default TodoModal;