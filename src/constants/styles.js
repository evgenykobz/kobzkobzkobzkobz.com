import { createGlobalStyle } from 'styled-components';

export const defaultPadding = '1rem';

export const blackFontColour = (opacity = 100) => `rgba(51, 51, 51, ${opacity}%)`;

export const offwhiteBackgroundColour = '#f5f5f5';

export const whiteColour = 'white';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Inter, sans-serif;
    font-size: 16px;
  }

  figure {
    margin: 0;
  }
`;
