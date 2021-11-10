import React from "react";
import ReactDOM from "react-dom";
import PopupContainer from "./PopupContainer";
import Repayment from "./Repayment";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onclose}></div>;
};

const Modaloverlay = (props) => {
  return (
    <div id="overlay">
      <PopupContainer title="Repay" onclose={props.onclose}>
        <Repayment />
      </PopupContainer>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onclose={props.popuphandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modaloverlay onclose={props.popuphandler} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
