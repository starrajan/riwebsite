import React from "react";
import IconCard from "../../../shared/componets/iconcard/iconcard";
import { ServiceContainer } from "../../../shared/styles/styles";
import { CommonHeading } from "../../../shared/styles/styles";
import { Row, Col } from "antd";
//import styled from "styled-components";
import gallery from "../../../assets/images/gallery.png";
import mobile from "../../../assets/images/mobile.png";
import starcomputer from "../../../assets/images/starcomputer.png";

export default function ServiceCard() {
  return (
    <ServiceContainer>
      <CommonHeading>SERVICES</CommonHeading>
      <Row>
        <Col xs={24} lg={8}>
          <IconCard
            borderId={true}
            iconId={starcomputer}
            heading={"Full Stack Dapp Development"}
            paragraph={`Building a dapp on EOS lets you tap into 
                    a wide range of services. The high speed, free transactions 
                    makes it easy for your dApp to handle complex logic that
                     spans multiple contracts. If this is your 1st
                      or your 20th dApp our team of expert dave developers 
                      (front-end & back-end) will make the process of 
                      building your dApp easy and hassle free.`}
          />
        </Col>

        <Col xs={24} lg={8}>
          <IconCard
            borderId={true}
            iconId={gallery}
            heading={"Blockchain Consulting"}
            paragraph={`Blockchain technology is 
                    relatively new and can be complex, understanding 
                    a projects viability should be the first step taken
                     before building it. Our team will help put together 
                     a high level scope for your project. We have found a 
                     bit of planning can prevent wasted energy, time and
                      money as a project move through the build phase.  `}
          />
        </Col>
        <Col xs={24} lg={8}>
          <IconCard
            borderId={false}
            iconId={mobile}
            heading={"Tokenization"}
            paragraph={`With tokenization you can turn real
                     asset into a digital token. This is done by 
                     issuing tokens that represent ownership in
                      any real world asset. When you tokenize an 
                      asset you cut out the middleman making the 
                      ownership more efficient.. With a digital 
                      representation of your asset on blockchain it 
                      guarantees that the ownership information is immutable.`}
          />
        </Col>
      </Row>
    </ServiceContainer>
  );
}
