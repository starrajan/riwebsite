import React from "react";
import ClientCard from "../../../../shared/componets/clientcard/clientcard";
import { Row, Col } from "antd";
import moonlight from "../../../../assets/images/moonlight.png";
//import blockstart from "../../../assets/images/blockstart.png";
import { DivContainer } from "./styles";
import { ClientHeading } from "./styles";
import Innovation from "../../header/innovation";

export default function OurClients() {
  return (
    <div>
      <Innovation />

      <DivContainer>
        <ClientHeading>PAST CLIENTS AND PROJECTS</ClientHeading>

        <Row>
          <Col xs={24} lg={8}>
            <ClientCard
              iconCompany={moonlight}
              paragraph={`Your dynamic agreements platform - 
                Conquering organizational 
                challenges of today.`}
              link={1}
            />
          </Col>
          <Col xs={24} lg={8}>
            <ClientCard
              iconCompany={moonlight}
              paragraph={`Build Real-World Blockchain 
                Applications Accelerate Your Growth`}
              link={2}
            />
          </Col>
          <Col xs={24} lg={8}>
            <ClientCard
              iconCompany={moonlight}
              paragraph={`Secure & Efficient Peer-to-Peer
            Barter. #BuiltOnEOSIO blockchain 
            technology.`}
              link={3}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={{ span: 8 }}>
            <ClientCard
              iconCompany={moonlight}
              paragraph={`Your dynamic agreements platform - 
          Conquering organizational challenges 
          of today.`}
              link={4}
            />
          </Col>
        </Row>
      </DivContainer>
    </div>
  );
}
