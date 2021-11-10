import React from "react";
import "./RadioBtn.css";

const RadioBtn = (props) => {
  return (
    <label htmlfor={"_" + props.value} class="radio-container">
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
