import React from 'react';

import { Outlet } from 'react-router-dom';

import { GlobalStyle } from 'src/constants/styles';

import { ThemeProvider } from '../Theme';
import { IntersectionProvider, ScrollProvider, ResizeProvider } from '../UserMotion';
import { FrankensteinHeadProvider, Menu } from './components';

export const App = () => (
  <ThemeProvider>
    <GlobalStyle />

    <ResizeProvider>
      <ScrollProvider>
        <IntersectionProvider>
          <FrankensteinHeadProvider>
            <Outlet />
          </FrankensteinHeadProvider>
        </IntersectionProvider>
      </ScrollProvider>
      <Menu />
    </ResizeProvider>
  </ThemeProvider>
);
