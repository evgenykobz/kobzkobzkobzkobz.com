import styled from 'styled-components';

import { INITIAL_WIDTH } from '../../Header.constants';

export const LogoWrapper = styled.div`
  width: ${INITIAL_WIDTH}px;
  will-change: transform;
  transition: transform;
  transition-duration: .20s;
  transition-timing-function: ease-out;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 0%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  will-change: opacity;
  transition: opacity;
  transition-duration: .25s;
  transition-timing-function: ease-out;
`;
