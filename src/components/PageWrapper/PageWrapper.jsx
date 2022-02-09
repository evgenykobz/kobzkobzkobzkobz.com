import React from 'react';

import { PageWrapperStyled } from './PageWrapper.styled';

/**
 * @function PageWrapper
 * A general-use page wrapper with default paddings
 */
export const PageWrapper = ({ children }) => <PageWrapperStyled>{children}</PageWrapperStyled>;
