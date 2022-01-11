import { createContext } from 'react';

export const INTERACTION_CONTEXT_DEFAULT_VALUE = {
  observer: null,
  entries: [],
};

/**
 * @name InteractionContext
 * Interaction Observer Context
 */
export const InteractionContext = createContext(INTERACTION_CONTEXT_DEFAULT_VALUE);
