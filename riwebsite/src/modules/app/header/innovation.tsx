import React from "react";

import { Wrapper, Image, IdeasParagraph } from "./style";
import { Row, Col } from "antd";
import innovation from "../../../assets/images/innovation.png";

export default function Innovation() {
  return (
    <Wrapper>
      <Row>
        <Col xs={24} lg={12}>
          <IdeasParagraph>
            Bringing Great Ideas To Life Through Innovative Ideas And Technical
            Expertise
          </IdeasParagraph>
        </Col>
        <Col xs={24} lg={12}>
          <Image src={innovation}></Image>
        </Col>
      </Row>
    </Wrapper>
  );
}
