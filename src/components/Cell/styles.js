import styled, { css } from 'styled-components';
import { Button } from 'components/ui';

export const Cell = styled(Button)`
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

  ${({ active }) => active && css`
    transform: scale(0.97);
    transition: .3s;
  `}
`;
