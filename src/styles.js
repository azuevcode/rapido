import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 14px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow-y: hidden;
  }
`;
