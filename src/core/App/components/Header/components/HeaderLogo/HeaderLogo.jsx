import React from 'react';

import { FILL_VARIANTS } from '../../Header.constants';
import { LogoWrapper, LogoImage } from './HeaderLogo.styled';
import LogoImageDefault from './images/logo.png';
import LogoImageBlack from './images/logoBlack.png';
import LogoImageWhite from './images/logoWhite.png';

export const HeaderLogo = ({ variant, scale, onClick }) => (
  <LogoWrapper
    onClick={onClick}
    style={{
      transform: `scale(${scale})`,
    }}
  >
    <LogoImage
      src={LogoImageDefault}
      alt="Off-white Swan Logo"
      style={{ opacity: variant === FILL_VARIANTS.default ? 1 : 0 }}
      loading="eager"
    />
    <LogoImage
      src={LogoImageBlack}
      alt="Mars Black Swan Logo"
      style={{ opacity: variant === FILL_VARIANTS.black ? 1 : 0 }}
      loading="eager"
    />
    <LogoImage
      src={LogoImageWhite}
      alt="Titanium White Swan Logo"
      style={{ opacity: variant === FILL_VARIANTS.white ? 1 : 0 }}
      loading="eager"
    />
  </LogoWrapper>
);
