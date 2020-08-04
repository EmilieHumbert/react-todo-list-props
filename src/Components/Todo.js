import React from "react";

import CheckboxToggle from "./CheckboxToggle";

const Todo = ({ todo, updateTodo }) => {
  const updateChecked = (newValue) => updateTodo(todo, "completed", newValue);
  return (
    <li>
      <CheckboxToggle checked={todo.completed} updateChecked={updateChecked} />
      <span>{todo.text}</span>
    </li>
  );
};

export default Todo;
