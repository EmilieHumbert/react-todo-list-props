import React from "react";
import List from "@material-ui/core/List";

import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <List>
      <Todo />
      <AddTodoForm />
    </List>
  );
};

export default TodoList;
