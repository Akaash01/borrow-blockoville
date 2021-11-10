import React from "react";
const PopupContainer = (props) => {
  return (
    <div className="container">
      <div className="title">
        <h2>{props.title}</h2>
        <img
          src="./images/close-btn.svg"
          onClick={props.onclose}
          alt="close"
        ></img>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};
export default PopupContainer;
