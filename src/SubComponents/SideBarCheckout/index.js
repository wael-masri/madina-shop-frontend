import React, { useState } from "react";
import {
  WrapperCheckout,
  Title,
  WrapperTitle,
  Info,
  WrapperInfo,
  Line,
  WrapperButtonCheckout,
  ButtonCheckout,
} from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { applyCouponCart } from "../../Redux/Actions/CartActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Shipping from "./Shipping";
import Coupon from "./Coupon";
import InfoPrice from "./InfoPrice";
import { toast } from "react-toastify";

const SideBarCheckout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [shippingCost, setShippingCost] = useState(0);
  const [promoValue, setPromoValue] = useState("");
  const [errPromo, setErrPromo] = useState("");
  const dataStatic = useSelector((state) => state.dataStatic);
  const cartData = useSelector((state) => state.cart.data);
  const errCoupon = useSelector((state) => state.cart);
  const shippingSchema = yup.object().shape({
    shipping: yup.string().required("Shipping is Required !"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(shippingSchema),
  });
  const handleChangeShipping = (value) => {
    setShippingCost(parseInt(value));
  };
  const submitCheckout = (data) => {
    let shippingCost = {};
    if (dataStatic.userLogin._id) {
      if (cartData.data.cartItems && cartData.data.cartItems.length !== 0) {
        if (parseInt(data.shipping) === 10) {
          shippingCost.shipping = 10;
          shippingCost.status = "Standard";
        } else if (parseInt(data.shipping) === 15) {
          shippingCost.shipping = 15;
          shippingCost.status = "express";
        } else {
          shippingCost.shipping = 22;
          shippingCost.status = "2 day shipping";
        }
        secureLocalStorage.setItem(
          "shippingCost",
          JSON.stringify(shippingCost)
        );
        secureLocalStorage.setItem("menuOrder", 1);
        navigate("/checkout");
      }
    } else {
      navigate("/login");
    }
  };
  const handleSubmitPromo = () => {
    if (dataStatic.userLogin._id) {
      if (promoValue === "") {
        setErrPromo("Promo is Required !");
      } else {
        if (cartData.data && cartData.data.totalCartPrice > 0) {
          setErrPromo("");
          applyCouponCart(dispatch, { coupon: promoValue });
          toast("Price discount applied", { containerId: "S" });
        }
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <WrapperCheckout>
      <form onSubmit={handleSubmit(submitCheckout)}>
        <WrapperTitle>
          <Title>Checkout</Title>
        </WrapperTitle>
        <WrapperInfo>
          <Info>
            {(cartData.numOfCartItems &&
              (cartData.numOfCartItems === 1
                ? `Item ${cartData.numOfCartItems}`
                : `Items ${cartData.numOfCartItems}`)) ||
              "No Items"}
          </Info>
          <Info>${(cartData.data && cartData.data.totalCartPrice) || 0}</Info>
        </WrapperInfo>
        <Shipping
          control={control}
          errors={errors}
          handleChangeShipping={handleChangeShipping}
        />
        <Coupon
          setPromoValue={setPromoValue}
          handleSubmitPromo={handleSubmitPromo}
          promoValue={promoValue}
          errPromo={errPromo}
        />
        <Line />
        <InfoPrice shippingCost={shippingCost} />
        <WrapperButtonCheckout>
          <ButtonCheckout type="submit">Checkout</ButtonCheckout>
        </WrapperButtonCheckout>
      </form>
    </WrapperCheckout>
  );
};

export default SideBarCheckout;
