import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { ScrollContext, SCROLL_CONTEXT_DEFAULT_VALUE } from './Scroll.context';

/**
 * @function ScrollProvider
 * @param {*} children Any rendered content
 */
export const ScrollProvider = ({ children }) => {
  // Scroll State. By default scroll value equals to 0
  const [scrollContext, setScrollContext] = useState(SCROLL_CONTEXT_DEFAULT_VALUE);
  const location = useLocation();

  // Function is invoked on each 'scroll' event
  const handleScroll = () => window.requestAnimationFrame(() => setScrollContext(window.scrollY));

  // Effect runs on every change made to scrollableElement e.g. if one of
  // children containers has decided to recalc the scroll on-demand
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollContext(SCROLL_CONTEXT_DEFAULT_VALUE);
  }, [location.pathname]);

  return <ScrollContext.Provider value={scrollContext}>{children}</ScrollContext.Provider>;
};
