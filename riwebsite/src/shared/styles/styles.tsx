import styled from "styled-components";
import { Field } from "formik";
import { screenSizes } from "./theme";

export const CommonHeading = styled.h1`
  font-size: 28px;
  line-height: 33px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #000000;
  //margin-left:20px;
  @media (min-width: ${screenSizes.mediaL}) {
    //text-align: initial;
  }
`;

export const FormLabel = styled.label`
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0.14em;
  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;
  color: rgba(0, 0, 0, 0.8);
`;
interface CaseType {
  casetransform: string;
}
export const FormField = styled(Field)<CaseType>`
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  padding: 0 10px;
  height: 42px;
  font-size: 14px;

  text-transform: ${props =>
    props.casetransform ? props.casetransform : null};

  &::placeholder {
    text-transform: capitalize;
  }
`;

export const CardContainer = styled.div<any>`
  margin: 0px auto 100px auto;
`;
