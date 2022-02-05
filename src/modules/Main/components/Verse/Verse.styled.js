import styled from 'styled-components';

import { defaultPadding, ivoryBlackColour } from 'src/constants';

export const VerseStyled = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 0.75rem;
  font-style: italic;
  color: ${ivoryBlackColour};
  width: fit-content;
  margin: 0 ${defaultPadding} 5rem auto;
`;
