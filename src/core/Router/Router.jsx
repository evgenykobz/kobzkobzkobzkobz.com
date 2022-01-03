import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { BoardModule } from 'src/modules';

import { App } from '../App';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={<App />}
      >
        <Route path="/board" element={<BoardModule />} />
      </Route>
    </Routes>

  </BrowserRouter>
);
