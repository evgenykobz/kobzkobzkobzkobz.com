import React from 'react';

import { FooterStyled, ExternalLink, Sentence } from './Footer.styled';

export const Footer = () => (
  <FooterStyled>
    <Sentence>
      Created with

      <ExternalLink href="https://github.com/kobzzz/kobzkobzkobzkobz.com">
        love
      </ExternalLink>
    </Sentence>
  </FooterStyled>
);
