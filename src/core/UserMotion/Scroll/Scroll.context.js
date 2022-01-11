import { createContext } from 'react';

export const SCROLL_CONTEXT_DEFAULT_VALUE = {
  scroll: 0,
  setScrollableElement: () => {},
};

/**
 * @name ScrollContext
 * Scroll Context
 */
export const ScrollContext = createContext(SCROLL_CONTEXT_DEFAULT_VALUE);
