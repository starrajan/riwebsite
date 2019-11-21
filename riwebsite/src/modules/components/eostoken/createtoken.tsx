import React from "react";
//import styled from "styled-components";
import FreeToken from "./freetoken";
import PremiumToken from "./premiumtoken";
import Blockchain from '../../app/header/blockchain'

//import Summary from '../../components/eostoken/tokensummary/summary'

//const TokenDiv = styled.div``;

export default function CreateToken() {
  return (
    <div>
      <Blockchain/>
      
      <FreeToken/>
      <PremiumToken/>
      
    </div>
  );
}
