import React, { useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { THEME_CONTEXT_DEFAULT_VALUE } from './Theme.constants';

export const ThemeProvider = ({ children }) => {
  const [themeContext, setThemeContext] = useState(THEME_CONTEXT_DEFAULT_VALUE);

  const setBlockScreen = (blockScreen) => setThemeContext({ ...themeContext, blockScreen });

  return <StyledThemeProvider theme={{ ...themeContext, setBlockScreen }}>{children}</StyledThemeProvider>;
};
