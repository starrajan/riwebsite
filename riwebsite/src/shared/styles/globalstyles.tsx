import { createGlobalStyle } from "styled-components";
import { ModalBox } from "../../modules/components/pages/eostoken/styles";
import { CollapseDiv } from "../componets/treedrop/style";
import {
  FirstCheckbox,
  SecondCheckbox
} from "../../modules/components/pages/eostoken/subpremium/style";

export const GlobalStyle = createGlobalStyle`


.ant-menu-item > a:hover {
  color: #000000 !important;
}
.ant-menu-item-selected > a {
  color:#000000 !important;
}

.ant-menu-item-selected > a:hover{
  border-bottom: 2px solid black !important;
}

// .ant-menu-item:active{
//   border-bottom: 2px solid black;
//   background-color:transparent!important;
// }


.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  border-bottom: 2px solid black;
  background-color:transparent !important;
  :hover{
    border-bottom:2px solid black !important;
  }


 }
.ant-menu-item:hover{
  border-bottom: 2px solid #dbdbdb !important;
  
}


.ant-calendar-picker-input.ant-input {

  height:42px;
}

${ModalBox}{

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

  margin-left: 0px;
}
}

.ant-modal-footer {
  padding: 18px 16px;
}

.ant-modal-title {
  color: grey;
}



${CollapseDiv}{


  .ant-collapse-content-active{

    margin-left:-22px !important;
    padding:48px 0 25px 0;

  }
  .ant-calendar-picker{
    display:block;
  }

  .ant-collapse-content-box{
    padding:0px !important;
  }
}


${FirstCheckbox}{

  .ant-checkbox +span{
    font-size:15px;
    margin-right: 100px;
  }
}
${SecondCheckbox}{
  .ant-checkbox +span{
    font-size:15px;
    
  }
}

`;
