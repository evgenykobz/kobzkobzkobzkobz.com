import styled from 'styled-components';

import { defaultPadding } from 'src/constants';

export const MenuStyled = styled.nav`
  position: absolute;
  bottom: ${defaultPadding}px;
  right: ${defaultPadding}px;
  border: 2px solid black;
  display: flex;
`;
