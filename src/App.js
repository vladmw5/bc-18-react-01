import { Routes, Route } from "react-router-dom";
import { StyledLink } from "./AppStyled";
import Section from "./components/Section/Section";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import menu from "./components/Sidebar/menu.json";
import user from "./components/UserTitle/user.json";
import TeacherForm from "./components/TeacherForm/TeacherForm";
import Main from "./components/Main/Main";
import { Component } from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import Home from "./components/Home";
class App extends Component {
  state = {
    teachers: [],
  };

  teacherFormSubmit = (teacher) => {
    console.log(teacher);
    this.setState(({ teachers }) => ({
      teachers: [...teachers, teacher],
    }));
  };

  render() {
    return (
      <div>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="pokemon">Pokemon</StyledLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
