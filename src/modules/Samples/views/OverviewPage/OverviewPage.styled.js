import styled from 'styled-components';

import { Button } from 'src/components';
import { ivoryBlackColour } from 'src/constants/styles';

export const OverviewStyled = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  color: ${ivoryBlackColour};
`;

export const Paragraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const WatchButton = styled(Button)`
  border-radius: 2rem;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
`;
