import React from "react";
import CardCart from "../../../SubComponents/CardCart";
import SideBarCheckout from "../../../SubComponents/SideBarCheckout";
import {
  Container,
  WrapperCartItems,
  WrapperCheckout,
  Title,
  SpanTitle,
  WrapperTitle,
  WrapperTitleCart,
  ImageTitleCart,
  TitleCart,
  WrapperCartItem,
  WrapperEmptyCart,
  EmptyCartButton,
  ContinueShopping,
  LeftIcon,
  EmptyCartLabel,
} from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAllCart } from "../../../Redux/Actions/CartActions";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.data);


  return (
    <Container>
      <WrapperCartItems>
        <WrapperTitle>
          <Title>Shopping Cart</Title>
          <SpanTitle>
            {(cartData.numOfCartItems &&
              (cartData.numOfCartItems === 1
                ? `${cartData.numOfCartItems} Item`
                : `${cartData.numOfCartItems} Items`)) ||
              "No Items"}
          </SpanTitle>
        </WrapperTitle>
        <WrapperTitleCart>
          <ImageTitleCart>PRODUCT DETAILS</ImageTitleCart>
          <TitleCart>QUANTITY</TitleCart>
          <TitleCart>PRICE</TitleCart>
          <TitleCart>TOTAL</TitleCart>
        </WrapperTitleCart>
        {cartData.data &&
          cartData.data.cartItems.map((val, index) => {
            return (
              <WrapperCartItem key={val._id}>
                <CardCart data={val} />
              </WrapperCartItem>
            );
          })}
        {!cartData.data && <EmptyCartLabel>No Cart Items</EmptyCartLabel>}
        <WrapperEmptyCart>
          <ContinueShopping onClick={() => navigate("/category")}>
            <LeftIcon /> Continue Shopping
          </ContinueShopping>
          {cartData.data && cartData.data.cartItems.length !== 0 && (
            <EmptyCartButton onClick={() => clearAllCart(dispatch)}>Empty Cart</EmptyCartButton>
          )}
        </WrapperEmptyCart>
      </WrapperCartItems>
      <WrapperCheckout>
        <SideBarCheckout />
      </WrapperCheckout>
    </Container>
  );
};

export default Cart;
