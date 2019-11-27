import styled from 'styled-components'
export const CarouselLinkLeft = styled.a`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    left: 2%;
    top: 50%;
    z-index: 1;
  }
`;

export const CarouselLinkRight = styled.a`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    right: 2%;
    top: 50%;
  }
  
`;
export const CarouselImage = styled.img`
  
    height: 36px;
  
`;
export const CarouselDiv =styled.div`
position:relative;
`;