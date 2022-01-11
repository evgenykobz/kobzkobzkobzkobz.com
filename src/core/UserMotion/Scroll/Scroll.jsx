import React, { useEffect, useMemo, useState } from 'react';

import { ScrollContext, SCROLL_CONTEXT_DEFAULT_VALUE } from './Scroll.context';

/**
 * @function ScrollProvider
 * @param {*} children Any rendered content
 */
export const ScrollProvider = ({ children }) => {
  // Ref to store Scrollable Element (can be reset to another DOM-element or Window)
  const [scrollableElement, setScrollableElement] = useState();

  // Scroll State. By default scroll value equals to 0
  const [scroll, setScroll] = useState(SCROLL_CONTEXT_DEFAULT_VALUE.scroll);

  const scrollContext = useMemo(() => ({
    scroll,
    setScrollableElement,
  }), [scroll, setScrollableElement]);

  // Function is invoked on each 'scroll' event
  const handleScroll = () => {
    if (!scrollableElement) {
      return;
    }

    // (window has scrollY, any other DOM element has scrollTop)
    const scrollValue = scrollableElement.scrollY || scrollableElement.scrollTop;

    if (!scrollValue) {
      return;
    }

    window.requestAnimationFrame(() => setScroll(scrollValue));
  };

  // Effect runs on every change made to scrollableElement e.g. if one of
  // children containers has decided to recalc the scroll on-demand
  useEffect(() => {
    if (!scrollableElement) {
      setScrollableElement(window);
      return;
    }

    scrollableElement.addEventListener('scroll', handleScroll);

    return () => scrollableElement.removeEventListener('scroll', handleScroll);
  }, [scrollableElement]);

  return <ScrollContext.Provider value={scrollContext}>{children}</ScrollContext.Provider>;
};
