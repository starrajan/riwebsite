import React from "react";
import { Header, TokenText, DivSummary, Total } from "./styles";

export default function Summary(props: any) {
  const {
    accountName,
    tokenSYMBOL,
    maxSupply,
    issueTokens,
    issueAccount
  } = props.data;
  console.log("ptrops--", props);
  return (
    <DivSummary>
      <Header>Token Summary</Header>
      <TokenText>
        {` {TokenAccountName}:
        ${accountName}`}
      </TokenText>
      <TokenText>{`{TokenSYMBOL}: ${tokenSYMBOL}`}</TokenText>
      <TokenText>{`Max Supply:${maxSupply} ${tokenSYMBOL}`}</TokenText>
      <TokenText>{`Issue Tokens:${issueTokens} ${tokenSYMBOL}`}</TokenText>
      <TokenText>{`Issue Tokens to:${issueAccount}`}</TokenText>
      <Total>{`Total: ${issueTokens} ${tokenSYMBOL}`}</Total>
    </DivSummary>
  );
}
