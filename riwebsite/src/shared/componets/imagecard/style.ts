import styled from "styled-components";
//import {Col} from 'antd'

export const ImageContainer = styled.div<any>`
  padding: 30px 40px 20px 40px;
  border-right: ${props => (props.border ==="true" ? "2px solid" : null)};
`;
