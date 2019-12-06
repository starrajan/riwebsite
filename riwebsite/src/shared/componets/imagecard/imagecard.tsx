import React from "react";

import { CardHeading, CardText, ImageContainer, ImageDiv } from "./style";

export function ImageCard(props: any) {
  // console.log("hhhh---->", props);

  return (
    <ImageContainer border={props.borderId}>
      <ImageDiv image={props.imageid}></ImageDiv>
      <CardHeading>{props.heading}</CardHeading>
      <CardText>{props.paragraph}</CardText>
    </ImageContainer>
  );
}
