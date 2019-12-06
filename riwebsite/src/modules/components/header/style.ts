import styled from "styled-components";
import HeroImage from "../../../assets/images/HeroImage.svg";
import Innovation from "../../../assets/images/innovation.png";

import { screenSizes } from "../../../shared/styles/theme";

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background: url(${HeroImage});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Wrapper = styled.div`
  display: flex;
  background: url(${HeroImage});
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
export const ChildDiv = styled.div`
  width: 65%;
  text-align: center;
  margin: auto;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 40%;
  }
`;

export const Heading = styled.h1`
margin:0px;
font-size: 20px;
font-style:normal;
font-weight:normal;
letter-spacing:0.12em
text-transform:uppercase;
@media (min-width: ${screenSizes.mediaL}px){
  font-size:28px;
}
`;
export const Paragraph = styled.p`
  margin: 23px 0 0 0;
  font-size: 10px;
  letter-spacing: 0.12em;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 14px;
  }
`;

export const IdeasParagraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4% 10%;
  margin-top: 0;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-top: auto;
    font-size: 20px;
    line-height: 33px;
    padding: 4% 27%;
  }
`;
export const Imagewrapper = styled.div`
  background: url(${Innovation});
  height: 239px;
  background-size: cover;
  position: relative;
  width: 359px;
`;

export const Image = styled.img`
  position: absolute;
  top: 40px;
  left: 70px;
`;
