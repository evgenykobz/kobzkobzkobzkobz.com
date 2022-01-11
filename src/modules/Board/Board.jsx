import React, {
  useCallback, useContext, useEffect, useMemo,
} from 'react';

import { ThemeContext } from 'styled-components';

import { InteractionContext, ScrollContext } from 'src/core/UserMotion';

import { BoardStyled } from './Board.styled';
import { PictureFrame } from './components/PictureFrame';

export const BoardModule = () => {
  const { entries } = useContext(InteractionContext);
  const themeContext = useContext(ThemeContext);
  const { setScrollableElement } = useContext(ScrollContext);

  // We set Body element to a blocked state so we can be sure
  // there are no double scrolls when we scroll our 100vh container
  useEffect(() => {
    const { blockScreen, setBlockScreen } = themeContext;

    if (blockScreen) {
      return;
    }

    setBlockScreen(true);

    return () => setBlockScreen(false);
  }, [themeContext]);

  // We use Board Ref to set a new scrollable container
  // so Header can behave normally
  const boardCallback = useCallback((node) => {
    if (!node) {
      return;
    }

    setScrollableElement(node);
  }, [setScrollableElement]);

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
    <BoardStyled ref={boardCallback}>
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
