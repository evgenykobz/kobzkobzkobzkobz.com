import styled from 'styled-components';

import { defaultPadding, blackFontColour } from 'constants';

export const FooterStyled = styled.footer`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 1.25rem;
  padding-left: ${defaultPadding}px;
  padding-right: ${defaultPadding}px;
`;

export const ExternalLink = styled.a`
  margin-left: 0.25rem;
  text-decoration: none;
  color: ${blackFontColour()};
  box-shadow: 0 2px ${blackFontColour()};
`;

export const Sentence = styled.div`
  margin-left: auto;
  font-weight: 600;
  color: ${blackFontColour(50)};
`;
