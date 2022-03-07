import React from 'react';

import { useHref, useLinkClickHandler, useMatch } from 'react-router-dom';

import { MenuItemStyled } from './MenuItem.styled';

export const MenuItem = ({ to, title, onClick = () => {} }) => {
  const href = useHref(to);
  const matchesRoute = useMatch(to);

  const handleLinkClick = useLinkClickHandler(to);

  const handleClick = (event) => {
    onClick();

    if (!event.defaultPrevented) {
      handleLinkClick(event);
    }
  };

  return (
    <MenuItemStyled href={href} onClick={handleClick} active={matchesRoute}>
      {title}
    </MenuItemStyled>
  );
};
