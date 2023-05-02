import React from 'react'
import {
    SubTitle,
    WrapperShippingMethod,
    LabelShippingMethod,
    LinkShippingMethod,
  } from "./Style";
const BoxShipping = ({shipping}) => {
  return (
    <>
      <SubTitle>Shipping Method</SubTitle>
      <WrapperShippingMethod>
        <LabelShippingMethod>{shipping && shipping.status}</LabelShippingMethod>
        <LinkShippingMethod>
          ${shipping && shipping.shipping}
        </LinkShippingMethod>
      </WrapperShippingMethod>
    </>
  )
}

export default BoxShipping