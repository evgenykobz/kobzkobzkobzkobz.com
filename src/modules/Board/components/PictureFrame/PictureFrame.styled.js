import styled from 'styled-components';

import { defaultPadding } from 'src/constants/styles';

export const PictureFrameStyled = styled.figure`
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: gray;
`;

export const FrameCaption = styled.figcaption`
  padding: ${defaultPadding};
  font-size: 0.75rem;
  position: fixed;
  bottom: 0;
  text-align: center;
  transition-property: opacity;
  transition-duration: 110ms;
  transition-timing-function: ease;
`;
