import React from 'react';

import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { PageWrapper } from 'src/components';
import {
  BoardModule, MainModule, VaultModule, SamplesModule,
} from 'src/modules';

export const Router = () => (
  <Routes>
    <Route
      path="/"
    >
      <Route element={<PageWrapper><Outlet /></PageWrapper>}>
        <Route index element={<MainModule />} />
        <Route path="vault/*" element={<VaultModule />} />
        <Route path="samples/*" element={<SamplesModule />} />
      </Route>
      <Route path="board/*" element={<BoardModule />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
