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
  width: 400px;
  height: 42px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding-left:10px;
`;
