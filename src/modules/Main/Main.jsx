import React, { useContext, useEffect } from 'react';

import { FILL_VARIANTS, HeaderContext } from 'src/core/App/components';

import { Intro } from './components/Intro';
import { MainStyled } from './Main.styled';

export const MainModule = () => {
  const { setVariant, variant } = useContext(HeaderContext);

  useEffect(() => setVariant(FILL_VARIANTS.default), [variant]);

  return (
    <MainStyled>
      <Intro />
    </MainStyled>
  );
};
