import React, { useState } from "react";
import { Input } from "@material-ui/core";
import { generate as generateId } from "shortid";

const AddListItemForm = ({ list, setList }) => {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setList([...list, { id: generateId(), text: input, completed: false }]);
    setInput("");
  };

  return (
    <div>
      <Input
        placeholde="todo"
        value={input}
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      <button onClick={handleSubmit}>ENTER</button>
    </div>
  );
};

export default AddListItemForm;
