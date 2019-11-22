import React from "react";
import styled from "styled-components";
import { CardHeading, CardText } from "../../styles/styles";
import { ImageContainer } from "./style";

const ImageDiv = styled.div<any>`
  width: 100px;
  height: 100px;

  background-image: ${props => (props.image ? `url(${props.image});` : null)};
  background-size: 100% 100%;
`;

export function ImageCard(props: any) {
  console.log("hhhh---->", props);

  return (
    <ImageContainer border={props.borderId}>
      <ImageDiv image={props.imageid}></ImageDiv>
      <CardHeading>{props.heading}</CardHeading>
      <CardText>{props.paragraph}</CardText>
    </ImageContainer>
  );
}
