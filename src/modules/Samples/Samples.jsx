import React from 'react';

import {
  Navigate, Route, Routes, Outlet,
} from 'react-router-dom';

import { PageWrapper, StoriesWrapper } from 'src/components';

import { SampleWrapper } from './components';
import {
  OverviewPage, TracesSamplePage, StudioSamplePage, AfternoonBeamsSamplePage,
} from './views';

export const SamplesModule = () => (
  <Routes>
    <Route element={<PageWrapper><Outlet /></PageWrapper>}>
      <Route index element={<OverviewPage />} />
    </Route>

    <Route element={<SampleWrapper />}>
      <Route
        path="story/*"
        element={(
          <StoriesWrapper routesConfig={[{
            path: 'EK2108S1',
            element: <TracesSamplePage />,
          }, {
            path: 'EK2111S2',
            element: <StudioSamplePage />,
          }, {
            path: 'EK2201S3',
            element: <AfternoonBeamsSamplePage />,
          }]}
          />
        )}
      />
    </Route>

    <Route path="*" element={<Navigate to="/samples" />} />
  </Routes>
);
