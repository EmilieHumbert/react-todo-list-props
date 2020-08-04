import React from "react";

import { Checkbox } from "@material-ui/core";

const CheckboxToggle = ({ checked, updateChecked }) => {
  const onChange = () => updateChecked(!checked);
  return (
    <Checkbox
      color="primary"
      edge="start"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CheckboxToggle;
