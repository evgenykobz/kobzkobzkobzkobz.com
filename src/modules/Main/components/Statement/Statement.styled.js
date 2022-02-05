import styled from 'styled-components';

import { Button } from 'src/components';
import { ivoryBlackColour } from 'src/constants';

export const StatementStyled = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${ivoryBlackColour};
`;

export const Paragraph = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const TextButton = styled(Button)`
  display: inline-block;
  padding: .15rem 0.75rem;
`;
