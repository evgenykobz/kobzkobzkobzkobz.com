import React, { useEffect, useMemo, useState } from 'react';

import {
  useRoutes, useNavigate, useParams,
} from 'react-router-dom';

import { Tabs } from './components';
import {
  StoriesWrapperStyled, CloseButton, LeftNavButton, RightNavButton, CloseIcon,
} from './StoriesWrapper.styled';

/**
 * @function StoriesWrapper
 * Component organizes routes in a way so
 * they start to look like Snapchat "Stories"
 */
export const StoriesWrapper = ({ routesConfig }) => {
  const navigate = useNavigate();
  const params = useParams();
  const routes = useRoutes(routesConfig);

  const [activeTab, setActiveTab] = useState();

  const activeRoute = useMemo(() => {
    if (typeof activeTab !== 'number') {
      return null;
    }

    return routesConfig[activeTab];
  }, [routesConfig, activeTab]);

  const handleNavBack = () => navigate('../');

  // Sets up a custom activeTab value
  useEffect(() => {
    try {
      const paramsValue = Object.values(params);

      const targetRouteIndex = routesConfig.findIndex(({ path }) => path.includes(paramsValue));

      if (targetRouteIndex === -1) {
        throw new Error('Param value is provided, but is not found among Routes');
      }

      setActiveTab(targetRouteIndex);
    } catch ({ message }) {
      // eslint-disable-next-line no-console
      console.info('Could assign activeTab a custom value due to an error: ', message);
      setActiveTab(0);
    }
  }, []);

  // Redirects to a corresponding Route if activeRoute has been changed
  useEffect(() => {
    if (!activeRoute) {
      return;
    }

    navigate(activeRoute.path);
  }, [activeRoute]);

  // Binds Escape key to navigating back
  useEffect(() => {
    const handleEscClick = ({ code }) => {
      if (code !== 'Escape') {
        return;
      }

      handleNavBack();
    };

    window.addEventListener('keydown', handleEscClick);

    return () => window.removeEventListener('keydown', handleEscClick);
  }, []);

  return (
    <StoriesWrapperStyled>
      <Tabs activeTab={activeTab} tabsCount={routesConfig.length} />

      <CloseButton onClick={handleNavBack}>
        <CloseIcon />
      </CloseButton>

      <LeftNavButton onClick={() => setActiveTab(activeTab - 1)} active={activeTab !== 0} title="Back" />
      <RightNavButton onClick={() => setActiveTab(activeTab + 1)} active={activeTab !== routesConfig.length - 1} title="Next" />

      {routes}
    </StoriesWrapperStyled>
  );
};
