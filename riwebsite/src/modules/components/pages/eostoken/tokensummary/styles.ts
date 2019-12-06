import styled from "styled-components";
import { screenSizes } from "../../../../../shared/styles/theme";

export const Header = styled.h1`
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.14em;
  text-transform: capitalize;
  color: #000000;
  margin-bottom: 20px;
`;
export const TokenText = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-left: 5px;
`;
export const DivSummary = styled.div`
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 20px 25px;

  margin: 54px auto;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 0 0 0 50px;
  }
`;
export const Total = styled.p`
  text-align: end;
  /* margin: 20% 20% 0 0; */
  margin-top: 38%;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;
