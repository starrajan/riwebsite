import React from "react";
import GetStarted from "./button/getstarted";
import { DivWrapper, ChildDiv, Heading, Paragraph } from "./style";

export default function Blockchain() {
  return (
    <DivWrapper>
      <ChildDiv>
        <Heading>BLOCKCHAIN INNOVATION</Heading>
        <Paragraph>
          Helping Entrepreneurs Change The World With Blockchain
        </Paragraph>

        <GetStarted />
      </ChildDiv>
    </DivWrapper>
  );
}
