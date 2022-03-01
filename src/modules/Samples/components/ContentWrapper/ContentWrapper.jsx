import React, {
  forwardRef, useCallback, useState, useContext,
} from 'react';

import { useOutletContext } from 'react-router-dom';

import { ResizeContext } from 'src/core/UserMotion/Resize/Resize.context';

import {
  Canvas, Content, Title, Subtitle,
  DescriptionWrapper, ContentContainer,
  ContentWrapperStyled, ContentHeader,
  TextWrapper,
} from './ContentWrapper.styled';

/**
 * @function ContentWrapper
 * Component organizes markup logic and forwards
 * Ref so it can be used by Three.js
 */
export const ContentWrapper = forwardRef(({
  title, subtitle, Description,
}, ref) => {
  const { height, width } = useContext(ResizeContext);
  const { showInfo, modelLoaded } = useOutletContext();

  const [headingHeight, setHeadingHeight] = useState();

  const contentHeaderCallbackRef = useCallback((node) => {
    if (!node) {
      return;
    }

    const { height: contentHeaderHeight } = node.getBoundingClientRect();
    setHeadingHeight(contentHeaderHeight);
  }, []);

  return (
    <ContentWrapperStyled modelLoaded={modelLoaded} showInfo={showInfo} height={height} width={width}>
      <Canvas ref={ref} />

      {showInfo && (
        <ContentContainer headingHeight={headingHeight} innerHeight={window.innerHeight} height={height}>
          <Content>
            <ContentHeader ref={contentHeaderCallbackRef}>
              {subtitle && (
                <Subtitle>
                  {subtitle}
                </Subtitle>
              )}

              <Title>
                {title}
              </Title>
            </ContentHeader>

            <DescriptionWrapper>
              <TextWrapper>
                {Description}
              </TextWrapper>
            </DescriptionWrapper>
          </Content>
        </ContentContainer>
      )}
    </ContentWrapperStyled>
  );
});
