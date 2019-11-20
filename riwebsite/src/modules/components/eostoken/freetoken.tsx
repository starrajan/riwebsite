import React from "react";
import { Form, Field } from "react-final-form";

import { FieldDiv, DivContainer } from "./styles";
import { FormLabel, FormField } from ".././../../shared/styles/style";
import {TokenHeading} from './styles'






export default function FreeToken() {
  function onSubmit() {
    console.log("handlesubmitted--->");
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TokenHeading>FREE TOKEN FEATURES</TokenHeading>
          <DivContainer>
            <FieldDiv>
              <FormLabel>Token Account Name</FormLabel>
              <FormField
                name="AccountName"
                component="input"
                type="text"
                placeholder="Must Be 12 Characters"
              />
            </FieldDiv>
            <FieldDiv>
              <FormLabel>Token Symbol</FormLabel>
              <FormField
                name="TokenSymbol"
                component="input"
                type="text"
                placeholder="E.G RAPID"
              />
            </FieldDiv>
            <FieldDiv>
              <FormLabel>Max Supply</FormLabel>
              <FormField
                name="MaxSupply"
                component="input"
                type="text"
                placeholder="Must Be 12 Characters"
              />
            </FieldDiv>
            <FieldDiv>
              <FormLabel>Issue Tokens</FormLabel>
              <FormField
                name="IssueTokens"
                component="input"
                type="text"
                placeholder="How Many Token Do You Want To Issue?"
              />
            </FieldDiv>
            <FieldDiv>
              <FormLabel>Issue Account</FormLabel>
              <FormField
                name="IssueAccount"
                component="input"
                type="text"
                placeholder="Default Will Issue To (TokenAccountName)"
              />
            </FieldDiv>

            <button type="submit">Submit</button>
          </DivContainer>
        </form>
      )}
    />
  );
}
