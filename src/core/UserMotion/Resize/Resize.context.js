import { createContext } from 'react';

export const RESIZE_CONTEXT_DEFAULT_VALUE = {
  mobile: true,
  tablet: false,
  laptop: false,
  desktop: false,
  width: 0,
  height: 0,
};

/**
 * @name ResizeContext
 * Context with data about current window dimensions and device type
 */
export const ResizeContext = createContext(RESIZE_CONTEXT_DEFAULT_VALUE);
