import { useContext, useEffect, useState } from 'react';

import { ScrollContext } from './Scroll';

/**
 * @function useScroll
 * Provides consumer with a Scroll Context
 */
export const useScroll = () => {
  const [scroll, setScrollValue] = useState();
  const scrollContext = useContext(ScrollContext);

  useEffect(() => {
    setScrollValue(scrollContext);
  }, [scrollContext]);

  return scroll;
};
