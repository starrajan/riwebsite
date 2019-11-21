import React from "react";
import ClientCard from "../../../shared/componets/clientcard/clientcard";
import { Row, Col } from "antd";
import moonlight from "../../../assets/images/moonlight.png";
//import blockstart from "../../../assets/images/blockstart.png";
import { DivContainer } from "./styles";
import { CommonHeading } from "../../../shared/styles/style";
import Innovation from "../../app/header/innovation";

export default function OurClients() {
  return (
    <div>
      <Innovation />

      <DivContainer>
        <CommonHeading>PAST CLIENTS AND PROJECTS</CommonHeading>

        <Row >
          <Col xs={24} lg={8}>
            <ClientCard
              iconCompany={moonlight}
              paragraph={`Your dynamic agreements platform - 
                Conquering organizational 
                challenges of today.`}
              link={`https://google.com`}
            />
          </Col>
          <Col xs={24} lg={8}>
            <ClientCard
              iconCompany={moonlight}
              paragraph={`Build Real-World Blockchain 
                Applications Accelerate Your Growth`}
              link={`https://google.com`}
            />
          </Col>
          <Col xs={24} lg={8}>
            <ClientCard
              iconCompany={moonlight}
              paragraph={`Secure & Efficient Peer-to-Peer
            Barter. #BuiltOnEOSIO blockchain 
            technology.`}
              link={`https://google.com`}
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
              link={`https://google.com`}
            />
          </Col>
        </Row>
      </DivContainer>
    </div>
  );
}
