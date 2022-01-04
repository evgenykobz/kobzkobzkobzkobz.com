import React, {
  createContext, useState, useEffect,
} from 'react';

/**
 * @name ScrollContext
 * Scroll Context
 */
export const ScrollContext = createContext();

/**
 * @function ScrollProvider
 * HOC that updates scroll data with a new context
 */
export const ScrollProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const handleScroll = () => window.requestAnimationFrame(() => setValue(window.scrollY));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};
