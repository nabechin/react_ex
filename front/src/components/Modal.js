import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onClose} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui modal visible active"
      >
        <div class="header">Delete Post</div>
        <div class="content">
          <p>{props.title}</p>
          <p>{props.content}</p>
        </div>
        <div class="actions">
          <div class="ui approve button" onClick={props.onSubmit}>
            Approve
          </div>
          <div class="ui cancel button" onClick={props.onClose}>
            Cancel
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
