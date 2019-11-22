import React, { useState } from "react";

//import AirDrop from "../../../modules/components/eostoken/subpremium/airdrop";
import { CollapseDiv, IconImage, PanelDiv } from "./style";

import plusicon from "../../../assets/images/plusicon.png";
import minusicon from "../../../assets/images/minusicon.png";

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
      onChange={() => setIcon(!icon)}
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
