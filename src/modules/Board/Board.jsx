import React, {
  useContext, useEffect, useMemo,
} from 'react';

import { ThemeContext } from 'styled-components';

import { HeaderContext } from 'src/core/App/components';
import { FILL_VARIANTS } from 'src/core/App/components/Header/Header.constants';
import { IntersectionContext } from 'src/core/UserMotion';

import { BoardStyled } from './Board.styled';
import { PictureFrame } from './components/PictureFrame';

export const BoardModule = () => {
  const { entries } = useContext(IntersectionContext);
  const { variant, setVariant } = useContext(HeaderContext);
  const { setBlockScreen, blockScreen } = useContext(ThemeContext);

  // We also reset scrolling on Body element
  useEffect(
    () => () => setBlockScreen(false),
    [],
  );

  // (may be deleted later) We set a black variant of the Header
  // specifically for that module
  useEffect(() => {
    setVariant(FILL_VARIANTS.black);
  }, [variant]);

  // We set Body element to a blocked state so we can be sure
  // there are no double scrolls when we scroll our 100vh container
  useEffect(() => {
    setBlockScreen(true);
  }, [blockScreen]);

  const activePictureFrame = useMemo(() => {
    if (!entries.length) {
      return;
    }

    const targetEntry = entries.reduce((acc, entry) => {
      const { target, isIntersecting } = entry;

      if (!isIntersecting) {
        return acc;
      }

      if (!acc) {
        const keyAttr = target.getAttribute('data-key');

        if (keyAttr) {
          acc = Number(keyAttr);
        }
      }

      return acc;
    }, null);

    return targetEntry;
  }, [entries]);

  return (
    <BoardStyled>
      {[1, 2, 3].map(key => (
        <PictureFrame
          caption={key}
          key={key}
          active={activePictureFrame === key}
        />
      ))}
    </BoardStyled>
  );
};
