import React, {
  useContext, useEffect, useMemo,
} from 'react';

import { ThemeContext } from 'styled-components';

import { HeaderContext } from 'src/core/App/components';
import { FILL_VARIANTS } from 'src/core/App/components/Header/Header.constants';
import { IntersectionContext } from 'src/core/UserMotion';

import { PictureFrame } from './components';
import { picturesList } from './Pictures.constants';
import { BoardStyled } from './Pictures.styled';

export const PicturesModule = () => {
  const { entries } = useContext(IntersectionContext);
  const {
    variant, setVariant, mini, setMini,
  } = useContext(HeaderContext);
  const { setBlockScreen, blockScreen } = useContext(ThemeContext);

  // (may be deleted later) We set a black variant of the Header
  // specifically for that module
  useEffect(() => {
    setVariant(FILL_VARIANTS.black);
    setMini(true);

    return () => {
      setVariant(FILL_VARIANTS.default);
      setMini(false);
    };
  }, [variant, mini]);

  // We set Body element to a blocked state so we can be sure
  // there are no double scrolls when we scroll our 100vh container
  useEffect(() => {
    setBlockScreen(true);

    return () => {
      setBlockScreen(false);
    };
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
          acc = keyAttr;
        }
      }

      return acc;
    }, null);

    return targetEntry;
  }, [entries]);

  return (
    <BoardStyled>
      {picturesList.map(({ caption, Frame }) => (
        <PictureFrame
          caption={caption}
          Frame={Frame}
          key={caption}
          active={activePictureFrame === caption}
        />
      ))}
    </BoardStyled>
  );
};
