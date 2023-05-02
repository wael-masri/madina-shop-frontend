import React from "react";
import { Containerfo, Line, WrapperLinks, Links, CopyWrite } from "./Style";

const FooterMini = () => {
  return (
    <Containerfo>
      <Line />
      <WrapperLinks>
        <Links to="">Condition of Use</Links>
        <Links to="">Privacy Notice</Links>
        <Links to="">Help</Links>
      </WrapperLinks>
      <CopyWrite>© {new Date().getFullYear()} All Rights Reserved by WaelMasri</CopyWrite>
    </Containerfo>
  );
};

export default FooterMini;
