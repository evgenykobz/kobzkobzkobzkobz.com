import styled from 'styled-components';

import { titaniumWhiteColour } from 'src/constants/styles';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${titaniumWhiteColour};
`;

export const Loader = styled(Wrapper)``;

export const ErrorWrapper = styled(Wrapper)``;
