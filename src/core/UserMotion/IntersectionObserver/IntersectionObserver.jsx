import React, { useCallback, useMemo, useState } from 'react';

import { IntersectionContext, INTERSECTION_CONTEXT_DEFAULT_VALUE } from './IntersectionObserver.context';
import { AppContainer } from './IntersectionObserver.styled';

/**
 * @function IntersectionProvider
 * @param {*} children Any rendered content
 */
export const IntersectionProvider = ({ children }) => {
  // Interaction Observer API State
  const [observer, setObserver] = useState(INTERSECTION_CONTEXT_DEFAULT_VALUE.observer);
  const [entries, setEntries] = useState(INTERSECTION_CONTEXT_DEFAULT_VALUE.entries);

  const observerContext = useMemo(() => ({
    observer,
    entries,
  }), [observer, entries]);

  // Function is invoked each time there are changes caught up by Interaction API
  const handleInteractionCallback = (entriesArray) => setEntries(entriesArray);

  // Effect runs on every change made to interactionContainer ref
  // and inits (or disables) Interaction Observer API
  const appContainerCallback = useCallback((root) => {
    if (!root) {
      return;
    }

    const instance = new IntersectionObserver(handleInteractionCallback, {
      root,
      threshold: 0.5,
    });

    setObserver(instance);
  }, []);

  return (
    <AppContainer ref={appContainerCallback}>
      <IntersectionContext.Provider value={observerContext}>
        {children}
      </IntersectionContext.Provider>
    </AppContainer>
  );
};
