import React, { useState } from 'react';
import Block from 'components/Block';
import CalculationArea from 'components/CalculationArea';
import ResultArea from 'components/ResultArea';
import {
  Container,
  TicketTitle,
} from './styles';

const App = () => {
  const [isTicketWon, setTicketResult] = useState(false);
  const [showResult, toggleResultVisibility] = useState(false);
  const handleResultVisibilityChange = () => {
    toggleResultVisibility(!showResult);
  };

  return (
    <Container>
      <Block>
        <TicketTitle>Билет</TicketTitle>
        {
          !showResult ?
            <CalculationArea
              onResultShow={handleResultVisibilityChange}
              onTicketResultChange={(result) => { setTicketResult(result); }}
            /> :
            <ResultArea
              isTicketWon={isTicketWon}
              onReset={handleResultVisibilityChange}
            />
        }
      </Block>
    </Container>
  );
};

export default App;
