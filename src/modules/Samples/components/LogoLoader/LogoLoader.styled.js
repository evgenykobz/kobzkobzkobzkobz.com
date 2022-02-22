import styled, { keyframes } from 'styled-components';

import { whiteColour } from 'src/constants/styles';

import LogoIcon from './icons/logo_contour.svg';

const ActivePartAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(.5) translateX(-100%);
  }

  50% {
    opacity: 1;
    transform: scale(1.25) translateX(0);
  }

  100% {
    opacity: 0;
    transform: scale(.75) translateX(100%);
  }
`;

export const LoaderBackground = styled.div`
  background-color: ${whiteColour};
  position: relative;
  width: 4rem;
  height: 4rem;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  mask: url(${LogoIcon}) no-repeat center;
  `;

export const LoaderActivePart = styled.div`
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  background-blend-mode: multiply, multiply;
  position: absolute;
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  border-radius: 50%;
  animation-name: ${ActivePartAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const Logo = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
`;
