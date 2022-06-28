import s from './Button.module.css'
import { ButtonMain, ButtonDisabled } from './Button.styled'
import { AiFillPlusCircle } from 'react-icons/ai'
import { GiOpenBook, GiGraduateCap } from 'react-icons/gi'



const Button = ({ title, type='filed', isDisabled }) => {
  function switchIcon (){
    switch (title) {
      case 'Университет':
      return <GiOpenBook/>
      case 'Факультеты':
      return <GiGraduateCap/>
      default:
        break;
    }
  }
  return (<>{isDisabled ? <ButtonDisabled type={type}>{title}</ButtonDisabled> : <ButtonMain type={type}> {type === 'filed'? <AiFillPlusCircle />: switchIcon()}{title}</ButtonMain>}</>);
};

export default Button;
