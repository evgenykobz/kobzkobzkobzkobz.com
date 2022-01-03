import React from 'react';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header, Menu, Footer } from 'src/components';
import { GlobalStyle } from 'src/constants/styles';

export const App = () => (
  <ThemeProvider theme={{
    name: 'white',
  }}
  >
    <GlobalStyle />
    <Header />
    <Menu />
    <Outlet />
    <Footer />
  </ThemeProvider>
);
