import React from 'react';

import { useHref, useLinkClickHandler } from 'react-router-dom';

import { ButtonStyled } from './Button.styled';

export const Button = ({
  children, color, className, to = '/', onClick = () => {}, onlyText = false, replace = false, state, target,
}) => {
  const href = useHref(to);

  const handleLinkClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
  });

  const handleClick = (event) => {
    onClick();

    if (!event.defaultPrevented) {
      handleLinkClick(event);
    }
  };

  return (
    <ButtonStyled
      href={href}
      onClick={handleClick}
      className={className}
      color={color}
      onlyText={onlyText}
      target={target}
    >
      {children}
    </ButtonStyled>
  );
};
