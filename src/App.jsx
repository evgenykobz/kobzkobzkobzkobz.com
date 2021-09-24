import React from 'react';

import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './router';

export const App = () => {
  const theme = {
    name: 'white',
  };

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('app'));
