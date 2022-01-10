import React from 'react';

import { useHeaderSize } from 'src/hooks';

import { Intro } from './components/Intro';
import { MainStyled } from './Main.styled';

export const MainModule = () => {
  const { size } = useHeaderSize();

  return (
    <MainStyled style={{ paddingTop: `${size}px` }}>
      <Intro />
    </MainStyled>
  );
};
