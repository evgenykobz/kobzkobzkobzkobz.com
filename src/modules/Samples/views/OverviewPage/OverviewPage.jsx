import React from 'react';

import { BoldText, ItalicText } from 'src/constants/styles';

import { OverviewStyled, Paragraph, WatchButton } from './OverviewPage.styled';

export const OverviewPage = () => (
  <OverviewStyled>
    <WatchButton to="story">
      Watch Samples
    </WatchButton>

    <Paragraph>
      I see life as a memory-making process.&nbsp;
      However, with the rise of social networks and cloud computing this process took an unexpected twist and became public.&nbsp;
      The society had transitioned from saving a piece of memorabilia for oneself to exposing it to the public.&nbsp;
      Nowadays every piece of media that is shared across the web merely belongs to some shifty corp.
    </Paragraph>

    <Paragraph>
      Medium-wise,
      &nbsp;
      <BoldText>Photography</BoldText>
      &nbsp;
      and
      &nbsp;
      <BoldText>Text</BoldText>
      &nbsp;
      have seriously deteriorated in terms of being a valuable archive source.&nbsp;
      Being withdrawn from the human supervision to the perpetuity of computational power, human can neither take care of them (dust and repair, protect) nor harm (lose, tear or burn).&nbsp;
      I believe this kind of intimacy to be of crucial importance when we refer to photos and text as archive pieces.
    </Paragraph>

    <Paragraph>
      Therefore, I question myself:
      &nbsp;
      <ItalicText>What is the medium that embodies both the nostalgic and archival parts?</ItalicText>
      &nbsp;
      My take is that digital reconstruction may become the one &#8212;
      &nbsp;
      <BoldText>sample</BoldText>
      &nbsp;
      is the way I call it.&nbsp;
      Sample can be taken care of by the creator and a group of people with provided access; it also embraces the share-ability &#8212; if done right (not to be confused with NFTs) &#8212; without transferring rights to the 3rd party.
    </Paragraph>

    <Paragraph>
      By virtue of these perks sample can be considered a sign.&nbsp;
      Taking a photo of it results in a reference, in other words, a picture, whereas sample is a self-sufficient digital image.
    </Paragraph>

    <Paragraph>
      Samples reconstruct my memories, although they are assembled with an idea of overcoming qualities of
      &nbsp;
      <ItalicText>archive-ness</ItalicText>
      &nbsp;
      and
      &nbsp;
      <ItalicText>memorabilia-ness</ItalicText>
      .&nbsp;
      With each work I attempt not to portray a man-made system of objects that is typically present to our perception, but instead to capture the hidden vitality beyond that system, namely an auratic and uncanny world of not-human: the realm of objects in all their grace.
    </Paragraph>
  </OverviewStyled>
);
