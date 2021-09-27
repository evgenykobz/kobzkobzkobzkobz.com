import React from 'react';

import { render } from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Core } from './core';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Inter, sans-serif;
    font-size: 16px;
  }

  div#app {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export const App = () => {
  const theme = {
    name: 'white',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Core />
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('app'));
