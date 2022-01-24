import React, {
  useCallback, useContext,
} from 'react';

import { IntersectionContext } from 'src/core/UserMotion';

import { PictureFrameStyled, FrameImage, FrameCaption } from './PictureFrame.styled';

export const PictureFrame = ({
  source, alt, caption, active,
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
      <FrameImage src={source} alt={alt} />
      <FrameCaption style={{ opacity: captionOpacity }}>
        Picture Frame Caption
        {caption}
      </FrameCaption>
    </PictureFrameStyled>
  );
};
