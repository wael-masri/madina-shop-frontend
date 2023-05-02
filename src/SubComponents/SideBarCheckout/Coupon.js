import React from 'react'
import {
    WrapperSubTitle,
    WrapperInput,
    WrapperButtonPromo,
    ButtonPromo,
    ErrMsg,
    FieldsInput,
  } from "./Style";
const Coupon = ({setPromoValue,handleSubmitPromo,promoValue,errPromo}) => {
  return (
    <>
     <WrapperSubTitle>PROMO CODE</WrapperSubTitle>
        <WrapperInput>
          <FieldsInput
            type="text"
            placeholder="Enter your code"
            name="promo"
            value={promoValue}
            onChange={(e) => setPromoValue(e.target.value)}
          />
        </WrapperInput>
        {errPromo !== "" ? <ErrMsg>{errPromo}</ErrMsg> : null}
        <WrapperButtonPromo>
          <ButtonPromo onClick={() => handleSubmitPromo()}>APLLY</ButtonPromo>
        </WrapperButtonPromo>
    </>
  )
}

export default Coupon