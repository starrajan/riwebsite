import React, { useState } from "react";
import { Form } from "react-final-form";

import { FieldDiv } from "./styles";
import { FormLabel, FormField } from ".././../../shared/styles/style";

import Summary from "./tokensummary/summary";

import { CommonHeading } from "../../../shared/styles/style";
import { Container } from "./styles";

import { Row, Col } from "antd";

export default function FreeToken() {
  const [data, setData] = useState({});

  function onSubmit(values: any) {
    console.log("submitted and it is working fine--->");
    console.log("values-->", values);
    setData(values);
  }

  return (
    <Container>
      <CommonHeading>FREE TOKEN FEATURES</CommonHeading>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 8 }}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FieldDiv>
                  <FormLabel>Token Account Name</FormLabel>
                  <FormField
                    name="accountName"
                    component="input"
                    type="text"
                    placeholder="Must Be 12 Characters"
                  />
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Token Symbol</FormLabel>
                  <FormField
                    name="tokenSYMBOL"
                    component="input"
                    type="text"
                    placeholder="E.G RAPID"
                  />
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Max Supply</FormLabel>
                  <FormField
                    name="maxSupply"
                    component="input"
                    type="text"
                    placeholder="Must Be 12 Characters"
                  />
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Issue Tokens</FormLabel>
                  <FormField
                    name="issueTokens"
                    component="input"
                    type="text"
                    placeholder="How Many Token Do You Want To Issue?"
                  />
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Issue Account</FormLabel>
                  <FormField
                    name="issueAccount"
                    component="input"
                    type="text"
                    placeholder="Default Will Issue To (TokenAccountName)"
                  />
                </FieldDiv>

                <button type="submit">Submit</button>
              </form>
            )}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
           <Summary
            data={data}
          />
        </Col>
      </Row>
    </Container>
  );
}
