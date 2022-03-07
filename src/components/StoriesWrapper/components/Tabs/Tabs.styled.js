import styled from 'styled-components';

import { defaultPadding } from 'src/constants/styles';

export const TabsStyled = styled.div`
  mix-blend-mode: overlay;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding-top: 0.5rem;
  padding-left: ${defaultPadding};
  padding-right: ${defaultPadding};
  position: fixed;
  top: 0;
  z-index: 1;
`;
