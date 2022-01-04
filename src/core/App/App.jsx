import React from 'react';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header, Menu } from 'src/components';
import { GlobalStyle } from 'src/constants/styles';

import { InteractionProvider } from '../Interaction';

export const App = () => (
  <ThemeProvider theme={{
    name: 'white',
  }}
  >
    <InteractionProvider>
      <GlobalStyle />

      <Header />

      <Menu />

      <Outlet />
    </InteractionProvider>
  </ThemeProvider>
);
