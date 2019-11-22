import styled from 'styled-components'
export const CarouselLinkLeft = styled.a`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    left: 200px;
    top: 800px;
    z-index: 1;
  }
`;

export const CarouselLinkRight = styled.a`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    right: 200px;
    top: 800px;
  }
`;
export const CarouselImage = styled.img`
  @media (min-width: 1024px) {
    height: 36px;
  }
`;