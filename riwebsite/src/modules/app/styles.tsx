import styled from "styled-components";
import HeroImage from "../../assets/images/HeroImage.png";
//import { screenSizes } from '../../shared/styles/theme'

export const MainContainer = styled.div`
  max-width: 1500px;
  margin: auto;
`;

// export const MainWrapper=styled.div`

// `;

export const LogoDiv = styled.div`
  //background:url
  padding: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.065em;
  color: #000000;
`;
export const NavBar = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: auto;

  position: fixed;
  background: lavender;
  z-index: 1 !important;
  display: flex;

  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`;

export const DivWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:500px;
background:lightgray;

//background:url(${HeroImage});



`;
export const ChildDiv = styled.div`
  width: 463px;
  text-align: center;
  margin: auto;
`;
export const Heading = styled.h1`
margin:0px;

font-size: 20px;

font-style:normal;
font-weight:normal;
letter-spacing:0.12em

text-transform:uppercase;

@media(min-width:1024px){
          font-size:28px;

}
`;
export const Paragraph = styled.p`
  margin: 23px 0 0 0;
  font-size: 10px;

  letter-spacing: 0.12em;

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const BlockButton = styled.button`
  width: 120px;
  height: 40px;
  margin: 54px 0 0 0;

  box-sizing: border-box;
  font-size: 10px;
  background: #fff;
  border: 2px solid #000000;
  

  @media (min-width: 1024px) {
    width: 210px;
    height: 62px;
    font-size: 14px;
    cursor:pointer;
  }
`;

export const CarouselLinkLeft = styled.a`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    left: 200px;
    top: 800px;
    z-index: 100;
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
