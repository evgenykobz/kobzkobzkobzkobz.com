import React, { useEffect, useState } from 'react';

import LogoImage from 'src/assets/images/logo.png';
import { useScroll } from 'src/modules';
import { easeOutCubic, interpolate } from 'src/utils/math';

import { HeaderStyled, HeaderLogo, HeaderBackground } from './Header.styled';

const INITIAL_WIDTH = 200;
const TARGET_WIDTH = 100;
const TARGET_SCROLL = 100;
const INITIAL_OPACITY = 0;
const TARGET_OPACITY = 0.75;

export const Header = () => {
  const scroll = useScroll();
  const [logoWidth, setLogoWidth] = useState(`${INITIAL_WIDTH}px`);
  const [headerOpacity, setOpacity] = useState(INITIAL_OPACITY);

  useEffect(() => {
    // Do not update width if scroll is NaN
    if (Number.isNaN(scroll)) {
      return;
    }

    const width = interpolate(INITIAL_WIDTH, TARGET_WIDTH, easeOutCubic(scroll / TARGET_SCROLL));
    const opacity = interpolate(
      INITIAL_OPACITY, TARGET_OPACITY, easeOutCubic(scroll / TARGET_SCROLL),
    );

    // If width reached either MIN or MAX value, stick to it
    const reachedTarget = width <= TARGET_WIDTH;
    const reachedInitial = width >= INITIAL_WIDTH;

    if (reachedTarget) {
      setLogoWidth(`${TARGET_WIDTH}px`);
      setOpacity(TARGET_OPACITY);
      return;
    }

    if (reachedInitial) {
      setLogoWidth(`${INITIAL_WIDTH}px`);
      setOpacity(INITIAL_OPACITY);
      return;
    }

    setLogoWidth(`${width}px`);
    setOpacity(opacity);
  }, [scroll]);

  return (
    <HeaderStyled>
      <HeaderBackground style={{ opacity: headerOpacity }} />
      <HeaderLogo
        src={LogoImage}
        alt="Off-white Swan Logo"
        style={{
          width: logoWidth,
        }}
      />
    </HeaderStyled>
  );
};
