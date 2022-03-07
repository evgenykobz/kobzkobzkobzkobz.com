import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';

import { ScrollContext } from '../../../UserMotion/Scroll/Scroll.context';
import { Header } from './Header';
import { FILL_VARIANTS } from './Header.constants';
import { HeaderContext } from './Header.context';

/**
 * @function FrankensteinHeadProvider
 * @description Every piece-of-a-garbage web app should have at least one head.
 * Mine has Frankenstein's one. (mic dropped)
 * @param {*} children T H E B O D Y
 */
export const FrankensteinHeadProvider = ({ children: body }) => {
  const scroll = useContext(ScrollContext);

  const [variant, setVariant] = useState();
  const [mini, setMini] = useState();

  // Header Context state. By default header size equals to a constant value
  const headerContext = useMemo(() => ({
    variant,
    mini,
    setVariant,
    setMini,
  }), [variant, mini]);

  // Smooth out the logo to look cooler!
  useEffect(() => setTimeout(() => setVariant(FILL_VARIANTS.default), 75), []);

  return (
    <HeaderContext.Provider value={headerContext}>
      <Header scroll={scroll} variant={variant} mini={mini} />

      {body}
    </HeaderContext.Provider>
  );
};
