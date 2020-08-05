import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

const EditButton = ({ handleClick }) => {
  return (
    <IconButton onClick={handleClick}>
      <EditIcon color="action" />
    </IconButton>
  );
};

export default EditButton;
