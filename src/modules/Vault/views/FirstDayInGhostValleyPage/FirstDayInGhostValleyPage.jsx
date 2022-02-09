import React from 'react';

import { CollapsedText } from './components';
import {
  BoldText, ItalicText, StyledArtworkImage, FigureWrapper, PaddedFigureCaption,
  TextWrapper, StyledProcessImage, LeftSidedFigure, RightSidedFigure, FigureCaption,
  StyledObjectImage, StyledSignature, Title,
} from './FirstDayInGhostValleyPage.styled';
import DistanceArtworkImage from './images/artwork-from-distance.webp';
import ProcessImage from './images/artwork-process.webp';
import FloatableObjectImage from './images/figure-accented.webp';

export const FirstDayInGhostValleyPage = () => (
  <>
    <FigureWrapper>
      <StyledArtworkImage src={DistanceArtworkImage} alt="Exposition view of the artwork" />
      <PaddedFigureCaption>Exposition view &copy; Photo by E. Sterlyagova, N. Klimenko, A. Matveeva</PaddedFigureCaption>
    </FigureWrapper>

    <TextWrapper>
      <Title>First Day In Ghost Valley</Title>

      <CollapsedText title="Curatorial Text">
        <p>
          A distinctive feature of our time is the awakening of things, a new level of their involvement and influence on the affairs of people.&nbsp;
          Material (and not only) objects lead an active social life, acting like personalities: things are able to communicate, think and make decisions, remember, observe and predict.&nbsp;
          This does not make reality poorer, on the contrary: it is the growing complexity of global networks that allows more and more new things to acquire their own face and voice, experience and identity.&nbsp;
          Each thing feels its surroundings in its own way, sometimes placing itself into the center of The World or
          &nbsp;
          <ItalicText>little world</ItalicText>
          , creates its own space-time in networks of interactions, forces and meanings.&nbsp;
          How many things &#8212; so many forms of the passage of time are found in the arena of (post-) digital modernity, merging into its polyphony.
        </p>

        <p>
          Communication with things comes to replace their instrumentalization and exploitation.&nbsp;
          Communication flows, forms of social connections, cultural identities, immaterial labor &#8212; all spheres of our world, even virtual spaces, are permeated by the influence of things, their force fields.&nbsp;
          The source of these impulses is what Jane Bennet calls
          &nbsp;
          <ItalicText>thing-power</ItalicText>
          .&nbsp;
          Our entire reality is permeated with these weak, sometimes imperceptible signals emanating from activated things.&nbsp;
          Time and space, feelings and dreams, hopes and anxieties, knowledge and conjectures &#8212; almost everything we deal with is mediated by the activity of many technical, cultural, natural, imaginary or conditional objects, their communities and assemblages.
        </p>

        <p>
          Talking about the life and customs of activated things, participants of the exhibition turn to a variety of subjects and contexts.&nbsp;
          Installations, sculptures, videos, performative practices, artistic research &#8212; with their help young artists construct situations and scenarios in which things and materiality manifest themselves as independent, and sometimes unpredictable actors, endowed with their own identities.&nbsp;
          The space of the exposition is divided into several parts devoted to the study of temporality, collective and individual experience of the past, captured by the present and by expectations of the future.&nbsp;
          Each of the works in the exhibition is an experiment with certain material objects, modalities of their presence, character, images or traces in spaces formed by social, biopolitical and aesthetic factors.
        </p>
      </CollapsedText>

      <p>
        Installation immerses the observer in a conflict between human and nature, in the Apocalyptic state where things around them start to dismantle, leaving one alone against the nothingness of their existence.&nbsp;
        Entering the
        &nbsp;
        <ItalicText>Ghost Valley</ItalicText>
        &nbsp;
        &#8212; a mystic space described by Timothy Morton &#8212; the observer loses the ability to find the difference between objects and becomes exposed to the reflections of their ego, and more specifically, to the anthropocentric attitude to Nature.&nbsp;
        Previously described and recorded inside of
        &nbsp;
        <ItalicText>The World Picture</ItalicText>
        , it gets released from human chains the closer the observer approaches this magnificent, vibrating space of objects.&nbsp;
        The question is:&nbsp;
        <ItalicText>Can we refrain from implying that every object is simply our reflection and become more ethic towards them?</ItalicText>
      </p>

      <LeftSidedFigure>
        <StyledProcessImage src={ProcessImage} alt="Me with a brush" />
        <FigureCaption>Tape and wooden stick came in handy</FigureCaption>
      </LeftSidedFigure>

      <p>
        When I was told the exhibition dates, I had roughly two weeks for brainstorming and 3 weeks for the work to be done.&nbsp;
        Since I have been always captivated by the oeuvre of Karl Bryullov and especially by his work called
        &nbsp;
        <BoldText>The Last Day of Pompeii</BoldText>
        , I always wanted to pay homage to it.&nbsp;
        Thanks to the exhibition theme, I got a chance to re-enact this painting and describe the Apocalyptic with a focus on Nature &#8212; quite contrary to what famous painter attempted to depict.
      </p>

      <p>
        I printed out a blurred high resolution reference image on two separate 3 x 2.5 metres paper so it can be used as a background.&nbsp;
        I deliberately decided my brushstrokes to be abstract and geometrically fragmented as if the things are breaking into pieces.&nbsp;
        Constructing solid stretchers for canvases this big and stretching them later on was a real challenge (thanks to my dad who helped me with the assembly).
      </p>

      <p>
        As for the floating objects, their mirror look has been achieved to convey the idea that these objects are imperceptible to human&#39;s mind, their real look and qualities have been lost: all they can see now is their reflection and a shadow meaning this objects have become not only visible, but vibrant and active.&nbsp;
        These
        &nbsp;
        <ItalicText>mirrory</ItalicText>
        &nbsp;
        objects weigh much heavier than they look (approx. 3-5 kilograms each) and are such a pain to carry.
      </p>

      <RightSidedFigure>
        <StyledObjectImage src={FloatableObjectImage} alt="Banana-shaped object" />
        <FigureCaption>A close-up of the object</FigureCaption>
      </RightSidedFigure>

      <p>
        The exhibition
        &nbsp;
        <BoldText>The Time of Things</BoldText>
        &nbsp;
        took place in a grand site of
        &nbsp;
        <BoldText>
          WINZAVOD Centre of Art
        </BoldText>
        &nbsp;
        that used to be the wine cellar long time ago, but was later gentrified.&nbsp;
        So, the site is quite cold and mysteriously gloomy &#8212; the right alchemy for an artwork this size and demeanour.
      </p>

      <StyledSignature>
        June 2021 &copy; Evgeny Kobzev
      </StyledSignature>
    </TextWrapper>
  </>
);
