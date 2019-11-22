import styled from 'styled-components'

export const NavBar = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: auto;

  position: fixed;
  background: lavender;
  z-index: 2 !important;
  display: flex;

  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`;
export const LogoDiv = styled.div`
  //background:url
  padding: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.065em;
  color: #000000;
`;