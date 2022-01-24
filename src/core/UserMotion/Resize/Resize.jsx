import React, { useEffect, useState } from 'react';

import { breakpointRules } from 'src/constants';

import { ResizeContext, RESIZE_CONTEXT_DEFAULT_VALUE } from './Resize.context';

/**
 * @function ResizeProvider
 * @param {*} children Any rendered content
 */
export const ResizeProvider = ({ children }) => {
  const [resizeContext, setResizeContext] = useState(RESIZE_CONTEXT_DEFAULT_VALUE);
  const [resizeTimer, setResizeTimer] = useState(null);

  const handleResize = ({ target }) => {
    const deviceWidth = target.innerWidth;
    const deviceHeight = target.innerHeight;

    const deviceType = {
      mobile: deviceWidth < breakpointRules.tablet,
      tablet: deviceWidth >= breakpointRules.tablet && deviceWidth < breakpointRules.laptop,
      laptop: deviceWidth >= breakpointRules.laptop && deviceWidth < breakpointRules.desktop,
      desktop: deviceWidth >= breakpointRules.desktop,
    };

    setResizeContext({
      ...resizeContext,
      ...deviceType,
      width: deviceWidth,
      height: deviceHeight,
    });
  };

  // We throttle execution of calc-heavy resize function
  const throttledEventHandler = (event) => {
    if (resizeTimer) {
      return;
    }

    const timerId = setTimeout(() => {
      handleResize(event);
      setResizeTimer(null);
    }, 250);

    setResizeTimer(timerId);
  };

  useEffect(() => {
    window.addEventListener('resize', throttledEventHandler);

    handleResize({ target: window });

    return () => window.removeEventListener('resize', throttledEventHandler);
  }, []);

  return (
    <ResizeContext.Provider value={resizeContext}>
      {children}
    </ResizeContext.Provider>
  );
};
