import React, { useState } from "react";
import { Collapse } from "antd";
//import AirDrop from "../../../modules/components/eostoken/subpremium/airdrop";
import styled from "styled-components";
import plusicon from "../../../assets/images/plusicon.png";
import minusicon from "../../../assets/images/minusicon.png";

const { Panel } = Collapse;

const IconImage = styled.img`
  height: 24px;
  margin-top: 10px;
  cursor: pointer;
`;
const CollapseDiv = styled(Collapse)<any>`
  border: none !important;
  display: flex;
`;

const PanelDiv = styled(Panel)`
  border-bottom: none !important;
`;

export default function TreeDrop(props: any) {
  const [icon, setIcon] = useState(true);
  

  // const handleIcon = () => {
  //   console.log("clicked");
    
  //   setIcon(!icon);
  // };

  return (
    <CollapseDiv
      activeKey={["0"]}
      bordered={false}
      onChange={() =>setIcon(!icon)}
    >
      <IconImage
        src={icon ? plusicon : minusicon}
        onClick={() => setIcon(!icon)}
      />
      <PanelDiv
        showArrow={false}
        header={props.headline}
        key={!icon ? "0" : "1"}
      >
        {props.airdrop}
      </PanelDiv>
    </CollapseDiv>
  );
}
