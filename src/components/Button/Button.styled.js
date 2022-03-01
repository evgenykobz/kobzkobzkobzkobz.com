import styled from 'styled-components';

import { THEME_TYPES } from 'src/core/Theme/Theme.constants';

import { DARK_THEME_COLOR, DEFAULT_COLOR } from './Button.constants';

export const ButtonStyled = styled.a`
  display: block;
  background-color: ${({ theme: { type }, color, onlyText }) => (onlyText ? 'unset' : `${color || (type === THEME_TYPES.dark ? DARK_THEME_COLOR : DEFAULT_COLOR)}20`)};
  border-radius: .75rem;
  border: unset;
  will-change: background, transform;
  transition: background, transform .2s, .2s ease-out;
  font-size: 1.25rem;
  color: ${({ theme: { type }, color }) => (color || (type === THEME_TYPES.dark ? DARK_THEME_COLOR : DEFAULT_COLOR))};
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  text-decoration: unset;

  &:hover {
    background-color: ${({ theme: { type }, color, onlyText }) => (onlyText ? 'unset' : `${color || (type === THEME_TYPES.dark ? DARK_THEME_COLOR : DEFAULT_COLOR)}20`)};
  }

  &:focus, :active {
    transform: scale(0.95);
  }
`;
