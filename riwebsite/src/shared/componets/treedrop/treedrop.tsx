import React, { useState } from "react";
import { Collapse } from "antd";
import AirDrop from "../../../modules/components/eostoken/subpremium/airdrop";
import styled from "styled-components";
import plusicon from "../../../assets/images/plusicon.png";
import minusicon from "../../../assets/images/minusicon.png";

const { Panel } = Collapse;

const IconImage = styled.img`
  height: 24px;
  margin-top:10px;
`;
const CollapseDiv = styled(Collapse)`
  border: none !important;
  display:flex;
`;

const PanelDiv = styled(Panel)`
border-bottom:none !important;
`;

export default function TreeDrop(props: any) {
  const [icon, setIcon] = useState(true);

  return (
    <CollapseDiv onChange={() => setIcon(!icon)}>
      <IconImage src={icon ? plusicon : minusicon} />
      <PanelDiv showArrow={false} header={props.headline} key="3">
        {props.airdrop}
      </PanelDiv>
    </CollapseDiv>
  );
}
