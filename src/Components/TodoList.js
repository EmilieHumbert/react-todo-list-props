import React from "react";
import List from "@material-ui/core/List";

import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";

const TodoList = ({ list, setList }) => {
  return (
    <List>
      <Todo list={list} setList={setList} />
      <AddTodoForm list={list} setList={setList} />
    </List>
  );
};

export default TodoList;
