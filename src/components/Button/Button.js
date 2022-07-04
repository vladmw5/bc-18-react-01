import s from "./Button.module.css";
import { ButtonMain, ButtonDisabled } from "./Button.styled";
import { AiFillPlusCircle } from "react-icons/ai";
import { GiOpenBook, GiGraduateCap } from "react-icons/gi";

const Button = ({ title, type = "filed", isDisabled, onClick }) => {
  function switchIcon() {
    switch (title) {
      case "Университет":
        return <GiOpenBook />;
      case "Факультеты":
        return <GiGraduateCap />;
      default:
        break;
    }
  }
  return (
    <>
      {isDisabled ? (
        <ButtonDisabled onClick={onClick} type={type}>
          {title}
        </ButtonDisabled>
      ) : (
        <ButtonMain onClick={onClick} type={type}>
          {" "}
          {type === "filed" ? <AiFillPlusCircle /> : switchIcon()}
          {title}
        </ButtonMain>
      )}
    </>
  );
};

export default Button;
