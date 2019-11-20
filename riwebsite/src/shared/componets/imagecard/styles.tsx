import styled from "styled-components";
//import {Col} from 'antd'

export const Container = styled.div<any>`
  padding: 30px 40px 20px 40px;
  border-right: ${props => (props.border ? "2px solid" : null)};
`;
export const Heading = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.14em;
  padding: 10px 0px;
`;
export const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;
