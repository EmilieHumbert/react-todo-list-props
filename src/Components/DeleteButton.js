import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const DeleteButton = ({ handleDelete }) => {
  return (
    <IconButton onClick={handleDelete}>
      <DeleteIcon color="action" />
    </IconButton>
  );
};

export default DeleteButton;
