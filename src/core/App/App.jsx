import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'src/constants/styles';

import { Router } from '../Router';
import { ThemeProvider } from '../Theme';
import { IntersectionProvider, ScrollProvider, ResizeProvider } from '../UserMotion';
import { FrankensteinHeadProvider, Menu } from './components';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <GlobalStyle />

      <ResizeProvider>
        <ScrollProvider>
          <IntersectionProvider>
            <FrankensteinHeadProvider>
              <Router />
            </FrankensteinHeadProvider>
          </IntersectionProvider>
        </ScrollProvider>
        <Menu />
      </ResizeProvider>
    </ThemeProvider>
  </BrowserRouter>
);
