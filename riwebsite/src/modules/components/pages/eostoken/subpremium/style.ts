import styled from "styled-components";
import { Checkbox } from "antd";

export const AirdropDiv = styled.div<any>`
  display: ${props => (props.check ? "block" : "none")};
  margin-top: 25px;
`;
export const AirgrabDiv = styled.div<any>`
  display: ${props => (props.check ? "block" : "none")};
  margin-top: 25px;
`;
export const Icon = styled.i`
  margin-left: 5px;
  width: 15px;
  height: 15px;
`;

export const FirstCheckbox = styled(Checkbox)``;
export const SecondCheckbox = styled(Checkbox)``;
