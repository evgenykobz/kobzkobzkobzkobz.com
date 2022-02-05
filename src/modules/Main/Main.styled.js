import styled from 'styled-components';

import { Button } from 'src/components';
import { breakpointRules, defaultPadding } from 'src/constants';
import { INITIAL_WIDTH } from 'src/core/App/components/Header';

export const MainStyled = styled.div`
  padding-top: calc(${INITIAL_WIDTH}px + 5rem);
  padding-bottom: ${defaultPadding};

  @media screen and (min-width: ${breakpointRules.tablet}px) {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${breakpointRules.laptop}px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SectionButton = styled(Button)`
  width: 300px;
  margin: 0 auto;

  @media screen and (min-width: ${breakpointRules.tablet}px) {
    width: 200px;
    margin: 0 0 0 auto;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 2rem;

  @media screen and (min-width: ${breakpointRules.tablet}px) {
    width: 200px;
    margin: 1rem 0 1rem auto;
  }
`;
