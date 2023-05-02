import React from "react";
import { useSelector } from "react-redux";
import { WrapperPriceBox, LabelPrice, PriceValue } from "./Style";
import  secureLocalStorage  from  "react-secure-storage";
const InfoPrice = () => {
  const dataCart = useSelector((state) => state.cart.data);
  const shippingCost = JSON.parse(secureLocalStorage.getItem("shippingCost"));
  return (
    <>
      <WrapperPriceBox>
        <LabelPrice>Subtotal</LabelPrice>
        <PriceValue>
          $
          {dataCart.data &&
            (dataCart.data.totalPriceAfterDiscount
              ? dataCart.data.totalPriceAfterDiscount
              : dataCart.data.totalCartPrice)}
        </PriceValue>
      </WrapperPriceBox>
      <WrapperPriceBox>
        <LabelPrice shipping="true">Shipping</LabelPrice>
        <PriceValue shipping="true">
          ${(shippingCost && shippingCost.shipping) || 0}
        </PriceValue>
      </WrapperPriceBox>
      <WrapperPriceBox>
        <LabelPrice bolder="true">Total</LabelPrice>
        <PriceValue colored="true">
          USD $
          {dataCart.data &&
            shippingCost &&
            (dataCart.data.totalPriceAfterDiscount
              ? dataCart.data.totalPriceAfterDiscount + shippingCost.shipping
              : dataCart.data.totalCartPrice + shippingCost.shipping)}
        </PriceValue>
      </WrapperPriceBox>
    </>
  );
};

export default InfoPrice;
