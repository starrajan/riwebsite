import React from "react";
import IconCard from "../../../shared/componets/iconcard/iconcard";
import { CardContainer } from "../../../shared/styles/styles";
import { CommonHeading } from "../../../shared/styles/styles";
import { Row, Col } from "antd";
import biometric from "../../../assets/images/biometric.png";
import carousel from "../../../assets/images/carousel.png";
import computer from "../../../assets/images/computer.png";

export default function TechCard() {
  return (
    <CardContainer>
      <CommonHeading>TECH STACK</CommonHeading>
      <Row>
        <Col xs={24} lg={8}>
          <IconCard
            borderId={true}
            iconId={carousel}
            heading={"BLOCKCHAIN"}
            paragraph={`Short Text to describe what we do. Lorem 
        ipsum, or lipsum as it is sometimes known, is dummy text
         used in laying out print, graphic or web designs. The passage 
         is attributed to an unknown typesetter in the 15th century who is 
         thought to have scrambled parts of Cicero's De Finibus Bonorum et 
         Malorum for use in a type specimen book.`}
          />
        </Col>
        <Col xs={24} lg={8}>
          <IconCard
            borderId={true}
            iconId={biometric}
            heading={"SECURITY"}
            paragraph={`Short Text to describe what we do. Lorem 
        ipsum, or lipsum as it is sometimes known, is dummy text
         used in laying out print, graphic or web designs. The passage 
         is attributed to an unknown typesetter in the 15th century who is 
         thought to have scrambled parts of Cicero's De Finibus Bonorum et 
         Malorum for use in a type specimen book. `}
          />
        </Col>
        <Col xs={24} lg={8}>
          <IconCard
            borderId={false}
            iconId={computer}
            heading={"DAPPS"}
            paragraph={`Short Text to describe what we do. Lorem 
        ipsum, or lipsum as it is sometimes known, is dummy text
         used in laying out print, graphic or web designs. The passage 
         is attributed to an unknown typesetter in the 15th century who is 
         thought to have scrambled parts of Cicero's De Finibus Bonorum et 
         Malorum for use in a type specimen book.`}
          />
        </Col>
      </Row>
    </CardContainer>
  );
}
