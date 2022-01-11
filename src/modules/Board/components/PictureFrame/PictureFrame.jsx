import React, { useContext, useEffect, useRef } from 'react';

import { InteractionContext } from 'src/core/UserMotion';

import { PictureFrameStyled, FrameImage, FrameCaption } from './PictureFrame.styled';

export const PictureFrame = ({
  source, alt, caption, active,
}) => {
  const interaction = useContext(InteractionContext);
  const frameRef = useRef();

  useEffect(() => {
    if (!frameRef.current) {
      return;
    }

    const { observer } = interaction;

    if (!observer) {
      return;
    }

    observer.observe(frameRef.current);
  }, [frameRef.current, interaction]);

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
