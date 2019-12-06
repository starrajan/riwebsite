import React from "react";

import { CardHeading, CardText } from "./style";
import { Img } from "./style";
import { IconContainer } from "./style";

export default function IconCard(props: any) {
  // const rendericon = (num: any) => {

  //     switch (num) {

  //         case 1:
  //             return <i className="fas fa-desktop"></i>;

  //         case 2:
  //             return <i className="fas fa-desktop"></i>;

  //         case 3:
  //             return <i className="fas fa-desktop"></i>;
  //         case 4:
  //             return <i className="fas fa-desktop"></i>;
  //         case 5:
  //             return <i className="fas fa-desktop"></i>;
  //         case 6:
  //             return <i className="fas fa-desktop"></i>;

  //         default: return null;
  //     }

  // }
  //console.log("size;;---", props);

  return (
    <IconContainer border={props.borderId}>
      <Img src={props.iconId} alt="images"></Img>
      <CardHeading>{props.heading}</CardHeading>
      <CardText>{props.paragraph}</CardText>
    </IconContainer>
  );
}
