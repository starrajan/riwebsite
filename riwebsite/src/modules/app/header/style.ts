import styled from "styled-components";
//import HeroImage from "../../assets/images/HeroImage.png";

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background: lightgray;
`;
export const Wrapper = styled.div`
  display: flex;

  align-items: center;

  height: 700px;
  background: thistle;
`;
export const ChildDiv = styled.div`
  width: 40%;
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

export const IdeasParagraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4% 27%;
  margin-top: 20%;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    margin-top: auto;
  }
`;

export const Image = styled.img``;
