import { useContext, useEffect, useState } from 'react';

import { HeaderContext, HEADER_CONTEXT_DEFAULT_VALUE } from 'src/core/App/components/Header';

/**
 * @function useHeaderSize
 * Provides consumer with a Header Context
 */
export const useHeaderSize = () => {
  const [headerSize, setHeaderSize] = useState(HEADER_CONTEXT_DEFAULT_VALUE);
  const headerContext = useContext(HeaderContext);

  useEffect(() => {
    setHeaderSize(headerContext);
  }, [headerContext.size]);

  return headerSize;
};
