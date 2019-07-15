import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 40px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.16);
    cursor: pointer;
    outline: none;
    transition: .3s;

    
    &:hover {
        transition: .3s;
        background-color: #FFD205;
    }

    &:active {
        transition: .3s;
        transform: scale(0.98);
    }
`;

export default Button;