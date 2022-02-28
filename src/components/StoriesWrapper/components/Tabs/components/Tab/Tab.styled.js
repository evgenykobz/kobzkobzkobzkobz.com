import styled from 'styled-components';

export const TabStyled = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  background-color: white;
  opacity: .25;
  height: 5px;
  flex-grow: 1;
  border-radius: 1rem;
  will-change: opacity;
  transition: opacity .15s ease-in;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;
