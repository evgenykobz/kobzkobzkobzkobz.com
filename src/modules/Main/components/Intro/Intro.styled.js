import styled from 'styled-components';

import { blackFontColour } from 'src/constants';

export const SectionStyled = styled.section``;

export const Text = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
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
