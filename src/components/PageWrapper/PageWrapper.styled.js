import styled from 'styled-components';

import { breakpointRules, defaultPadding } from 'src/constants';
import { INITIAL_WIDTH } from 'src/core/App/components/Header';

export const PageWrapperStyled = styled.div`
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
