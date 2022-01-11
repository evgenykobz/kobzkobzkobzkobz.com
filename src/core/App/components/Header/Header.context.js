import { createContext } from 'react';

import { INITIAL_WIDTH } from './Header.constants';

export const HEADER_CONTEXT_DEFAULT_VALUE = {
  size: INITIAL_WIDTH,
  setSize: () => {},
};

/**
 * @name HeaderContext
 * Header Context
 */
export const HeaderContext = createContext(HEADER_CONTEXT_DEFAULT_VALUE);
