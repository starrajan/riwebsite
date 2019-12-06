import styled from "styled-components";

import { screenSizes } from "../../../shared/styles/theme";
import { Menu, Button } from "antd";
interface Props {
  sholdBgChange: boolean;
}

export const NavBar = styled.div<Props>`
  width: 100%;
  max-width: 1500px;
  margin: auto;
  position: fixed;
  z-index: 2 !important;
  display: flex;
  padding: 10px 0 5px 0;
  background: ${props =>
    props.sholdBgChange ? "transparent !important" : "white"};
  border-bottom: ${props =>
    props.sholdBgChange ? "none" : "1px solid #f3f1f1"};
  @media (min-width: ${screenSizes.mediaL}px) {
    justify-content: space-around;
  }
`;
export const LogoDiv = styled.div`
  //background:url
  padding: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.065em;
  color: #000000;
  display: flex;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 20px;
  }
`;

export const LogoImage = styled.img`
  height: 45px;
  margin-right: 5px;
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 65px;
  }
`;

export const MenuDiv = styled(Menu)<any>`
  list-style-type: none;
  font-weight: normal;
  letter-spacing: 0.14em;
  margin-top: 13px !important;
  background: transparent !important;
  border: none !important;
  position: absolute;
  top: 69px;
  right: 1px;
  @media (max-width: ${screenSizes.mediaS}px) {
    background: white !important;
  }

  @media (min-width: ${screenSizes.mediaL}px) {
    display: inline-flex;
    font-style: normal;
    position: initial;
  }
  display: ${props => (props.show ? "none" : "block")};
`;

export const MenuItemDiv = styled(Menu.Item)`
  font-size: 15px;
  padding: 10px;
`;
export const MobileButton = styled(Button)`
  display: block;
  margin: 20px 20px 0px auto;

  @media (min-width: ${screenSizes.mediaL}px) {
    display: none !important;
  }
`;
