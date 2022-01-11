import React, { useCallback, useRef } from 'react';

import { Outlet } from 'react-router-dom';

import { GlobalStyle } from 'src/constants/styles';

import { ThemeProvider } from '../Theme';
import { InteractionProvider, ScrollProvider } from '../UserMotion';
import { AppContainer } from './App.styled';
import { FrankensteinHeadProvider, Menu } from './components';

export const App = () => {
  const observableElementRef = useRef();

  // Callback being run at app start to supply refs with initial values
  const appContainerCallback = useCallback((node) => {
    if (!node) {
      return;
    }

    observableElementRef.current = node;
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyle />

      <AppContainer ref={appContainerCallback}>
        <InteractionProvider observableElement={observableElementRef}>
          <ScrollProvider>
            <FrankensteinHeadProvider>
              <Outlet />
            </FrankensteinHeadProvider>
          </ScrollProvider>
        </InteractionProvider>
      </AppContainer>

      <Menu />
    </ThemeProvider>
  );
};
