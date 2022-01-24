import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

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
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>

  </BrowserRouter>
);
