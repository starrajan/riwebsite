import React, { useState } from 'react'
import { Menu ,Button,Icon} from 'antd'
import styled from 'styled-components'
//import  {screenSizes}  from '../../shared/styles/theme' 
import GetStarted from '../app/button/getstarted'

import {
  Link
} from 'react-router-dom'


import { LogoDiv, NavBar, Paragraph, Heading, ChildDiv, DivWrapper } from './styles'


const MenuDiv = styled(Menu) <any>`
list-style-type:none;

font-style:normal;
font-weight:normal;
letter-spacing:0.14em;
margin-top:13px !important;
background: lavender !important;
position:absolute;
top:69px;
right:1px;
@media(min-width:1024px){
  position:initial;
}


@media (min-width:1024px){
  display:inline-flex;
}
display:${props => props.show ? "none" : "block"};

`;


const MenuItemDiv = styled(Menu.Item)`
font-size:15px;
padding:10px;


`;
const MobileButton = styled(Button)`
display:block;
margin: 20px 20px 0px auto;

@media (min-width:1024px){
  display:none !important;
}
`;

export default function Header() {



  const [show, setShow] = useState(true);
 
  return (
    <div>
      
      <NavBar>
        <Link to='/'><LogoDiv>RAPID<br /> INNOVATION</LogoDiv></Link>
        

        <MobileButton type="primary" onClick={() => setShow(!show)} >
          <Icon type={show ? 'menu-unfold' : 'menu-fold'} />
        </MobileButton>
       



        <MenuDiv show={show}>

          <MenuItemDiv><Link to="/about">About Us</Link></MenuItemDiv>

          <MenuItemDiv><Link to="/whyrapid">Why Rapid Innovation</Link></MenuItemDiv>

          <MenuItemDiv><Link to="/team">Team</Link></MenuItemDiv>

          <MenuItemDiv><Link to="/clients">Our Clients</Link></MenuItemDiv>

          <MenuItemDiv><Link to="/meeting">Request A Meeting</Link></MenuItemDiv>

          <MenuItemDiv><Link to="/createtoken">Create EOS Token</Link></MenuItemDiv>

        </MenuDiv>
      </NavBar>

      <DivWrapper>
        <ChildDiv>
          <Heading>BLOCKCHAIN INNOVATION</Heading>
          <Paragraph>Helping Entrepreneurs Change The World With Blockchain</Paragraph>

          <GetStarted/>

        </ChildDiv>

      </DivWrapper>





    </div>




  )
}