import React from "react";
import {
  DivElements,
  LogoFooter,
  ItemUl,
  ItemLi,
  Text,
  LocIcon,
  MailIcon,
  CallIcon,
} from "./Style";

import logo from "../../../Assets/Images/logo.png";
const InfoFooter = () => {
  return (
    <DivElements>
      <LogoFooter src={logo} alt="logofooter" />
      <Text>
        If you are going to use of Lorem Ipsum need to be sure there isn't
        anything hidden of text
      </Text>

      <ItemUl>
        <ItemLi>
          <LocIcon /> Tripoli, Lebanon
        </ItemLi>
        <ItemLi>
          <MailIcon /> wael.el.masri.1996@gmail.com
        </ItemLi>
        <ItemLi>
          <CallIcon /> + 961 71 620 485
        </ItemLi>
      </ItemUl>
    </DivElements>
  );
};

export default InfoFooter;
