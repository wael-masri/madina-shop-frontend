import React from 'react'
import {
    Info,
    WrapperInfo,
    Colored,
  } from "./Style";
import { useSelector } from 'react-redux';
const InfoPrice = ({shippingCost}) => {
    const cartData = useSelector((state) => state.cart.data);
  return (
   <>
    <WrapperInfo>
          <Info>Shipping</Info>
          <Info>
            <Colored>${shippingCost}</Colored>
          </Info>
        </WrapperInfo>

        <WrapperInfo>
          <Info>Discount Coupon</Info>
          <Info>
            <Colored>
              $
              {(cartData.data &&
                cartData.data.totalPriceAfterDiscount > 0 &&
                cartData.data.totalPriceAfterDiscount + shippingCost) ||
                0}
            </Colored>
          </Info>
        </WrapperInfo>
        <WrapperInfo>
          <Info>TOTAL COST</Info>
          <Info>
            <Colored>
              $
              {cartData.data &&
                (cartData.data.totalPriceAfterDiscount > 0
                  ? cartData.data.totalPriceAfterDiscount + shippingCost
                  : cartData.data.totalCartPrice + shippingCost)}
            </Colored>
          </Info>
        </WrapperInfo>
   </>
  )
}

export default InfoPrice