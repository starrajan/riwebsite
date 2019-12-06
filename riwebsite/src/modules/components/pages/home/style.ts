import styled from "styled-components";

import { screenSizes } from "../../../../shared/styles/theme";

export const CarouselLinkLeft = styled.a`
  display: none;

  @media (min-width: ${screenSizes.mediaXL}px) {
    display: block;
    position: absolute;
    left: -5%;
    top: 50%;
    z-index: 1;
  }
`;

export const CarouselLinkRight = styled.a`
  display: none;

  @media (min-width: ${screenSizes.mediaXL}px) {
    display: block;
    position: absolute;
    right: -5%;
    top: 50%;
  }
`;
export const CarouselImage = styled.img`
  height: 36px;
`;
export const CarouselDiv = styled.div`
  position: relative;
  margin-bottom: 100px;
`;

export const Homepagewrapper = styled.div`
  padding: 20px;
  @media screen and (min-width: ${screenSizes.mediaM}px) and (max-width: ${screenSizes.mediaL}px) {
    padding: 60px 40px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 100px 200px;
  }
`;
