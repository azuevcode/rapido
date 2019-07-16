import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/ui';
import { ResultMessage } from './styles';

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

ResultArea.propTypes = {
  isTicketWon: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ResultArea;
