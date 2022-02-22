import React from 'react';

import {
  Navigate,
  Route, Routes,
} from 'react-router-dom';

import { SampleWrapper } from './components';
import { OverviewPage, TracesSamplePage } from './views';

export const SamplesModule = () => (
  <Routes>
    <Route index element={<OverviewPage />} />

    <Route element={<SampleWrapper />}>
      <Route path="EK2108S1" element={<TracesSamplePage />} />
    </Route>

    <Route path="*" element={<Navigate to="/samples" />} />
  </Routes>
);
