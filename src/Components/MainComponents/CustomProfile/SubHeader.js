import React from "react";
import {CoverImage, LogoImage, WrapperSubHeader } from "./Style";
import Map from "../../../Assets/Images/map.png";
import Logo from "../../../Assets/Images/logo.png";
const SubHeader = () => {
  return (
    <WrapperSubHeader>
      <LogoImage src={Logo} alt="logo" />
      <CoverImage src={Map} alt="coverpic" />
    </WrapperSubHeader>
  );
};

export default SubHeader;
