import { createContext } from 'react';

export const INTERSECTION_CONTEXT_DEFAULT_VALUE = {
  observer: null,
  entries: [],
};

/**
 * @name IntersectionContext
 * Interaction Observer Context
 */
export const IntersectionContext = createContext(INTERSECTION_CONTEXT_DEFAULT_VALUE);
