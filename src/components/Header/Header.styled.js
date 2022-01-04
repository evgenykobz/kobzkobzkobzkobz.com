import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderBackground = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 85%, rgba(255,255,255,0.2147233893557423) 100%);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const HeaderLogo = styled.img`
  z-index: 1;
`;
