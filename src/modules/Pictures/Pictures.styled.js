import styled from 'styled-components';

export const BoardStyled = styled.div`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const AtTheClubFrame = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 100%;
`;

export const CenteredFrame = styled.img`
  width: 75%;
  max-height: 75%;
  object-fit: contain;
  height: min-intrinsic;
  border-radius: 4px;
`;
