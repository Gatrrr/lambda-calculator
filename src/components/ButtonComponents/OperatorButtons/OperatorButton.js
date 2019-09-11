import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <button>{props.operators.value}</button>
  );
};

export default OperatorButton;