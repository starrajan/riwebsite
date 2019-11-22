import React, { useState } from "react";
import { Checkbox } from "antd";
import { DatePicker } from "antd";
import { FormLabel } from "../../../../shared/styles/styles";
import styled from "styled-components";

const AirdropDiv = styled.div<any>`
  display: ${props => (props.check ? "block" : "none")};
`;
const AirgrabDiv = styled.div<any>`
  display: ${props => (props.check ? "block" : "none")};
`;

export default function AirDrop() {
  const [check, setCheck] = useState(true);

  return (
    <div>
      <Checkbox checked={check} onChange={() => setCheck(!check)}>
        AirDrop
      </Checkbox>
      <Checkbox checked={!check} onChange={() => setCheck(!check)}>
        AirGrap
      </Checkbox>

      <AirdropDiv check={check}>
        <FormLabel>Airdrop Date</FormLabel>
        <DatePicker />
      </AirdropDiv>
      <AirgrabDiv check={!check}>
        <FormLabel> Airgrab Date</FormLabel>
        <DatePicker />
      </AirgrabDiv>
    </div>
  );
}
