import styled from "styled-components";
import { Modal } from "antd";

export const FieldDiv = styled.div`
  padding: 10px;
`;
export const Container = styled.div`
  max-width: 1400px;
  margin: 100px auto;
`;
export const ErrorDiv = styled.div`
  color: red;
`;

export const ModalBox = styled(Modal)`
   .ant-modal-footer{
     padding:18px 16px;
   }

  .ant-modal-title{
    color:grey;
  }
  p {
    font-size: 27px;
    text-align: center;
    padding: 0px;
    margin: 0px;
    @media (min-width:1024px){
      font-size:35px;
    }
  }
  .ant-modal-footer div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .ant-btn {
    padding: 1.5% 8%;
    
    
  }
  .ant-btn-primary {
    padding: 1.5% 10%;
    
    
    margin-left:0px;
  }
  
`;
