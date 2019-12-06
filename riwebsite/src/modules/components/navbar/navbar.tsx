import React, { useState, useEffect } from "react";
import { Icon } from "antd";

import { Link } from "react-router-dom";

import {
  LogoDiv,
  NavBar,
  LogoImage,
  MenuDiv,
  MenuItemDiv,
  MobileButton
} from "./style";

import Union from "../../../assets/images/Union.svg";
// interface MenuDivProps{
//   show: boolean
// }

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log(" window.pageYOffset", window.pageYOffset);

    const visible = window.pageYOffset === 0;

    setVisible(visible);
  };

  return (
    <NavBar sholdBgChange={visible}>
      <Link to="/">
        <LogoDiv>
          <LogoImage src={Union} />
          RAPID <br />
          INNOVATION
        </LogoDiv>
      </Link>

      <MobileButton type="primary" onClick={() => setShow(!show)}>
        <Icon type={show ? "menu-unfold" : "menu-fold"} />
      </MobileButton>

      <MenuDiv show={show ? 1 : 0}>
        <MenuItemDiv>
          <Link to="/about">About Us</Link>
        </MenuItemDiv>

        <MenuItemDiv>
          <Link to="/whyrapid">Why Rapid Innovation</Link>
        </MenuItemDiv>

        <MenuItemDiv>
          <Link to="/team">Team</Link>
        </MenuItemDiv>

        <MenuItemDiv>
          <Link to="/ourclients">Our Clients</Link>
        </MenuItemDiv>

        <MenuItemDiv>
          <Link to="/meeting">Request A Meeting</Link>
        </MenuItemDiv>

        <MenuItemDiv>
          <Link to="/createtoken">Create EOS Token</Link>
        </MenuItemDiv>
      </MenuDiv>
    </NavBar>
  );
}
