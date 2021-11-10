import React from "react";
import "./PopupContainer.css";

const PopupContainer = (props) => {
  return (
    <div className="container">
      <div className="title">
        <h2>{props.title}</h2>
        <img src="./images/close-btn.svg" alt="close"></img>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};
export default PopupContainer;
