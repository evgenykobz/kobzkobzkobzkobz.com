import React from 'react';

import {
  StatementStyled, Paragraph, TextButton,
} from './Statement.styled';

export const Statement = () => (
  <StatementStyled>
    <Paragraph>
      My name is Evgeny Kobzev, I am an ICA Moscow graduate, I live in Moscow, Russia.&nbsp;
      Working on the verge of art and tech, I am the closest to seeing the drawbacks of where the human is headed to as a species.&nbsp;
      I strive to expose concealed nature of objects, to liberate them from human&#39;s dogma.
    </Paragraph>

    <Paragraph>
      Project
      &nbsp;
      <TextButton to="vault/first-day-in-ghost-valley">First Day In Ghost Valley</TextButton>
      &nbsp;
      has been pivotal to me as it helped establish the tone of future artworks.&nbsp;
      It explores the notion of Apocalypse through the conflict between ephemeral and perpetual, between human and nature.
    </Paragraph>

    <Paragraph>
      My ongoing project
      &nbsp;
      <TextButton to="samples">Samples</TextButton>
      &nbsp;
      studies the condition of nostalgia in the digital era.&nbsp;
      It embodies my attitude to the concept of personal in the post-capitalist digital society.
    </Paragraph>
  </StatementStyled>
);
