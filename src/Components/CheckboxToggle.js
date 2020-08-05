import React from "react";

import { Checkbox } from "@material-ui/core";

const CheckboxToggle = ({ checked, handleToggle }) => {
  const onChange = () => handleToggle(!checked);
  return (
    <Checkbox
      color="primary"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CheckboxToggle;
