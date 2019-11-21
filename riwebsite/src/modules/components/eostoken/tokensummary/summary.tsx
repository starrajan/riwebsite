import React from "react";
import { Header, Paragraph, DivSummary, Total } from "./styles";

export default function Summary(props: any) {
  return (
    <DivSummary>
      <Header>Token Summary</Header>
      <Paragraph>
        {"{TokenAccountName}:"}
        {props.data.accountName}
      </Paragraph>
      <Paragraph>
        {"{TokenSYMBOL}:"}
        {props.data.tokenSYMBOL}
      </Paragraph>
      <Paragraph>Max Supply:{props.data.maxSupply}</Paragraph>
      <Paragraph>Issue Tokens:{props.data.issueTokens}</Paragraph>
      <Paragraph>Issue Tokens to:{props.data.issueAccount}</Paragraph>
      <Total>
        Total:{props.data.issueTokens}
        {props.data.tokenSYMBOL}
      </Total>
    </DivSummary>
  );
}
