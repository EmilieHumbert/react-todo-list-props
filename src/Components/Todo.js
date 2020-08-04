import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CheckboxToggle from "./CheckboxToggle";

const Todo = ({ todo, updateTodo }) => {
  const updateChecked = (newValue) => updateTodo(todo, "completed", newValue);
  return (
    <ListItem>
      <ListItemIcon>
        <CheckboxToggle
          checked={todo.completed}
          updateChecked={updateChecked}
        />
      </ListItemIcon>
      <ListItemText primary={todo.text} />
    </ListItem>
  );
};

export default Todo;
