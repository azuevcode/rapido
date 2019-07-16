import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 40px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.16);
  cursor: pointer;
  outline: none;
  transition: .1s;


  &:hover:enabled {
    transition: .3s;
    background-color: #FFD205;
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    transition: .3s;
  }
`;

export default Button;
