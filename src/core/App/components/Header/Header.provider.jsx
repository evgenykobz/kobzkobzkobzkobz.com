import React, { useContext, useMemo, useState } from 'react';

import { ScrollContext } from '../../../UserMotion/Scroll/Scroll.context';
import { Header } from './Header';
import { HeaderContext, HEADER_CONTEXT_DEFAULT_VALUE } from './Header.context';
/**
 * @function FrankensteinHeadProvider
 * @description Every piece-of-a-garbage web app should have at least one head.
 * Mine has Frankenstein's one. (mic dropped)
 * @param {*} children T H E B O D Y
 */
export const FrankensteinHeadProvider = ({ children: body }) => {
  const [headerSize, setHeaderSize] = useState(HEADER_CONTEXT_DEFAULT_VALUE.size);
  const { scroll } = useContext(ScrollContext);

  // Header Context state. By default header size equals to a constant value
  const headerContext = useMemo(() => ({
    size: headerSize,
    setSize: setHeaderSize,
  }), [headerSize]);

  return (
    <HeaderContext.Provider value={headerContext}>
      <Header scroll={scroll} size={headerSize} onSizeChange={setHeaderSize} />

      {body}
    </HeaderContext.Provider>
  );
};
