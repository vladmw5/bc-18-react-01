import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [photo, setPhoto] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => setPokemons(res.results));
  }, []);

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
            <Link to={`/pokemon/${name}`}>
              <h2>{name}</h2>
            </Link>

            {/* <img src={this.state.photo} alt={name} width={40} /> */}
          </li>
        ))}
      </ul>
      <Outlet />
      {showModal ? <Modal onClose={toggleModal}></Modal> : null}
    </div>
  );
}

// class Pokemon extends Component {
//   state = {
//     pokemons: [],
//     photo: "",
//   };

//   componentDidMount() {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((res) => res.json())
//       .then((res) => this.setState({ pokemons: res.results }));
//   }
//   handleClick = ({ currentTarget: { id } }) => {
//     console.log(id);
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       .then((res) => res.json())
//       .then((res) => this.setState({ photo: res.sprites.front_default }));
//   };

//   render() {
//     console.log(this.state.photo);
//     const { pokemons, photo } = this.state;
//     return (
//       <div>
//         <ul>
//           {pokemons.map(({ name, url }) => (
//             <li key={name} id={name} onClick={this.handleClick}>
//               <h2>{name}</h2>
//               {/* <img src={this.state.photo} alt={name} width={40} /> */}
//             </li>
//           ))}
//         </ul>
//         {photo ? (
//           <Modal>
//             <img src={photo} alt="alt" width="140"/>
//           </Modal>
//         ) : null}
//       </div>
//     );
//   }
// }
// export default Pokemon;
