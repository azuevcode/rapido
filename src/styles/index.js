import styled, { createGlobalStyle } from 'styled-components';
import { Title } from 'components/ui';
// import defaultStyles from './vars';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');

  html, body {
    height: 100%;
  }

  html {
    font-size: 14px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  background: linear-gradient(180deg, #4568DC 0%, #B06AB3 100%), #EF8E48;
  padding: 20px;
`;

export const TicketTitle = styled(Title)`
  margin-bottom: 20px;
`;
