import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { NotFound } from 'src/components/NotFound';
import { BoardModule, MainModule } from 'src/modules';

import { App } from '../App';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route index element={<MainModule />} />
        <Route path="board/*" element={<BoardModule />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  </BrowserRouter>
);
