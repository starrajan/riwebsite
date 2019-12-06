import styled from "styled-components";
import { Modal } from "antd";
import { screenSizes } from "../../../../shared/styles/theme";

export const FieldDiv = styled.div`
  margin-bottom: 40px;
`;
export const Container = styled.div`
  max-width: 1400px;
  margin: 100px 60px;
`;
export const ErrorDiv = styled.div`
  color: red;
`;

export const ModalBox = styled(Modal)`
  p {
    font-size: 27px;
    text-align: center;
    padding: 0px;
    margin: 0px;
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 35px;
    }
  }
`;
