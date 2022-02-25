import React, {
  forwardRef, useCallback, useState, useContext,
} from 'react';

import { useOutletContext } from 'react-router-dom';

import { ResizeContext } from 'src/core/UserMotion/Resize/Resize.context';

import {
  Canvas, Content, Title, Subtitle,
  DescriptionWrapper, ContentContainer,
  ContentWrapperStyled, ContentHeader, BackButton,
  TextWrapper,
} from './ContentWrapper.styled';

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

              <BackButton to="../">
                Get back
              </BackButton>
            </DescriptionWrapper>
          </Content>
        </ContentContainer>
      )}
    </ContentWrapperStyled>
  );
});
