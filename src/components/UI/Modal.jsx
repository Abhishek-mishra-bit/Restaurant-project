import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className="classes.backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const poratalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, poratalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        poratalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
