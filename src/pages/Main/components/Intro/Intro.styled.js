import styled from 'styled-components';

import { defaultPadding, blackFontColour } from 'constants';

export const SectionStyled = styled.section``;

export const Text = styled.div`
  padding-left: ${defaultPadding}px;
  padding-right: ${defaultPadding}px;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Sentence = styled.span`
  color: ${blackFontColour()};

  &:not(last-child) {
    margin-right: 5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  background-color: gray;
`;
