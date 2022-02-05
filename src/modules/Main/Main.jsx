import React, { useContext, useEffect } from 'react';

import { FILL_VARIANTS, HeaderContext } from 'src/core/App/components';

import { Statement, Verse } from './components';
import { ButtonWrapper, MainStyled, SectionButton } from './Main.styled';

export const MainModule = () => {
  const { setVariant, variant } = useContext(HeaderContext);

  useEffect(() => setVariant(FILL_VARIANTS.default), [variant]);

  return (
    <MainStyled>
      <Verse />

      <Statement />

      <ButtonWrapper>
        <SectionButton>View Samples</SectionButton>
      </ButtonWrapper>
    </MainStyled>
  );
};
