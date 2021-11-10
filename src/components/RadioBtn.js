import React from "react";

const RadioBtn = (props) => {
  return (
    <label htmlFor={"_" + props.value} className="radio-container">
      <input
        type="radio"
        id={"_" + props.value}
        name="percent"
        value={"_" + props.value}
      />
      <div className="radio-button">
        <span>{props.value}</span>
      </div>
    </label>
  );
};
export default RadioBtn;
