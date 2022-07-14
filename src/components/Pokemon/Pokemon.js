import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../Modal/Modal";
import operations from "../../redux/operations";

export default function Pokemon() {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const [photo, setPhoto] = useState("");
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("here");
    dispatch(operations.fetchPokemons());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // console.log(this.state.photo);
  //   const { pokemons, photo } = this.state;

  return (
    <div>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name} id={name}>
            <Link
              to={`/pokemon/modal?name=${name}`}
              state={{ from: location.pathname }}
            >
              <h2>{name}</h2>
            </Link>

            {/* <img src={this.state.photo} alt={name} width={40} /> */}
          </li>
        ))}
      </ul>
      <Outlet />
      {/* {showModal ? <Modal onClose={toggleModal}></Modal> : null} */}
    </div>
  );
}
