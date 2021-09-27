import React from 'react';

import { textBlocks } from './Intro.constants';
import {
  SectionStyled, Text, Sentence, Paragraph, Image,
} from './Intro.styled';

export const Intro = () => (
  <SectionStyled>
    <Text>
      <Paragraph>
        <Sentence>{textBlocks.sentence1}</Sentence>
        <Sentence>{textBlocks.sentence2}</Sentence>
        <Sentence>{textBlocks.sentence3}</Sentence>
      </Paragraph>

      <Paragraph>
        <Sentence>{textBlocks.sentence4}</Sentence>
        <Sentence>{textBlocks.sentence5}</Sentence>
        <Sentence>{textBlocks.sentence6}</Sentence>
      </Paragraph>

      <Paragraph>
        <Sentence>{textBlocks.sentence7}</Sentence>
        <Sentence>{textBlocks.sentence8}</Sentence>
        <Sentence>{textBlocks.sentence9}</Sentence>
      </Paragraph>

      <Paragraph>
        <Sentence>{textBlocks.sentence10}</Sentence>
        <Sentence>{textBlocks.sentence11}</Sentence>
        <Sentence>{textBlocks.sentence12}</Sentence>
      </Paragraph>
    </Text>

    <Image />
  </SectionStyled>
);
