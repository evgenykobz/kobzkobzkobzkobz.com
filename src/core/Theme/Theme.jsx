import React, { useEffect, useMemo, useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { THEME_CONTEXT_DEFAULT_VALUE, THEME_TYPES } from './Theme.constants';

export const ThemeProvider = ({ children }) => {
  const [type, setType] = useState(THEME_CONTEXT_DEFAULT_VALUE.type);
  const [blockScreen, setBlockScreen] = useState(THEME_CONTEXT_DEFAULT_VALUE.blockScreen);

  const themeContext = useMemo(() => ({
    type,
    blockScreen,
    setBlockScreen,
  }), [type, blockScreen, setBlockScreen]);

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }

    const mediaMatch = window.matchMedia('(prefers-color-scheme: dark)');

    const handleMediaChange = ({ matches }) => (matches ? setType(THEME_TYPES.dark) : setType(THEME_TYPES.white));

    handleMediaChange(mediaMatch);

    mediaMatch.addEventListener('change', handleMediaChange);

    return () => mediaMatch.removeEventListener('change', handleMediaChange);
  }, []);

  return <StyledThemeProvider theme={themeContext}>{children}</StyledThemeProvider>;
};
