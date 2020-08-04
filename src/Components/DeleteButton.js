import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteButton = ({ handleDelete }) => {
  return <DeleteIcon color="primary" onClick={handleDelete} />;
};

export default DeleteButton;
