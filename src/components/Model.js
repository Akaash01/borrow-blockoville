import React from "react";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onclose}></div>;
};

const Modaloverlay = () => {
  return <div className="modal"></div>;
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onclose={props.popuphandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modaloverlay />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
