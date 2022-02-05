import styled from 'styled-components';

import { DEFAULT_COLOR } from './Button.constants';

export const ButtonStyled = styled.a`
  display: block;
  background-color: ${({ color, onlyText }) => (onlyText ? 'unset' : `${color || DEFAULT_COLOR}20`)};
  border-radius: .75rem;
  border: unset;
  will-change: background, transform;
  transition: background, transform .2s, .2s ease-out;
  font-size: 1.25rem;
  color: ${({ color }) => (color || DEFAULT_COLOR)};
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  text-decoration: unset;

  &:hover {
    background-color: ${({ color, onlyText }) => (onlyText ? 'unset' : `${color || DEFAULT_COLOR}40`)};
  }

  &:focus, :active {
    transform: scale(0.95);
  }
`;
