import React, { useEffect, useState, createContext } from 'react';

import LogoImage from 'src/assets/images/logo.png';
import { useHeaderSize, useScroll } from 'src/hooks';
import { easeOutCubic, interpolate } from 'src/utils/math';

import {
  HeaderStyled, HeaderLogo, HeaderBackground,
} from './Header.styled';

const INITIAL_WIDTH = 150;
const TARGET_WIDTH = 100;
const TARGET_SCROLL = 100;
const INITIAL_OPACITY = 0;
const TARGET_OPACITY = 0.75;

export const HEADER_CONTEXT_DEFAULT_VALUE = {
  size: INITIAL_WIDTH,
  setSize: () => {},
};

/**
 * @name HeaderContext
 * Header Context
 */
export const HeaderContext = createContext(HEADER_CONTEXT_DEFAULT_VALUE);

/**
 * @function Header
 * Smart Header Component that sets its opacity and size using scroll data
 * It also saves header size data to Header Context via useHeaderSize hook
 */
export const Header = () => {
  const { scroll } = useScroll();
  const { size, setSize } = useHeaderSize();
  const [headerOpacity, setOpacity] = useState(INITIAL_OPACITY);

  useEffect(() => {
    // Do not update width if scroll is NaN
    if (Number.isNaN(scroll)) {
      return;
    }

    const width = interpolate(INITIAL_WIDTH, TARGET_WIDTH, easeOutCubic(scroll / TARGET_SCROLL));
    const opacity = interpolate(INITIAL_OPACITY, TARGET_OPACITY, easeOutCubic(scroll / TARGET_SCROLL));

    // If width reached either MIN or MAX value, stick to it
    const reachedTarget = width <= TARGET_WIDTH;
    const reachedInitial = width >= INITIAL_WIDTH;

    if (reachedTarget) {
      setSize(TARGET_WIDTH);
      setOpacity(TARGET_OPACITY);
      return;
    }

    if (reachedInitial) {
      setSize(INITIAL_WIDTH);
      setOpacity(INITIAL_OPACITY);
      return;
    }

    if (!Number.isNaN(width)) {
      setSize(width);
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
