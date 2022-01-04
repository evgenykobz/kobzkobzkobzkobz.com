import React from 'react';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header, Menu, Footer } from 'src/components';
import { GlobalStyle } from 'src/constants/styles';
import { ScrollProvider } from 'src/modules';

import { ContentContainer, AppContainerStyled } from './App.styled';

export const App = () => (
  <ThemeProvider theme={{
    name: 'white',
  }}
  >
    <ScrollProvider>
      <AppContainerStyled>
        <GlobalStyle />

        <Header />

        <Menu />

        <ContentContainer>
          <Outlet />
        </ContentContainer>

        <Footer />
      </AppContainerStyled>
    </ScrollProvider>
  </ThemeProvider>
);
