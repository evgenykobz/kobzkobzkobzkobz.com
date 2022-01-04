import styled from 'styled-components';

import { defaultPadding, blackFontColour } from 'src/constants';

export const FooterStyled = styled.footer`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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
  font-size: .75rem;
  color: ${blackFontColour(50)};
`;
