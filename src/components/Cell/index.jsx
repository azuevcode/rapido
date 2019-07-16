import styled, { css } from 'styled-components';
import { Button } from 'components/ui';

const Cell = styled(Button)`
  border: 1px solid #DDDDDD;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  min-width: 40px;
  box-sizing: border-box;
  padding: 0;

  ${({ selected }) => selected && css`
    transform: scale(0.95);
    background-color: #FFD205;
  `}
`;

export default Cell;
