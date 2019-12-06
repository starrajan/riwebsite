import styled from "styled-components";
import { screenSizes } from "../../../shared/styles/theme";

export const Clientcard = styled.div`
  background: linear-gradient(180deg, #517d99 0%, #597180 100%);
  padding: 45px 30px;
  height: 440px;
  margin: 0px;
  margin-bottom: 20px;

  @media screen and (min-width: ${screenSizes.mediaM}px) and (max-width: ${screenSizes.mediaL}px) {
    margin: 20px;
    margin-bottom: 0;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin: 30px;
    margin-bottom: 0;
  }
`;

export const IconCompany = styled.img`
  height: 45px;
  @media (min-width: ${screenSizes.mediaXL}px) {
    height: 50px;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.14em;
  color: #ffffff;
  margin: 50px 0 0 0;
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 18px;
  }
`;
export const Button = styled.button<any>`
  border: 3px solid #ffffff;
  border-radius: 3px;
  background: linear-gradient(180deg, #517d99 0%, #597180 100%);
  cursor: pointer;
  color: #ffffff;
  padding: 10px 20px;
  width: 55%;
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
`;
// export const Link=styled.a`

// margin-top:100px;
// `;
