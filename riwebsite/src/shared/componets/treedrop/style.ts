import styled from "styled-components";
import { Collapse } from "antd";
const { Panel } = Collapse;

export const IconImage = styled.img`
  height: 24px;
  margin-top: 10px;
  cursor: pointer;
`;
export const CollapseDiv = styled(Collapse)`
  display: flex;

   .ant-collapse-content-active{

    margin-left:-22px !important;

  }

  .ant-collapse-content-box{
    padding:0px !important;
  }
`;

export const PanelDiv = styled(Panel)`
  border-bottom: none !important;
`;
