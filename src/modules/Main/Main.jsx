import React, { useContext, useEffect } from 'react';

import { FILL_VARIANTS, HeaderContext } from 'src/core/App/components';

import { Statement, Verse } from './components';

export const MainModule = () => {
  const { setVariant, variant } = useContext(HeaderContext);

  useEffect(() => setVariant(FILL_VARIANTS.default), [variant]);

  return (
    <>
      <Verse />

      <Statement />
    </>
  );
};
