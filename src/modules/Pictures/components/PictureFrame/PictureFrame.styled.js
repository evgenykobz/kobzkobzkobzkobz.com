import styled from 'styled-components';

import { defaultPadding, titaniumWhiteColour } from 'src/constants/styles';

export const PictureFrameStyled = styled.figure`
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: ${titaniumWhiteColour};
`;

export const FrameCaption = styled.figcaption`
  padding-bottom: ${defaultPadding};
  font-weight: 600;
  position: fixed;
  bottom: 0;
  text-align: center;
  will-change: opacity;
  transition-property: opacity;
  transition-duration: 110ms;
  transition-timing-function: ease;
  text-transform: capitalize;
`;
