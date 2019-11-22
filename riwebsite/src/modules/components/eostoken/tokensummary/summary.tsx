import React from "react";
import { Header, TokenText, DivSummary, Total } from "./styles";

export default function Summary(props: any) {
  return (
    <DivSummary>
      <Header>Token Summary</Header>
      <TokenText>
        {"{TokenAccountName}:"}
        {props.data.accountName}
      </TokenText>
      <TokenText>
        {"{TokenSYMBOL}:"}
        {props.data.tokenSYMBOL}
      </TokenText>
      <TokenText>
  Max Supply:{props.data.maxSupply}{" "}{props.data.tokenSYMBOL}
      </TokenText>
      <TokenText>
        Issue Tokens:{props.data.issueTokens}{" "}{props.data.tokenSYMBOL}
      </TokenText>
      <TokenText>Issue Tokens to:{props.data.issueAccount}</TokenText>
      <Total>
        Total:{props.data.issueTokens}{" "}{props.data.tokenSYMBOL}
      </Total>
    </DivSummary>
  );
}
