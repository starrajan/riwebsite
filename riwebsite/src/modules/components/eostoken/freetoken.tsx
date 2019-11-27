import React, { useState } from "react";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { FieldDiv } from "./styles";
import { FormLabel, FormField } from "../../../shared/styles/styles";

import Summary from "./tokensummary/summary";

import { CommonHeading } from "../../../shared/styles/styles";
import { Container, ErrorDiv } from "./styles";

import { Row, Col } from "antd";

const SignupSchema = Yup.object().shape({
  accountName: Yup.string()
    .length(12, "Must be 12 Character")

    .required("Required"),

  tokenSYMBOL: Yup.string()
    .min(3, "Must be More than or Equal to 3 Character")
    .max(7, "Must be less than or Equal to 7 Character")

    .required("Required"),
  maxSupply: Yup.string().required("Required"),

  issueTokens: Yup.string().required("Required"),
  issueAccount: Yup.string()
    .length(12, "Must be 12 Character")

    .required("Required")
});

export default function FreeToken() {
  const [data, setData] = useState({});
  const [transfrom, setTransform] = useState();

  // console.log('this is data-->',data);

  // function onSubmit(values: any) {
  //   console.log("submitted and it is working fine--->");
  //   console.log("values-->", values);
  //   setData(values);
  // }

  // const handleSubmit = (values: any) => {
    
  //   const data = {
  //     accountName: values.accountName,
  //     issueAccount: values.issueAccount,
  //     issueTokens: values.issueTokens,
  //     maxSupply: values.maxSupply,
  //     tokenSYMBOL: values.tokenSYMBOL.toUpperCase()
  //   };
  //   console.log("value===>", data);
  // };
  return (
    <Container>
      <CommonHeading>FREE TOKEN FEATURES</CommonHeading>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 8 }}>
          <Formik
            initialValues={{
              accountName: "",
              tokenSYMBOL: "",
              maxSupply: "",
              issueTokens: "",
              issueAccount: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => setData(values)}
            
          >
            {({ errors, touched }) => (
              <Form>
                <FieldDiv>
                  <FormLabel>Token Account Name</FormLabel>
                  <FormField
                    name="accountName"
                    type="text"
                    placeholder="Must Be 12 Characters"
                  />
                  {errors.accountName && touched.accountName ? (
                    <ErrorDiv>{errors.accountName}</ErrorDiv>
                  ) : null}
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Token Symbol</FormLabel>
                  <FormField
                    name="tokenSYMBOL"
                    type="text"
                    placeholder="E.G RAPID"
                    style={{ textTransform: "uppercase" }}
                  />
                  {errors.tokenSYMBOL && touched.tokenSYMBOL ? (
                    <ErrorDiv>{errors.tokenSYMBOL}</ErrorDiv>
                  ) : null}
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Max Supply</FormLabel>
                  <FormField
                    name="maxSupply"
                    type="text"
                    placeholder="Enter the Max supply"
                  />
                  {errors.maxSupply && touched.maxSupply ? (
                    <ErrorDiv>{errors.maxSupply}</ErrorDiv>
                  ) : null}
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Issue Tokens</FormLabel>
                  <FormField
                    name="issueTokens"
                    type="text"
                    placeholder="How Many Token Do You Want To Issue?"
                  />
                  {errors.issueTokens && touched.issueTokens ? (
                    <ErrorDiv>{errors.issueTokens}</ErrorDiv>
                  ) : null}
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Issue Account</FormLabel>
                  <FormField
                    name="issueAccount"
                    type="text"
                    placeholder="Default Will Issue To (TokenAccountName)"
                  />
                  {errors.issueAccount && touched.issueAccount ? (
                    <ErrorDiv>{errors.issueAccount}</ErrorDiv>
                  ) : null}
                </FieldDiv>

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </Col>

        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Summary data={data} />
        </Col>
      </Row>
    </Container>
  );
}
