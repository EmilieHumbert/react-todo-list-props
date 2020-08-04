import React from "react";

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

  return <ul>{displayList}</ul>;
};

export default TodoList;
