import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CheckboxToggle from "./CheckboxToggle";
import DeleteButton from "./DeleteButton";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const updateChecked = (newValue) => updateTodo(todo, "completed", newValue);
  const handleDelete = () => deleteTodo(todo);

  return (
    <ListItem>
      <ListItemIcon>
        <CheckboxToggle
          checked={todo.completed}
          handleToggle={updateChecked}
        />
      </ListItemIcon>
      <ListItemText primary={todo.text} />
      <DeleteButton handleDelete={handleDelete} />
    </ListItem>
  );
};

export default Todo;
