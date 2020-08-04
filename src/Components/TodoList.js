import React from "react";

import Todo from "./Todo";

const TodoList = ({ list, setList }) => {
  const updateTodo = (todo, field, value) => {
    const updatedTodo = { ...todo, [field]: value };
    setList(
      list.map((listTodo) => (listTodo === todo ? updatedTodo : listTodo))
    );
  };

  const displayList = list.map((todo) => (
    <Todo key={todo.id} todo={todo} updateTodo={updateTodo} />
  ));

  return <ul>{displayList}</ul>;
};

export default TodoList;
