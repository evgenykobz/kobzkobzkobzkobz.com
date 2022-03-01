import styled from 'styled-components';

import { THEME_TYPES } from 'src/core/Theme/Theme.constants';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  z-index: 1;
`;

export const HeaderBackground = styled.div`
  will-change: opacity;
  width: 100%;
  height: 100%;
  position: absolute;

  ${({ theme: { type } }) => (type === THEME_TYPES.light) && `
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,.75) 0%, rgba(255,255,255,0.15) 75%, rgba(255,255,255,0) 100%);
  `}
`;
