import React from 'react';
import { ResultMessage } from './styles';
import { Button } from 'components/ui';

const ResultArea = ({
  isTicketWon,
  onReset,
}) => (
  <div>
    <ResultMessage>
      {
        isTicketWon ?
          'Ого, вы выиграли! Поздравляем!' :
          'К сожалению, вам не повезло. Попробуйте еще раз!'
      }
    </ResultMessage>
    <Button onClick={onReset}>Попробовать еще</Button>
  </div>
);

export default ResultArea;
