import React, {
  createContext, useCallback, useEffect, useState,
} from 'react';

import { InteractionContainer } from './Interaction.styled';

/**
 * @name ScrollContext
 * Scroll Context
 */
export const ScrollContext = createContext();

export const INTERACTION_CONTEXT_DEFAULT_VALUE = {
  observer: null,
  entries: [],
};

/**
 * @name InteractionContext
 * Interaction Observer Context
 */
export const InteractionContext = createContext(INTERACTION_CONTEXT_DEFAULT_VALUE);

export const InteractionProvider = ({ children }) => {
  const [observerContext, setObserverContext] = useState(INTERACTION_CONTEXT_DEFAULT_VALUE);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => window.requestAnimationFrame(() => setScroll(window.scrollY));

  const handleInteractionCallback = (entries) => {
    setObserverContext({ ...observerContext, entries });
  };

  const interactionContainerRef = useCallback((root) => {
    if (!root) {
      return;
    }

    setObserverContext({
      ...observerContext,
      observer: new IntersectionObserver(handleInteractionCallback, {
        root,
        threshold: 0.5,
      }),
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (observerContext.observer) {
        observerContext.observer.disconnect();
      }
    };
  }, []);

  return (
    <InteractionContext.Provider value={observerContext}>
      <ScrollContext.Provider value={scroll}>
        <InteractionContainer ref={interactionContainerRef}>
          {children}
        </InteractionContainer>
      </ScrollContext.Provider>
    </InteractionContext.Provider>
  );
};
