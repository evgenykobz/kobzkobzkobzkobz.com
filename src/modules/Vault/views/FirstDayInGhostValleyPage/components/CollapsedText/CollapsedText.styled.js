import styled from 'styled-components';

import { DEFAULT_COLOR } from 'src/components/Button/Button.constants';

export const TitleButton = styled.button`
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  text-decoration: unset;
  outline: none;
  border: unset;
  background: none;
  font-size: 1rem;
  color: ${DEFAULT_COLOR};
  padding: 0;
  will-change: color;
  transition: color .12s ease-in;

  &:hover {
    color: ${DEFAULT_COLOR}60;
  }
`;

export const Content = styled.div`
  font-size: .85rem;
  border-left: 4px solid ${DEFAULT_COLOR}40;
  padding-left: 1rem;
  margin-left: .5rem;
`;
