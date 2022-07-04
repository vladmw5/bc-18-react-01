import { Component } from "react";
import Modal from "../Modal/Modal";
import TeacherForm from "../TeacherForm/TeacherForm";
import Button from "../Button/Button";
class Main extends Component {
  state = { modalShown: false, teachers: [] };

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        modalShown: !prevState.modalShown,
      };
    });
  };

  onSubmit = (teacher) => {
    this.setState((prevState) => ({
      teachers: [...prevState.teachers, teacher],
    }));

    this.toggleModal();
  };

  render() {
    return (
      <main>
        <Button title="Запросити викладача" onClick={this.toggleModal} />
        {this.state.modalShown ? (
          <Modal onClose={this.toggleModal}>
            <TeacherForm onSubmit={this.onSubmit} />
          </Modal>
        ) : null}
      </main>
    );
  }
}

export default Main;
