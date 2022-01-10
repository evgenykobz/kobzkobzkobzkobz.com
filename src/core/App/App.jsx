import React from 'react';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'src/constants/styles';

import { InteractionProvider } from '../Interaction';
import { Header, Menu } from './components';

export const App = () => (
  <ThemeProvider theme={{
    name: 'white',
  }}
  >
    <InteractionProvider>
      <GlobalStyle />

      <Header />

      <Outlet />
    </InteractionProvider>

    <Menu />
  </ThemeProvider>
);
