import React, { useState } from "react";

import { DatePicker } from "antd";
import { FormLabel } from "../../../../../shared/styles/styles";
import {
  AirdropDiv,
  AirgrabDiv,
  FirstCheckbox,
  SecondCheckbox,
  Icon
} from "./style";

//import {MainAirdropDiv} from './style'

export default function AirDrop() {
  const [check, setCheck] = useState(true);

  return (
    <React.Fragment>
      <FirstCheckbox checked={check} onChange={() => setCheck(!check)}>
        AirDrop
        <Icon className="fas fa-exclamation-circle"></Icon>
      </FirstCheckbox>
      <SecondCheckbox checked={!check} onChange={() => setCheck(!check)}>
        AirGrap
        <Icon className="fas fa-exclamation-circle"></Icon>
      </SecondCheckbox>

      <AirdropDiv check={check}>
        <FormLabel>Airdrop Date</FormLabel>
        <DatePicker />
      </AirdropDiv>
      <AirgrabDiv check={!check}>
        <FormLabel> Airgrab Date</FormLabel>
        <DatePicker />
      </AirgrabDiv>
    </React.Fragment>
  );
}
