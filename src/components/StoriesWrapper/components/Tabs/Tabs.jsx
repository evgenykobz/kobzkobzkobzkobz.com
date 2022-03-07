/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Tab } from './components';
import { TabsStyled } from './Tabs.styled';

export const Tabs = ({ activeTab, tabsCount }) => (
  <TabsStyled>
    {Array(tabsCount).fill('').map((item, index) => <Tab key={index} active={index === activeTab} />)}
  </TabsStyled>
);
