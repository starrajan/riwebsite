import React from "react";
import TreeDrop from "../../../shared/componets/treedrop/treedrop";
import { DivContainer, TokenHeading } from "./styles";
import AirDrop from '../../../modules/components/eostoken/subpremium/airdrop'

export default function PremiumToken() {
  return (

    <div>
        <TokenHeading>PREMIUM TOKEN FEATURES</TokenHeading>

    <DivContainer>
      <TreeDrop headline={"ADD STAKING"}/>
     

      <TreeDrop headline={"ADD AIRDROP"}

      airdrop={<AirDrop/>}
      
    
      />

      

      <TreeDrop headline={"ADD INFLATION"} />
      <TreeDrop headline={"ADD DEFLATION"} />
      <TreeDrop headline={"ADD TRANSFER FEE"} />
      <TreeDrop headline={"WHITELIST"} />
      <TreeDrop headline={"BLACKLIST"} />
    </DivContainer>
    </div>
  );
}

