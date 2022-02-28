import styled from 'styled-components';

import { defaultPadding, ivoryBlackColour } from 'src/constants/styles';

import { NavigationButton } from './components';
import CrossIcon from './icons/cross.svg';

export const StoriesWrapperStyled = styled.div`
  position: relative;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  background-color: ${ivoryBlackColour};
  background-blend-mode: multiply;
  mask: url(${CrossIcon}) no-repeat center;
  width: 100%;
  height: 100%;
  will-change: opacity, transform;
  transition: opacity, transform .15s, .2s ease-in;

  &:focus, :active {
    transform: scale(0.95);
  }
`;

export const CloseButton = styled.div`
  mix-blend-mode: overlay;
  position: fixed;
  right: 0;
  top: 0;
  width: 4rem;
  height: 4.5rem;
  padding: 1.5rem ${defaultPadding} ${defaultPadding} ${defaultPadding};
  z-index: 2;
`;

export const RightNavButton = styled(NavigationButton)`
  right: 0;
`;

export const LeftNavButton = styled(NavigationButton)`
  left: 0;
`;
