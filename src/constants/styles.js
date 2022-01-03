import { createGlobalStyle } from 'styled-components';

export const defaultPadding = 18;

export const blackFontColour = (opacity = 100) => `rgba(51, 51, 51, ${opacity}%)`;

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Inter, sans-serif;
    font-size: 16px;
  }

  div#app {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;
