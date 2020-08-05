import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Box from "@material-ui/core/Box";
import { generate as generateId } from "shortid";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    flexGrow: 1,
  },
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
    <ListItem className={classes.root}>
      <ListItemIcon>
        <Checkbox disabled />
      </ListItemIcon>
      <TextField
        className={classes.textField}
        // margin="dense"
        onChange={handleOnChange}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Add new todo"
        value={input}
        // variant="outlined"
      />
      <ListItemIcon>
        <IconButton onClick={handleSubmit}>
          <AddCircleIcon color="primary" />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

export default AddListItemForm;
