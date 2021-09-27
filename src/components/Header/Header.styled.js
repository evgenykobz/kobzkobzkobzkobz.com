import styled from 'styled-components';

import { defaultPadding } from 'constants';

export const HeaderStyled = styled.header`
  padding-left: ${defaultPadding}px;
  padding-right: ${defaultPadding}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 75%;
`;
