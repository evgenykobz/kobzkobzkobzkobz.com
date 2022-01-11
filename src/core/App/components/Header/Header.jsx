import React, { useEffect, useState } from 'react';

import LogoImage from 'src/assets/images/logo.png';
import { easeOutCubic, interpolate } from 'src/utils/math';

import {
  INITIAL_OPACITY, INITIAL_WIDTH, TARGET_OPACITY, TARGET_SCROLL, TARGET_WIDTH,
} from './Header.constants';
import {
  HeaderStyled, HeaderLogo, HeaderBackground,
} from './Header.styled';

/**
 * @function Header
 * @description Smart Header Component that sets its opacity and size using scroll data.
 * @note Accepts size in props, can trigger "onSizeChange" handler
 */
export const Header = ({ scroll, size, onSizeChange }) => {
  const [headerOpacity, setOpacity] = useState(INITIAL_OPACITY);

  useEffect(() => {
    // Do not update width if scroll position is NaN
    if (Number.isNaN(scroll)) {
      return;
    }

    const width = interpolate(INITIAL_WIDTH, TARGET_WIDTH, easeOutCubic(scroll / TARGET_SCROLL));
    const opacity = interpolate(INITIAL_OPACITY, TARGET_OPACITY, easeOutCubic(scroll / TARGET_SCROLL));

    // If width has reached either MIN or MAX value, stick to it
    const reachedTarget = width <= TARGET_WIDTH;
    const reachedInitial = width >= INITIAL_WIDTH;

    if (reachedTarget) {
      onSizeChange(TARGET_WIDTH);
      setOpacity(TARGET_OPACITY);
      return;
    }

    if (reachedInitial) {
      onSizeChange(INITIAL_WIDTH);
      setOpacity(INITIAL_OPACITY);
      return;
    }

    if (!Number.isNaN(width)) {
      onSizeChange(width);
    }

    if (!Number.isNaN(opacity)) {
      setOpacity(opacity);
    }
  }, [scroll]);

  return (
    <HeaderStyled>
      <HeaderBackground style={{ opacity: headerOpacity }} />
      <HeaderLogo
        src={LogoImage}
        alt="Off-white Swan Logo"
        style={{
          width: `${size}px`,
        }}
      />
    </HeaderStyled>
  );
};
