import { Component } from "react";
import { nanoid } from "nanoid";

const initialState = {
  name: "",
  surname: "",
  patronymic: "",
  number: "",
  email: "",
  city: "",
  contract: false,
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

  handleCheckbox = (ev) => {
    this.setState(({ contract }) => {
      return {
        contract: !contract,
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {Object.keys(this.state).map((el, index, array) => {
          if (el === "contract") {
            return (
              <label key={el}>
                {el}
                <input
                  type="checkbox"
                  name={el}
                  value={this.state[el]}
                  checked={this.state[el]}
                  onChange={this.handleCheckbox}
                />
              </label>
            );
          }
          return index !== array.length - 2 ? (
            <label key={el}>
              <input
                type="text"
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
                onChange={this.handleChange}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
          );
        })}
        <button type="submit" disabled={!this.state.contract}>
          Пригласить
        </button>
      </form>
    );
  }
}

export default TeacherForm;
