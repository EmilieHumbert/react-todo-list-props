import React from "react";
import { generate as generateId } from "shortid";

const ListItem = ({ list, setList }) => {

  const displayList = list.map((listItem, index) => {
    return <li key={generateId()}>{listItem.text}</li>;
  });
  return (
    <div>
      <ul>{displayList}</ul>
    </div>
  );
};

export default ListItem;
