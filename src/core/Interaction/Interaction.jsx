import React, {
  createContext, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import { HeaderContext, HEADER_CONTEXT_DEFAULT_VALUE } from '../App/components/Header';
import { InteractionContainer } from './Interaction.styled';

export const SCROLL_CONTEXT_DEFAULT_VALUE = {
  scroll: 0,
  setScrollableContainer: () => {},
};

/**
 * @name ScrollContext
 * Scroll Context
 */
export const ScrollContext = createContext(SCROLL_CONTEXT_DEFAULT_VALUE);

export const INTERACTION_CONTEXT_DEFAULT_VALUE = {
  observer: null,
  entries: [],
};

/**
 * @name InteractionContext
 * Interaction Observer Context
 */
export const InteractionContext = createContext(INTERACTION_CONTEXT_DEFAULT_VALUE);

/**
 * @function InteractionProvider
 * Provides consumer with Scroll Value, Interaction Observer API, Header Size
 * and also supplies methods to alter these values
 */
export const InteractionProvider = ({ children }) => {
  // Ref to store Scrollable Element (can be reset to another DOM-element)
  const scrollableContainer = useRef();

  // Ref to store Interaction Observer API
  // (top-level container by default, cannot be reset to another DOM-element)
  const interactionContainer = useRef();

  // Interaction Observer API State
  const [observerContext, setObserverContext] = useState(INTERACTION_CONTEXT_DEFAULT_VALUE);

  // Scroll State. By default scroll value equals to 0
  const [scrollContext, setScrollContext] = useState({
    scroll: SCROLL_CONTEXT_DEFAULT_VALUE.scroll,
    setScrollableContainer: (element) => {
      scrollableContainer.current = element;
    },
  });

  const [headerSize, setHeaderSize] = useState(HEADER_CONTEXT_DEFAULT_VALUE.size);

  // Header Size state. By default header size equals to preset Header.jsx constant
  const headerContext = useMemo(() => ({
    size: headerSize,
    setSize: setHeaderSize,
  }), [headerSize]);

  // Function is invoked on each user scroll
  const handleScroll = () => {
    if (!scrollableContainer.current) {
      return;
    }

    window.requestAnimationFrame(() => setScrollContext({
      ...scrollContext,
      scroll: scrollableContainer.current.scrollTop,
    }));
  };

  // Function is invoked each time there are changes caught up by Interaction API
  const handleInteractionCallback = (entries) => setObserverContext({
    ...observerContext,
    entries,
  });

  // Callback being run at app start to supply refs with initial values
  const interactionContainerCallback = useCallback((root) => {
    if (!root) {
      return;
    }

    interactionContainer.current = root;
    scrollableContainer.current = root;
  }, []);

  // Effect runs on every change made to interactionContainer ref
  // and inits (or disables) Interaction Observer API
  useEffect(() => {
    if (!interactionContainer.current) {
      return;
    }

    setObserverContext({
      ...observerContext,
      observer: new IntersectionObserver(handleInteractionCallback, {
        root: interactionContainer.current,
        threshold: 0.5,
      }),
    });

    return () => {
      if (observerContext.observer) {
        observerContext.observer.disconnect();
      }
    };
  }, [interactionContainer.current]);

  // Effect runs on every change made to scrollableContainer e.g. if one of
  // children containers has decided to recalc the scroll on-demand
  useEffect(() => {
    if (!scrollableContainer.current) {
      return;
    }

    scrollableContainer.current.addEventListener('scroll', handleScroll);

    return () => scrollableContainer.current.removeEventListener('scroll', handleScroll);
  }, [scrollableContainer.current]);

  return (
    <InteractionContext.Provider value={observerContext}>
      <ScrollContext.Provider value={scrollContext}>
        <HeaderContext.Provider value={headerContext}>
          <InteractionContainer ref={interactionContainerCallback}>
            {children}
          </InteractionContainer>
        </HeaderContext.Provider>
      </ScrollContext.Provider>
    </InteractionContext.Provider>
  );
};
