import React from "react";

import { Wrapper, IdeasParagraph, Imagewrapper, Image } from "./style";
import { Row, Col } from "antd";
import ClientImg from "../../../assets/images/clintimg.svg";

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
          <Imagewrapper>
            <Image src={ClientImg} />
          </Imagewrapper>
        </Col>
      </Row>
    </Wrapper>
  );
}
