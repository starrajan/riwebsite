import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FieldDiv } from "./styles";
import { FormLabel, FormField } from "../../../../shared/styles/styles";
import Summary from "./tokensummary/summary";
import { CommonHeading } from "../../../../shared/styles/styles";
import { Container, ErrorDiv, ModalBox } from "./styles";
import { Row, Col } from "antd";

const SignupSchema = Yup.object().shape({
  accountName: Yup.string()
    .length(12, "Must be 12 Character")
    .matches(/^.[1-5a-zA-Z]+$/, "Must be Numbers between 1 to 5")

    .required("Required"),

  tokenSYMBOL: Yup.string()
    .min(3, "Must be More than or Equal to 3 Character")
    .max(7, "Must be less than or Equal to 7 Character")
    .matches(/^.[a-zA-Z]+$/, "Must be character only")

    .required("Required"),
  maxSupply: Yup.number()
    .positive("Must be Positive Values")

    .required("Required"),

  issueTokens: Yup.number()
    .positive("Must be Positive Values")
    .required("Required"),
  issueAccount: Yup.string()
    .length(12, "Must be 12 Character")

    .required("Required")
});

export default function FreeToken() {
  const [data, setData] = useState({
    accountName: "",
    tokenSYMBOL: "",
    maxSupply: "",
    issueTokens: "",
    issueAccount: ""
  });

  const [visible, setVisible] = useState(false);

  const submitData = (values: any, resetForm: any) => {
    const formData = {
      accountName: values.accountName.toLowerCase(),
      issueAccount: values.issueAccount.toLowerCase(),
      issueTokens: values.issueTokens,
      maxSupply: values.maxSupply,
      tokenSYMBOL: values.tokenSYMBOL.toUpperCase()
    };
    setData(formData);
    resetForm();
    setVisible(!visible);
  };

  return (
    <Container>
      <CommonHeading>FREE TOKEN FEATURES</CommonHeading>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 8 }}>
          <Formik
            initialValues={data}
            validationSchema={SignupSchema}
            onSubmit={() => setVisible(!visible)}
          >
            {({ errors, touched, resetForm, values }) => (
              <Form>
                <FieldDiv>
                  <FormLabel>Token Account Name</FormLabel>
                  <FormField
                    name="accountName"
                    type="text"
                    placeholder="Must Be 12 Characters"
                    casetransform="lowercase"
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
                    casetransform="uppercase"
                  />
                  {errors.tokenSYMBOL && touched.tokenSYMBOL ? (
                    <ErrorDiv>{errors.tokenSYMBOL}</ErrorDiv>
                  ) : null}
                </FieldDiv>
                <FieldDiv>
                  <FormLabel>Max Supply</FormLabel>
                  <FormField
                    name="maxSupply"
                    type="number"
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
                    type="number"
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
                    casetransform="lowercase"
                  />
                  {errors.issueAccount && touched.issueAccount ? (
                    <ErrorDiv>{errors.issueAccount}</ErrorDiv>
                  ) : null}
                </FieldDiv>

                <button type="submit">Submit</button>

                <ModalBox
                  title="Create EOS Token"
                  centered={true}
                  visible={visible}
                  onOk={() => {
                    submitData(values, resetForm);
                  }}
                  onCancel={() => {
                    resetForm();
                    setVisible(!visible);
                  }}
                >
                  <p>Are you sure?</p>
                </ModalBox>
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
