import React, { useState } from "react";
import { Input } from "@material-ui/core";
import { generate as generateId } from "shortid";

const AddListItemForm = ({ list, setList }) => {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    if (input.length >= 1) {
      setList([...list, { id: generateId(), text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <div>
      <Input
        placeholder="todo"
        value={input}
        onChange={handleOnChange}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button onClick={handleSubmit}>ENTER</button>
    </div>
  );
};

export default AddListItemForm;
