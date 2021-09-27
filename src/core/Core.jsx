import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { Header, Menu, Footer } from 'components';

import routes from './routes';

export const Core = () => (
  <BrowserRouter>
    <Header />

    <Menu />

    <Switch>
      {routes.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          component={component}
          exact
        />
      ))}
    </Switch>

    <Footer />
  </BrowserRouter>
);
