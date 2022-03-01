import React, {
  useCallback, useContext,
} from 'react';

import { IntersectionContext } from 'src/core/UserMotion';

import { PictureFrameStyled, FrameImage, FrameCaption } from './PictureFrame.styled';

export const PictureFrame = ({
  source, caption, active, Frame,
}) => {
  const interaction = useContext(IntersectionContext);

  const frameRef = useCallback((node) => {
    if (!node) {
      return;
    }

    const { observer } = interaction;

    if (!observer) {
      return;
    }

    observer.observe(node);
  }, [interaction.observer]);

  const captionOpacity = active ? 1 : 0;

  return (
    <PictureFrameStyled ref={frameRef} data-key={caption}>
      {Frame || <FrameImage src={source} alt={caption} />}

      {caption && (
        <FrameCaption style={{ opacity: captionOpacity }}>
          {caption}
        </FrameCaption>
      )}
    </PictureFrameStyled>
  );
};
