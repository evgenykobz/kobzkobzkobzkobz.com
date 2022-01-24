import { createContext } from 'react';

export const HEADER_CONTEXT_DEFAULT_VALUE = {
  variant: null,
  setVariant: () => {},
  mini: false,
};

/**
 * @name HeaderContext
 * Header Context
 */
export const HeaderContext = createContext(HEADER_CONTEXT_DEFAULT_VALUE);
