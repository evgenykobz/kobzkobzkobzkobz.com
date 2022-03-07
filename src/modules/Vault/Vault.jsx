import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { FirstDayInGhostValleyPage } from './views';

export const VaultModule = () => (
  <Routes>
    <Route path="first-day-in-ghost-valley" element={<FirstDayInGhostValleyPage />} />
    <Route path="*" element={<Navigate to="first-day-in-ghost-valley" />} />
  </Routes>
);
