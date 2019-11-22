import styled from "styled-components";
import { Field } from "react-final-form";

export const CommonHeading = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  letter-spacing: 0.14px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: initial;
  }
`;

export const FormLabel = styled.label`
  display: block;
`;
export const FormField = styled(Field)`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding-left: 10px;
  width: 100%;
  padding: 4%;
`;

export const CardContainer = styled.div<any>`
  max-width: 1005px;
  margin: 100px auto;
`;
export const ServiceContainer = styled.div`
  max-width: 1150px;
  margin: 100px auto;
`;

export const CardText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;
export const CardHeading = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.14em;
  padding: 10px 0px;
`;
