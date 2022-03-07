import styled from 'styled-components';

import { ivoryBlackColour, offwhiteBackgroundColour } from 'src/constants/styles';

export const MenuItemStyled = styled.a`
  text-decoration: unset;
  padding: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${ivoryBlackColour};
  will-change: background-color;
  transition: background-color .125s ease-out;
  text-overflow: ellipsis;
  overflow: inherit;
  word-wrap: normal;
  background-color: ${({ active }) => (active ? offwhiteBackgroundColour : 'unset')};

  &:hover, :focus, :active {
    background-color: ${offwhiteBackgroundColour};
  }
`;
