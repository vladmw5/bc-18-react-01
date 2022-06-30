import { Component } from "react";
import { nanoid } from "nanoid";

const initialState = {
  name: "",
  surname: "",
  patronymic: "",
  number: "",
  email: "",
  city: "",
};

const cities = ["Kyiv", "Lviv", "Odesa"];

class TeacherForm extends Component {
  state = {
    ...initialState,
  };

  onFormReset = () => {
    this.setState(initialState);
  };

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit({ ...this.state, key: nanoid() });
    this.onFormReset();
  };

  render() {
    console.log(Object.keys(this.state));
    return (
      <form onSubmit={this.handleSubmit}>
        {Object.keys(this.state).map((el, index, array) => {
          return index !== array.length - 1 ? (
            <label key={el}>
              <input
                placeholder={el}
                name={el}
                value={this.state[el]}
                onChange={this.handleChange}
              />
            </label>
          ) : (
            <label key={el}>
              <select
                name="city"
                defaultValue={cities[1]}
                onChange={this.handleChange}>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
          );
        })}
        <button type="submit">Пригласить</button>
      </form>
    );
  }
}

export default TeacherForm;
