import React from 'react';

import AtTheClubImage from './images/at-the-club_80x120.jpg';
import LedaAndTheSwanImage from './images/leda-and-the-swan_80x90.jpg';
import TracesSampleImage from './images/sample-1_80x120.jpg';
import AfternoonBeamsImage from './images/sample-3_70x80.jpg';
import UntitleTwoImage from './images/untitled-5_100x120.jpg';
import UntitledThreeImage from './images/untitled-6_80x60.jpg';
import UntitledOneImage from './images/untitled_70x90.jpg';
import { AtTheClubFrame, CenteredFrame } from './Pictures.styled';

export const picturesList = [{
  caption: 'leda and the swan, 80x90cm, 2022',
  Frame: <CenteredFrame src={LedaAndTheSwanImage} alt="Leda And The Swan" />,
}, {
  caption: 'at the club, 80x120cm, 2021',
  Frame: <AtTheClubFrame src={AtTheClubImage} alt="At The Club" />,
}, {
  caption: 'traces, 80x120cm, 2021',
  Frame: <CenteredFrame src={TracesSampleImage} alt="Traces Sample" />,
}, {
  caption: 'afternoon beams, 70x80cm, 2022',
  Frame: <CenteredFrame src={AfternoonBeamsImage} alt="Afternoon Beams Sample" />,
}, {
  caption: 'untitled, 70x90cm, 2021',
  Frame: <CenteredFrame src={UntitledOneImage} alt="Untitled" />,
}, {
  caption: 'untitled, 100x120cm, 2021',
  Frame: <CenteredFrame src={UntitleTwoImage} alt="Untitled" />,
}, {
  caption: 'untitled, 80x60cm, 2021',
  Frame: <CenteredFrame src={UntitledThreeImage} alt="Untitled" />,
}];
