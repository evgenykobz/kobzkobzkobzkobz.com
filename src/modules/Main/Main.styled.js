import styled from 'styled-components';

import { breakpointRules } from 'src/constants';
import { INITIAL_WIDTH } from 'src/core/App/components/Header';

export const MainStyled = styled.div`
  padding-top: ${INITIAL_WIDTH}px;

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
