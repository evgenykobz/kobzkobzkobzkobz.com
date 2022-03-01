import React, { useEffect, useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { THEME_CONTEXT_DEFAULT_VALUE, THEME_TYPES } from './Theme.constants';

export const ThemeProvider = ({ children }) => {
  const [themeContext, setThemeContext] = useState(THEME_CONTEXT_DEFAULT_VALUE);

  const setBlockScreen = (blockScreen) => setThemeContext({ ...themeContext, blockScreen });

  const setThemeType = (type) => setThemeContext({ ...themeContext, type });

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }

    const mediaMatch = window.matchMedia('(prefers-color-scheme: dark)');

    const handleMediaChange = ({ matches }) => (matches ? setThemeType(THEME_TYPES.dark) : setThemeType(THEME_TYPES.white));

    handleMediaChange(mediaMatch);

    mediaMatch.addEventListener('change', handleMediaChange);

    return () => mediaMatch.removeEventListener('change', handleMediaChange);
  }, []);

  return <StyledThemeProvider theme={{ ...themeContext, setBlockScreen }}>{children}</StyledThemeProvider>;
};
