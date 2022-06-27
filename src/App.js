import Section from "./components/Section/Section";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import menu from "./components/Sidebar/menu.json";
import user from "./components/UserTitle/user.json";

function App() {
  return (
    <>
      <Sidebar buttons={menu} user={user} />

      <Section
        title="Викладачі"
        buttonTitle="Додати викладача"
        buttonType="filled"
      >
        <div>таблиця</div>
      </Section>
    </>
  );
}

export default App;
