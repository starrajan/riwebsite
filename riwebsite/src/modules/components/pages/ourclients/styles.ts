import styled from "styled-components";
import { screenSizes } from "../../../../shared/styles/theme";

export const DivContainer = styled.div`
  padding: 50px 20px;
  @media screen and (min-width: ${screenSizes.mediaM}px) and (max-width: ${screenSizes.mediaL}px) {
    padding: 50px 30px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 100px 90px;
  }
`;

export const ClientHeading = styled.h1`
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #000000;
  margin-left: 0px;
  @media (min-width: ${screenSizes.mediaL}) {
    font-size: 28px;
    line-height: 33px;
    margin-left: 29px;
  }
`;
