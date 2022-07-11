import { Link, useParams } from "react-router-dom";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import s from "./Modal.module.css";

const portalRef = document.querySelector("#modal-root");

export default function Modal() {
  const [photo, setPhoto] = useState("");
  const params = useParams();
  console.log(params);

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      // onClose();
    }
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      .then((res) => res.json())
      .then((res) => {
        setPhoto(res.sprites.front_default);
        // toggleModal();
      });

    const onEscPressed = (event) => {
      if (event.code === "Escape") {
        // onClose();
      }
    };
    document.addEventListener("keydown", onEscPressed);
    return () => document.removeEventListener("keydown", onEscPressed);
  }, []);

  return createPortal(
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.modal}>
        <img src={photo} alt="alt" width="140" />
        <Link to="/pokemon">Close</Link>
      </div>
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
