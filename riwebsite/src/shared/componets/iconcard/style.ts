import styled from "styled-components";

export const IconContainer = styled.div<any>`
  padding: 20px 40px 20px 40px;
  border-right: ${props => (props.border==="true" ? "2px solid " : null)};
`;

export const Img = styled.img<any>`
  height: 30px;
`;
