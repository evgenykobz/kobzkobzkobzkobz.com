import React, {
  useEffect, useMemo, useState,
} from 'react';

import { useMatch, useNavigate } from 'react-router-dom';

import { easeOutCubic, interpolate } from 'src/utils/math';

import { HeaderLogo } from './components';
import {
  FILL_VARIANTS, INITIAL_OPACITY, INITIAL_SCALE, INITIAL_WIDTH, TARGET_OPACITY, TARGET_SCALE, TARGET_SCROLL,
} from './Header.constants';
import {
  HeaderStyled, HeaderBackground,
} from './Header.styled';

/**
 * @function Header
 * @description Smart Header Component that sets its opacity and size using scroll data.
 * @note Accepts size in props, can trigger "onSizeChange" handler
 */
export const Header = ({
  scroll, variant, mini,
}) => {
  const navigate = useNavigate();
  const matchesMainPage = useMatch('/');

  const [scale, setScale] = useState(INITIAL_SCALE);
  const [opacity, setOpacity] = useState(INITIAL_OPACITY);

  // Background should be visible only if we deal with long scrolled pages
  // e.g. if "mini" setting is set to true and/or variant is not default,
  // then we do not render it
  const shouldRenderBackground = useMemo(() => {
    if (mini) {
      return false;
    }

    return variant === FILL_VARIANTS.default;
  }, [variant, mini]);

  useEffect(() => {
    // For "mini" setting we set scale to target value whereas opacity is reset to initial
    if (mini) {
      setScale(TARGET_SCALE);
      setOpacity(INITIAL_OPACITY);
      return;
    }

    const currScale = interpolate(INITIAL_SCALE, TARGET_SCALE, easeOutCubic(scroll / TARGET_SCROLL));
    const currOpacity = interpolate(INITIAL_OPACITY, TARGET_OPACITY, easeOutCubic(scroll / TARGET_SCROLL));

    // If scale has reached either MIN or MAX value, stick to it
    const reachedTarget = currScale <= TARGET_SCALE;
    const reachedInitial = currScale >= INITIAL_SCALE;

    // Scale and opacity cannot be above its target values (same applies to initial values)
    if (reachedTarget) {
      setOpacity(TARGET_OPACITY);
      setScale(TARGET_SCALE);
      return;
    }

    if (reachedInitial) {
      setOpacity(INITIAL_OPACITY);
      setScale(INITIAL_SCALE);
      return;
    }

    setScale(currScale);
    setOpacity(currOpacity);
  }, [scroll, mini]);

  const handleLogoClick = () => {
    if (matchesMainPage) {
      window.scrollTo(0, 0);
      return;
    }

    navigate('/');
  };

  return (
    <HeaderStyled height={INITIAL_WIDTH}>
      <HeaderBackground style={{ opacity: shouldRenderBackground ? opacity : 0 }} />

      <HeaderLogo scale={scale} variant={variant} onClick={handleLogoClick} />
    </HeaderStyled>
  );
};
