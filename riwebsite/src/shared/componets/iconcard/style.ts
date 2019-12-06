import styled from "styled-components";
import { screenSizes } from "../../../shared/styles/theme";

export const IconContainer = styled.div<any>`
  padding: 20px;
  border-right: none;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 20px 40px 20px 40px;
    border-right: ${props => (props.border === "true" ? "2px solid " : null)};
  }
`;

export const Img = styled.img<any>`
  height: 30px;
`;

export const CardText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;
export const CardHeading = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.14em;
  margin: 35px 0 20px 0;
  color: #000000;
`;
