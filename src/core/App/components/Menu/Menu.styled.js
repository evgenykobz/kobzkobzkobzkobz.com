import styled from 'styled-components';

import { whiteColour } from 'src/constants';

export const MenuStyled = styled.nav`
  will-change: bottom;
  user-select: none;
  position: fixed;
  width: 100%;
  background-color: ${whiteColour};
  border: 2px solid black;
  display: flex;
  z-index: 1;
  cursor: pointer;
  touch-action: none;
`;

export const MenuBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: hidden;
  touch-action: none;
`;
