import React, { useEffect, useState } from 'react';

import { InteractionContext, INTERACTION_CONTEXT_DEFAULT_VALUE } from './Interaction.context';

/**
 * @function InteractionProvider
 * @param {*} children Any rendered content
 * @param {Element} observableElement Ref containing DOM-Element to be the root of Interaction Observer API
 */
export const InteractionProvider = ({ children, observableElement }) => {
  // Interaction Observer API State
  const [observerContext, setObserverContext] = useState(INTERACTION_CONTEXT_DEFAULT_VALUE);

  // Function is invoked each time there are changes caught up by Interaction API
  const handleInteractionCallback = (entries) => setObserverContext({
    ...observerContext,
    entries,
  });

  // Effect runs on every change made to interactionContainer ref
  // and inits (or disables) Interaction Observer API
  useEffect(() => {
    if (!observableElement || !observableElement.current) {
      return;
    }

    setObserverContext({
      ...observerContext,
      observer: new IntersectionObserver(handleInteractionCallback, {
        root: observableElement.current,
        threshold: 0.5,
      }),
    });

    return () => {
      if (observerContext.observer) {
        observerContext.observer.disconnect();
      }
    };
  }, [observableElement.current]);

  return (
    <InteractionContext.Provider value={observerContext}>
      {children}
    </InteractionContext.Provider>
  );
};
