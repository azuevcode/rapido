import React, { useState } from 'react';

import Block from './components/Block';
import CalculationContainer from './components/CalculationContainer';
// import Field from './components/Field';
import { Button } from './components/ui';

import {
  Container,
  TicketTitle,
} from './styles';

const App = () => {
  const [isTicketWon, toggleTicketResult] = useState(false);
  const [showResult, toggleResultVisibility] = useState(false);
  const handleResultVisibilityChange = () => {
    toggleResultVisibility(!showResult);
  };

  return (
    <Container>
      <Block>
        <TicketTitle>Билет 1</TicketTitle>
        {
          !showResult ?
            <CalculationArea
              onResultShow={handleResultVisibilityChange}
              onTicketResultChange={() => { toggleTicketResult(!isTicketWon); }}
            /> :
            <ResultArea
              isTicketWon={isTicketWon}
              onReset={handleResultVisibilityChange}
            />
        }
        {/* <Field
          name='Поле 1'
          description='Отметьте 8 чисел'
        />
        <Field
          name='Поле 2'
          description='Отметьте 1 число'
        /> */}
        <Button>Показать результаты</Button>
      </Block>
    </Container>
  );
};

export default App;
