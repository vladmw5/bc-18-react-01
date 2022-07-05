import { Component } from "react";
import Modal from "../Modal/Modal";

class Pokemon extends Component {
  state = {
    pokemons: [],
    photo: "",
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => this.setState({ pokemons: res.results }));
  }
  handleClick = ({ currentTarget: { id } }) => {
    console.log(id);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ photo: res.sprites.front_default }));
  };

  render() {
    console.log(this.state.photo);
    const { pokemons, photo } = this.state;
    return (
      <div>
        <ul>
          {pokemons.map(({ name, url }) => (
            <li key={name} id={name} onClick={this.handleClick}>
              <h2>{name}</h2>
              {/* <img src={this.state.photo} alt={name} width={40} /> */}
            </li>
          ))}
        </ul>
        {photo ? (
          <Modal>
            <img src={photo} alt="alt" width="140"/>
          </Modal>
        ) : null}
      </div>
    );
  }
}
export default Pokemon;
