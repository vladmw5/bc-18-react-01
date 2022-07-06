import { createPortal } from "react-dom";
import { useEffect } from "react";

import s from "./Modal.module.css";

const portalRef = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscPressed = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onEscPressed);
    return () => document.removeEventListener("keydown", onEscPressed);
  }, [onClose]);

  return createPortal(
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.modal}>{children}</div>
    </div>,
    portalRef
  );
}

// const portalRef = document.querySelector("#modal-root");

// class Modal extends Component {
//   onEscPressed = (event) => {
//     if (event.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   onBackdropClick = (event) => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   componentDidMount() {
//     document.addEventListener("keydown", this.onEscPressed);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.onEscPressed);
//   }

//   render() {
//     return createPortal(
//       <div className={s.backdrop} onClick={this.onBackdropClick}>
//         <div className={s.modal}>{this.props.children}</div>
//       </div>,
//       portalRef
//     );
//   }
// }

// export default Modal;
