import styled from 'styled-components';

import { offwhiteBackgroundColour } from 'src/constants/styles';

export const NavigationButtonStyled = styled.div`
  cursor: pointer;
  position: fixed;
  height: 100%;
  width: 15%;
  background-color: ${offwhiteBackgroundColour};
  opacity: 0;
  will-change: opacity;
  transition: opacity .15s ease-in;
  z-index: 1;

  &:hover, :focus, :active {
    opacity: .45;
  }
`;
