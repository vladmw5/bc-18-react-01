import {
  Link,
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useLazyGetPokemonByNameQuery,
  useGetPokemonByNameQuery,
} from "../../redux/pokemon/pokemonApi";

import s from "./Modal.module.css";

const portalRef = document.querySelector("#modal-root");

export default function Modal() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const pokemonName = searchParams.get("name");

  // const [fetchPokemon, { data: photo }] = useLazyGetPokemonByNameQuery();
  const { data: photo, refetch } = useGetPokemonByNameQuery(pokemonName, {
    skip: !pokemonName,
  });
  console.log(photo);

  const goBack = () => {
    navigate(location?.state?.from || "/pokemon", { replace: true });
  };

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      goBack();
    }
  };

  useEffect(() => {
    const onEscPressed = (event) => {
      if (event.code === "Escape") {
        goBack();
      }
    };
    document.addEventListener("keydown", onEscPressed);
    return () => document.removeEventListener("keydown", onEscPressed);
  }, [dispatch, goBack]);

  useEffect(() => {
    refetch();
  }, [refetch, pokemonName]);

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
