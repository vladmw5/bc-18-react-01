import Section from "./components/Section/Section";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import menu from "./components/Sidebar/menu.json";
import user from "./components/UserTitle/user.json";
import TeacherForm from "./components/TeacherForm/TeacherForm";
import Main from "./components/Main/Main";
import { Component } from "react";
import Pokemon from "./components/Pokemon/Pokemon";

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
        {/* <Sidebar buttons={menu} user={user} />
        <Main /> */}
        <Pokemon />
      </div>
    );
  }
}

export default App;
