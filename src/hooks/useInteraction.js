import { useContext, useEffect, useState } from 'react';

import { InteractionContext } from 'src/core';
import { INTERACTION_CONTEXT_DEFAULT_VALUE } from 'src/core/Interaction';

/**
 * @function useInteraction
 * Provides consumer with an Interaction Observer Context
 */
export const useInteraction = () => {
  const [interaction, setInteraction] = useState(INTERACTION_CONTEXT_DEFAULT_VALUE);
  const interactionContext = useContext(InteractionContext);

  useEffect(() => {
    setInteraction(interactionContext);
  }, [interactionContext]);

  return interaction;
};
