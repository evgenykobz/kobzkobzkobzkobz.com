import { createGlobalStyle } from 'styled-components';

export const defaultPadding = '1rem';

export const blackFontColour = (opacity = 100) => `rgba(51, 51, 51, ${opacity}%)`;
export const ivoryBlackColour = '#231F20';
export const titaniumWhiteColour = '#F3F4F7';
export const offwhiteBackgroundColour = '#F5F5F5';

export const whiteColour = 'white';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Inter, sans-serif;
    font-size: 16px;
  }

  div#app {
    position: relative;
  }

  ${({ theme }) => theme.blockScreen && `body {
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
  }`}

  figure {
    margin: 0;
  }
`;
