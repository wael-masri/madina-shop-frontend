import React from 'react'
import {
    DivElements,
    ItemUl,
    ItemLi,
    MediumTitle,
  } from "./Style";
import { useNavigate } from 'react-router-dom';
const AccountLinks = ({splitLocation}) => {
    const navigate = useNavigate();
  return (
    <DivElements>
    <ItemUl>
      <MediumTitle>My Account</MediumTitle>
      <ItemLi
        onClick={() => navigate("/profile")}
        focused={splitLocation[1] === "profile"}
      >
        My Account
      </ItemLi>
      <ItemLi
        onClick={() => navigate("/cart")}
        focused={splitLocation[1] === "cart"}
      >
        My Cart
      </ItemLi>
      <ItemLi
        onClick={() => navigate("/wishlist")}
        focused={splitLocation[1] === "wishlist"}
      >
        My Wishlist
      </ItemLi>
      <ItemLi
        onClick={() => navigate("/order")}
        focused={splitLocation[1] === "order"}
      >
        Order Tracking
      </ItemLi>
    </ItemUl>
  </DivElements>
  )
}

export default AccountLinks