import styled from "styled-components";
import { Collapse } from "antd";
const { Panel } = Collapse;

export const IconImage = styled.img`
  height: 24px;
  margin-top: 10px;
  cursor: pointer;
`;
export const CollapseDiv = styled(Collapse)<any>`
 
  display: flex;
`;

export const PanelDiv = styled(Panel)`
  border-bottom: none !important;
`;
