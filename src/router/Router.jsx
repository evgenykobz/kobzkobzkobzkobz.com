import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Header } from 'components';

export const Router = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
