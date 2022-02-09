import styled from 'styled-components';

import { breakpointRules, defaultPadding } from 'src/constants';

export const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

export const BoldText = styled.b`
  font-weight: 600;
`;

export const ItalicText = styled.i`
  font-weight: 300;
`;

export const FigureWrapper = styled.figure``;

export const StyledArtworkImage = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const FigureCaption = styled.figcaption`
  padding-top: .5rem;
  font-size: .75rem;
  font-weight: 400;
  opacity: .5;
  text-align: center;

  @media screen and (min-width: ${breakpointRules.tablet}px) {
    text-align: left;
  }
`;

export const PaddedFigureCaption = styled(FigureCaption)`
  padding-left: ${defaultPadding};
  text-align: left;

  @media screen and (min-width: ${breakpointRules.tablet}px) {
    padding-left: unset;
  }
`;

export const TextWrapper = styled.section`
  padding-left: ${defaultPadding};
  padding-right: ${defaultPadding};

  @media screen and (min-width: ${breakpointRules.tablet}px) {
    padding-left: unset;
    padding-right: unset;
  }
`;

export const InTextFigure = styled(FigureWrapper)`
  margin: .5rem auto .5rem auto;
  width: max-content;
`;

export const LeftSidedFigure = styled(InTextFigure)`
  @media screen and (min-width: ${breakpointRules.tablet}px) {
    float: left;
    margin: .5rem 1.5rem .5rem 0;
  }
`;

export const RightSidedFigure = styled(InTextFigure)`
  @media screen and (min-width: ${breakpointRules.tablet}px) {
    float: right;
    margin: .5rem 0 .5rem 1.5rem;
  }
`;

export const StyledProcessImage = styled.img`
  height: 300px;
  width: auto;
  object-fit: cover;
  object-position: center;
`;

export const StyledObjectImage = styled.img`
  width: auto;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

export const StyledSignature = styled.h5`
  font-weight: 500;
`;
