import styled, { keyframes } from 'styled-components';

import { breakpointRules } from 'src/constants/breakpoints';
import {
  defaultPadding, ivoryBlackColour, whiteColour,
} from 'src/constants/styles';

const ContentSlideInAnimation = keyframes`
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

export const ContentWrapperStyled = styled.section`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  position: relative;
  overflow-y: hidden;
`;

export const Canvas = styled.canvas`
  user-select: none;
  top: 0;
  left: 0;
`;

export const ContentContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: ${({ height }) => height}px;
  padding-top: ${({ headingHeight, innerHeight }) => `calc(${innerHeight}px - ${headingHeight}px)`};
  overflow-y: auto;

  @media screen and (min-width: ${breakpointRules.tablet}px) {
    padding-bottom: ${defaultPadding};
  }
`;

export const Content = styled.section`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  color: ${ivoryBlackColour};
  background-color: ${whiteColour};
  will-change; opacity, transform;
  animation-name: ${ContentSlideInAnimation};
  animation-duration: .35s;
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;
  border-top-right-radius: .75rem;
  border-top-left-radius: .75rem;

  @media screen and (min-width: ${breakpointRules.tablet}px) {
    border-bottom-left-radius: .75rem;
    border-bottom-right-radius: .75rem;
    width: 50%;
  }

  @media screen and (min-width: ${breakpointRules.laptop}px) {
    width: 35%;
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  margin: 0;
`;

export const Subtitle = styled.h5`
  margin: 0;
  text-transform: uppercase;
  opacity: .75;
`;

export const DescriptionWrapper = styled.div`
  padding: 0 ${defaultPadding} ${defaultPadding} ${defaultPadding};
`;

export const ContentHeader = styled.div`
  padding: ${defaultPadding};
`;
