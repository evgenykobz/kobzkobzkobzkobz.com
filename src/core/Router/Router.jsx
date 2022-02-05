import React from 'react';

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import {
  BoardModule, MainModule, VaultModule, SamplesModule,
} from 'src/modules';

export const Router = () => (
  <Routes>
    <Route
      path="/"
    >
      <Route index element={<MainModule />} />
      <Route path="board/*" element={<BoardModule />} />
      <Route path="vault/*" element={<VaultModule />} />
      <Route path="samples/*" element={<SamplesModule />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
