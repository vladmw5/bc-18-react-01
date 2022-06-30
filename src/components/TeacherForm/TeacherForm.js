import { Component } from "react";
import { nanoid } from 'nanoid'


class TeacherForm extends Component {
  state = {
    name: "",
    surname: "",
    patronymic: "",
    number: "",
    email: "",
    city: "",
  };

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (ev) => {
      ev.preventDefault();
      this.props.onSubmit({ ...this.state, key: nanoid()});
  };

  render() {
    console.log(Object.keys(this.state));
    return (
      <form onSubmit={this.handleSubmit}>
        {Object.keys(this.state).map((el) => (
          <label key={el}>
            <input
              placeholder={el}
              name={el}
              value={this.state[el]}
              onChange={this.handleChange}
            />
          </label>
        ))}
        <button type="submit">Пригласить</button>
      </form>
    );
  }
}

export default TeacherForm;
