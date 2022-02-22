import styled from 'styled-components';

import { ivoryBlackColour, titaniumWhiteColour } from 'src/constants/styles';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${titaniumWhiteColour};
`;

export const Loader = styled(Wrapper)``;

export const ErrorWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${ivoryBlackColour};
`;

export const ErrorText = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  max-width: 400px;
  font-weight: 500;
  opacity; .25;
`;
