import React, { useCallback, useMemo } from 'react';

import { useInteraction, useScroll } from 'src/hooks';

import { BoardStyled } from './Board.styled';
import { PictureFrame } from './components/PictureFrame';

export const BoardModule = () => {
  const { entries } = useInteraction();
  const { setScrollableContainer } = useScroll();

  // We use Board Ref to set a new scrollable container
  // so Header can behave normally
  const boardRef = useCallback((node) => {
    if (!node) {
      return;
    }

    setScrollableContainer(node);
  }, [setScrollableContainer]);

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
    <BoardStyled ref={boardRef}>
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
