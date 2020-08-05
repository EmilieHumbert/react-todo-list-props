import React from "react";
import List from "@material-ui/core/List";

import Todo from "./Todo";

const TodoList = ({ list, setList }) => {
  const updateTodo = (todo, field, value) => {
    const updatedTodo = { ...todo, [field]: value };
    setList(
      list.map((listTodo) => (listTodo === todo ? updatedTodo : listTodo))
    );
  };

  const deleteTodo = (todo) =>
    setList(list.filter((listTodo) => listTodo !== todo));

  const displayList = list.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  ));

  return <List>{displayList}</List>;
};

export default TodoList;
