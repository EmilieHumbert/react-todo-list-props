import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Box from "@material-ui/core/Box";
import { generate as generateId } from "shortid";

const useStyles = makeStyles((theme) => ({
  root: { padding: 20, textAlign: "center" },
}));

const AddListItemForm = ({ list, setList }) => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const handleOnChange = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    if (input.length >= 1) {
      setList([...list, { id: generateId(), text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <Box className={classes.root}>
      <TextField
        className={classes.input}
        edge="end"
        margin="dense"
        onChange={handleOnChange}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Add new todo"
        value={input}
      />
      <AddCircleIcon color="primary" onClick={handleSubmit} />
    </Box>
  );
};

export default AddListItemForm;
