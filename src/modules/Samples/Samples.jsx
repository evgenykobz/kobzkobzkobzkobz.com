import React from 'react';

import {
  Navigate,
  Route, Routes,
} from 'react-router-dom';

import { OverviewPage } from './views';

export const SamplesModule = () => (
  <Routes>
    <Route index element={<OverviewPage />} />
    <Route path="a" element={<div>A</div>} />
    <Route path="*" element={<Navigate to="/samples" />} />
  </Routes>
);
