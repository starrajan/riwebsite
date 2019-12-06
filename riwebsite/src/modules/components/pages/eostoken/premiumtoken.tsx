import React from "react";
import TreeDrop from "../../../../shared/componets/treedrop/treedrop";

import AirDrop from "./subpremium/airdrop";
import { Row, Col } from "antd";
import { CommonHeading } from "../../../../shared/styles/styles";
import { Container } from "./styles";

export default function PremiumToken() {
  return (
    <Container>
      <CommonHeading>PREMIUM TOKEN FEATURES</CommonHeading>

      <Row>
        <Col span={8} offset={8}>
          <TreeDrop headline={"ADD STAKING"} />

          <TreeDrop headline={"ADD AIRDROP"} airdrop={<AirDrop />} />

          <TreeDrop headline={"ADD INFLATION"} />
          <TreeDrop headline={"ADD DEFLATION"} />
          <TreeDrop headline={"ADD TRANSFER FEE"} />
          <TreeDrop headline={"WHITELIST"} />
          <TreeDrop headline={"BLACKLIST"} />
        </Col>
      </Row>
    </Container>
  );
}
