import {  ButtomContainer } from './styles';

const Button = ({label, onClick}) => {
    return (
      <ButtomContainer onClick={onClick} >
        {label}
      </ButtomContainer>
    );
  }
  
  export default Button;