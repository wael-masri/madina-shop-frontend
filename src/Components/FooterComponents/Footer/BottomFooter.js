import React from 'react'
import {
    DivElements,
    Wrapper,
    WrapperMed,
    PaymentImage,
    ContainerMedia,
    FacebookIcon,
    InstaIcon,
    WhatsAppIcons,
    TwitterIcons,
    CopyWrite,
  } from "./Style";
  import payment from "../../../Assets/Images/payment.png";
const BottomFooter = () => {
  return (
    <Wrapper>
        <DivElements>
          <ContainerMedia>
            <WrapperMed
              to="https://www.facebook.com/wael.masri.79/"
              target="_blank"
              color="#4267B2"
            >
              <FacebookIcon />
            </WrapperMed>
            <WrapperMed
              to="https://www.instagram.com/wael.el.masri/"
              target="_blank"
              color="#F56040"
            >
              <InstaIcon />
            </WrapperMed>
            <WrapperMed
              to="https://twitter.com/masrii_wael"
              target="_blank"
              color="#1DA1F2"
            >
              <TwitterIcons />
            </WrapperMed>
            <WrapperMed
              to="https://web.whatsapp.com/"
              target="_blank"
              color="#25D366"
            >
              <WhatsAppIcons />
            </WrapperMed>
          </ContainerMedia>
        </DivElements>
        <DivElements>
          <CopyWrite>
            © {new Date().getFullYear()} All Rights Reserved by WaelMasri
          </CopyWrite>
        </DivElements>
        <DivElements>
          <PaymentImage src={payment} alt="payment" />
        </DivElements>
      </Wrapper>
  )
}

export default BottomFooter