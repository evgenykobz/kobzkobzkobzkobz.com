import styled, { keyframes } from 'styled-components';

import {
  whiteColour, defaultPadding, offwhiteBackgroundColour, ivoryBlackColour,
} from 'src/constants';

import CrossIcon from './icons/cross.svg';
import HomeIcon from './icons/home.svg';

const menuTransitionTiming = '.25s';
const iconTransitionTiming = '.125s';
const transformTiming = '.15s';

export const MenuButtonWrapper = styled.div`
  padding: ${defaultPadding};
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  user-select: none;
`;

export const MenuRoundButton = styled.button`
  position: relative;
  border: unset;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  background-color: ${whiteColour};
  box-shadow: 0px 0px 15px 0px rgba(35, 31, 32, 0.1);
  border-radius: 100%;
  will-change: background-color, box-shadow, transform;
  transition: background-color, box-shadow, transform ${transformTiming}, ${transformTiming}, ${transformTiming} ease-out;
  cursor: pointer;

  ${({ enableHover }) => (enableHover
    ? `&:hover {
      background-color: ${offwhiteBackgroundColour};
      box-shadow: unset;
    }`
    : null)}

  &:focus, :active {
    transform: scale(0.85);

    ${({ enableHover }) => (!enableHover
    ? `background-color: ${offwhiteBackgroundColour};
        box-shadow: unset;`
    : null)}
  }
`;

const FadeInAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 0.5 }
`;

const SlideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  50% {
    opacity: 0.75;
    transform: translateY(8px);
  }

  50% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const MenuBackground = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: hidden;
  background-color: ${ivoryBlackColour};
  animation-name: ${FadeInAnimation};
  animation-duration: ${menuTransitionTiming};
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
  will-change: opacity;
`;

const MenuIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.75rem;
  height: 1.75rem;
  transform: translateY(50%) translateX(50%);
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  background-blend-mode: multiply, multiply;
  will-change: opacity;
  transition: opacity ${iconTransitionTiming} ease-in-out;
  cursor: pointer;
`;

export const CloseButtonIcon = styled(MenuIcon)`
  mask: url(${CrossIcon}) no-repeat center;
`;

export const MenuHomeIcon = styled(MenuIcon)`
  mask: url(${HomeIcon}) no-repeat center;
`;

export const MenuNavList = styled.nav`
  position: absolute;
  right: ${defaultPadding};
  bottom: ${({ buttonHeight }) => buttonHeight}px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  background-color: ${whiteColour};
  border-radius: ${defaultPadding};
  overflow: hidden;
  will-change; opacity, transform;
  animation-name: ${SlideInAnimation};
  animation-duration: ${menuTransitionTiming};
`;
