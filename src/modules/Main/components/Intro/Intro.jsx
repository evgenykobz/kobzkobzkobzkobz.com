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
      </Paragraph>

      <Paragraph>
        <Sentence>{textBlocks.sentence6}</Sentence>
        <Sentence>{textBlocks.sentence7}</Sentence>
      </Paragraph>
    </Text>

    <Image />
  </SectionStyled>
);
