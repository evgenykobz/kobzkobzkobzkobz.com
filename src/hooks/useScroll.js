import { useContext, useEffect, useState } from 'react';

import { ScrollContext } from 'src/core';
import { SCROLL_CONTEXT_DEFAULT_VALUE } from 'src/core/Interaction';

/**
 * @function useScroll
 * Provides consumer with a Scroll Context
 */
export const useScroll = () => {
  const [scroll, setScroll] = useState(SCROLL_CONTEXT_DEFAULT_VALUE);
  const scrollContext = useContext(ScrollContext);

  useEffect(() => {
    setScroll(scrollContext);
  }, [scrollContext]);

  return scroll;
};
