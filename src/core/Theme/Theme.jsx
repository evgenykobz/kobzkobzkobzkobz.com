import React, { useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { THEME_CONTEXT_DEFAULT_VALUE } from './Theme.constants';

export const ThemeProvider = ({ children }) => {
  const [themeContext, setThemeContext] = useState(THEME_CONTEXT_DEFAULT_VALUE);

  const setBlockScreen = () => setThemeContext({ ...themeContext, blockScreen: true });

  return <StyledThemeProvider theme={{ ...themeContext, setBlockScreen }}>{children}</StyledThemeProvider>;
};
