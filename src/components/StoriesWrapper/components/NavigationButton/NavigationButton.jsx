import React from 'react';

import { NavigationButtonStyled } from './NavigationButton.styled';

export const NavigationButton = ({
  onClick, active, className, title,
}) => (active ? <NavigationButtonStyled title={title} className={className} onClick={onClick} /> : null);
