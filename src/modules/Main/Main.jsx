import React, { useContext } from 'react';

import { HeaderContext } from 'src/core/App/components';

import { Intro } from './components/Intro';
import { MainStyled } from './Main.styled';

export const MainModule = () => {
  const { size } = useContext(HeaderContext);

  return (
    <MainStyled style={{ paddingTop: `${size}px` }}>
      <Intro />
    </MainStyled>
  );
};
