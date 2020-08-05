import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

import CheckboxToggle from "./CheckboxToggle";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const [editTodoItem, setEditTodoItem] = useState(false);
  const [input, setInput] = useState(todo.text);

  const updateChecked = (newValue) => updateTodo(todo, "completed", newValue);
  const handleDelete = () => deleteTodo(todo);

  const handleEditClick = () => setEditTodoItem(!editTodoItem);

  const handleEditSubmit = () => {
    const updatedText = input.length > 0 ? input : "[untitled]";
    setEditTodoItem(false);
    updateTodo(todo, "text", updatedText);
    if (input.length === 0) {
      setInput(updatedText);
    }
  };

  const handleEditCancel = () => {
    setEditTodoItem(false);
    setInput(todo.text);
  };

  const handleEditChange = (e) => setInput(e.target.value);

  return (
    <ListItem>
      <ListItemIcon>
        <CheckboxToggle checked={todo.completed} handleToggle={updateChecked} />
      </ListItemIcon>
      {editTodoItem ? (
        <>
          <TextField value={input} onChange={handleEditChange} fullWidth/>
          <IconButton onClick={handleEditSubmit}>
            <CheckIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleEditCancel}>
            <ClearIcon color="error" />
          </IconButton>
        </>
      ) : (
        <>
          <ListItemText primary={todo.text} />
          <EditButton handleClick={handleEditClick} />
          <DeleteButton handleDelete={handleDelete} />
        </>
      )}
    </ListItem>
  );
};

export default Todo;
