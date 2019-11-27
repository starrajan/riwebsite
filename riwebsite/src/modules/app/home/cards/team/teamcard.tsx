import React from "react";
import { ImageCard } from "../../../../../shared/componets/imagecard/imagecard"
import { CardContainer } from "../../../../../shared/styles/styles"
import { CommonHeading } from "../../../../../shared/styles/styles"
//import codezero from '../../../assets/images/codezero.jpg'
import Jesse from "../../../../../assets/images/Jesse.png"
import Prasanjit from "../../../../../assets/images/Prasanjit.png"
import Tyson from "../../../../../assets/images/Tyson.png"
import { Row, Col } from "antd";

export default function TeamCard() {
  return (
    <CardContainer>
      <CommonHeading>TEAM</CommonHeading>

      <Row>
        <Col xs={24} lg={8}>
          <ImageCard
            borderId={"true"}
            imageid={Jesse}
            heading={"Jesse Anglen"}
            paragraph={`Short Text to discribe what we do. 
        Lorem ipsum, or lipsum as it is sometimes known, 
        is dummy text used in laying out print, graphic or
         web designs. The passage is attributed to an unknown
          typesetter in the 15th century who is 
          thought to have scrambled parts of Cicero's De
           Finibus Bonorum et Malorum for use in a type 
           specimen book.`}
          />
        </Col>
        <Col xs={24} lg={8}>
          <ImageCard
            borderId={"true"}
            imageid={Prasanjit}
            heading={"Prasanjit Dey"}
            paragraph={`Short Text to discribe what we do. 
        Lorem ipsum, or lipsum as it is sometimes known, 
        is dummy text used in laying out print, graphic or
         web designs. The passage is attributed to an unknown
          typesetter in the 15th century who is 
          thought to have scrambled parts of Cicero's De
           Finibus Bonorum et Malorum for use in a type 
           specimen book. `}
          />
        </Col>
        <Col xs={24} lg={8}>
          <ImageCard
            borderId={"false"}
            imageid={Tyson}
            heading={"Tyson Faulkner"}
            paragraph={`Short Text to discribe what we do. 
        Lorem ipsum, or lipsum as it is sometimes known, 
        is dummy text used in laying out print, graphic or
         web designs. The passage is attributed to an unknown
          typesetter in the 15th century who is 
          thought to have scrambled parts of Cicero's De
           Finibus Bonorum et Malorum for use in a type 
           specimen book.`}
          />
        </Col>
      </Row>
    </CardContainer>
  );
}
