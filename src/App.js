import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { generate as generateId } from "shortid";

import TodoList from "./Components/TodoList";
import AddTodoForm from './Components/AddTodoForm'
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      height: "auto",
      marginTop: 10,
    },
  },
}));

function App() {
  const classes = useStyles();

  const [list, setList] = useState([
    { id: generateId(), text: "todo example", completed: false },
  ]);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper>
        <Typography variant="h2" component="h2" align="center">
          Todo
        </Typography>
        <TodoList list={list} setList={setList} />
        <AddTodoForm list={list} setList={setList} />
      </Paper>
    </Container>
  );
}

export default App;
