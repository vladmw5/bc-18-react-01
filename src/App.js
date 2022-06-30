import Section from "./components/Section/Section";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import menu from "./components/Sidebar/menu.json";
import user from "./components/UserTitle/user.json";
import TeacherForm from "./components/TeacherForm/TeacherForm";
import { Component } from "react";

class App extends Component {
  state = {
    teachers: [],
  };

  teacherFormSubmit = (teacher) => {
    console.log(teacher);
  };

  render() {
    return (
      <>
        {/* <Sidebar buttons={menu} user={user} />
      <Section
        title="Викладачі"
        buttonTitle="Додати викладача"
        buttonType="filled"
      >
        <div>таблиця</div>
      </Section> */}
        <TeacherForm onSubmit={this.teacherFormSubmit} />
      </>
    );
  }
}

export default App;
