import React from 'react';

import LogoImage from 'src/assets/images/logo.png';

import { HeaderStyled, HeaderLogo } from './Header.styled';

export const Header = () => (
  <HeaderStyled>
    <HeaderLogo
      src={LogoImage}
      alt="Off-white Swan Logo"
    />
  </HeaderStyled>
);
