import styled from "styled-components";
import { screenSizes } from "../../../../shared/styles/theme";

export const BlockButton = styled.button`
  padding: 14px 56px;
  margin: 54px 0 0 0;
  font-size: 10px;
  background: #fff;
  border: 1px solid #000000;

  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 14px;
    cursor: pointer;
    border: 2px solid #000000;
  }
`;
