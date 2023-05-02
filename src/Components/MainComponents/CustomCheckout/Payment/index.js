import React, { useEffect, useState } from "react";
import {
  Container,
  SubTitle,
  SubText,
  WrapperButtons,
  ButtonContinue,
  IconPrev,
  ButtonReturn,
  WrapperErr,
  ErrGlobal,
  LoadButton,
  ButtonContinueLoading,
} from "./Style";
import lodingButton from "../../../../Assets/Images/LoadingButton.gif";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOrder } from "../../../../Redux/Actions/DataStaticActions";
import secureLocalStorage from "react-secure-storage";
import AuthApi from "../../../../Api/AuthApi";
import BoxHeaderInfo from "./BoxHeaderInfo";
import BoxPaymentChoice from "./BoxPaymentChoice";
import OrderApi from "../../../../Api/OrderApi";
import { useNavigate } from "react-router-dom";
import { clearAccount } from "../../../../Redux/Actions/CartActions";
import FormInputs from "./FormInputs";
const Payment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dataStatic = useSelector((state) => state.dataStatic);
  const cart = useSelector((state) => state.cart.data);

  const verifySchema = yup.object().shape({
    password: yup
      .string()
      .required("Password Required!")
      .min(8, "Password is too short!"),

    email: yup.string().email("Invalid email!").required("Email Required!"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(verifySchema),
  });
  const [ispaymentMethod, setIspaymentMethod] = useState("cash");
  const [globalErr, setGlobalErr] = useState({
    errData: "",
  });
  const dispatch = useDispatch();
  const informationOrder = JSON.parse(
    secureLocalStorage.getItem("informationOrder")
  );
  const shipping = JSON.parse(secureLocalStorage.getItem("shippingCost"));

  useEffect(() => {
    if (!(informationOrder && Object.keys(informationOrder).length !== 0)) {
      dispatch(setMenuOrder(1));
      secureLocalStorage.setItem("menuOrder", 1);
    }
  }, []);
  const changeInfo = () => {
    dispatch(setMenuOrder(1));
    secureLocalStorage.setItem("menuOrder", 1);
  };
  const togglePayment = (val) => {
    setIspaymentMethod(val);
  };
  const handlePayOrder = async (data) => {
    let authData = {};
    setLoading(true);
    if (
      informationOrder &&
      shipping &&
      Object.keys(informationOrder).length !== 0 &&
      Object.keys(shipping).length !== 0
    ) {
      if (dataStatic.userLogin.googleId) {
        setGlobalErr((prevState) => ({
          ...prevState,
          errData: "",
        }));
        if (ispaymentMethod === "cash") {
          let shippingAddress = { ...informationOrder };
          let shippingPrice = shipping.shipping;
          // const res = await OrderApi.create(cart.data,{shippingAddress,shippingPrice});
          const res = await OrderApi.create(cart.data._id, {
            shippingAddress,
            shippingPrice,
          });
          if (res) {
            secureLocalStorage.removeItem("shippingCost");
            secureLocalStorage.removeItem("informationOrder");
            secureLocalStorage.removeItem("menuOrder");
            dispatch(clearAccount());
            setLoading(false);
            navigate("/");
          }
        } else {
          let shippingAddress = { ...informationOrder };
          let shippingPrice = shipping.shipping;
          let objectData = { shippingAddress, shippingPrice };
          const resp = await OrderApi.checkoutSession(
            cart.data._id,
            objectData
          );
          if (resp) {
            window.location.replace(resp.session.url);
          }
        }
      } else {
        const email = data.email.trim();
        const password = data.password.trim();
        authData = { email, password };
        await AuthApi.signin(authData)
          .then(async (response) => {
            if (response._id === dataStatic.userLogin._id) {
              setGlobalErr((prevState) => ({
                ...prevState,
                errData: "",
              }));
              if (ispaymentMethod === "cash") {
                let shippingAddress = { ...informationOrder };
                let shippingPrice = shipping.shipping;
                // const res = await OrderApi.create(cart.data,{shippingAddress,shippingPrice});
                const res = await OrderApi.create(cart.data._id, {
                  shippingAddress,
                  shippingPrice,
                });
                if (res) {
                  secureLocalStorage.removeItem("shippingCost");
                  secureLocalStorage.removeItem("informationOrder");
                  secureLocalStorage.removeItem("menuOrder");
                  dispatch(clearAccount());
                  setLoading(false);
                  navigate("/");
                }
              } else {
                let shippingAddress = { ...informationOrder };
                let shippingPrice = shipping.shipping;
                let objectData = { shippingAddress, shippingPrice };
                const resp = await OrderApi.checkoutSession(
                  cart.data._id,
                  objectData
                );
                if (resp) {
                  window.location.replace(resp.session.url);
                }
              }
            } else {
              setGlobalErr((prevState) => ({
                ...prevState,
                errData: "This user not Compatible with your account !",
              }));
              setLoading(false);
            }
          })
          .catch((err) => {
            setGlobalErr((prevState) => ({
              ...prevState,
              errData: "Incorrect email or password !",
            }));
            setLoading(false);
          });
      }
    } else {
      setLoading(false);
      setGlobalErr((prevState) => ({
        ...prevState,
        errData: "There is missing personal or shipping information",
      }));
    }
  };

  return (
    <Container>
      <BoxHeaderInfo
        changeInfo={changeInfo}
        shipping={shipping}
        informationOrder={informationOrder}
      />
      <SubTitle>Payment method</SubTitle>
      <SubText>All transactions are secure and encrypted.</SubText>
      <BoxPaymentChoice
        ispaymentMethod={ispaymentMethod}
        togglePayment={togglePayment}
      />
      <form onSubmit={handleSubmit(handlePayOrder)}>
        {!dataStatic.userLogin.googleId ? (
          <FormInputs control={control} errors={errors} />
        ) : null}

        <WrapperButtons>
          <ButtonReturn>
            <IconPrev /> Return to Shipping
          </ButtonReturn>

          {loading ? (
            <ButtonContinueLoading>
              Pay Now
              <LoadButton src={lodingButton} alt="gif" />
            </ButtonContinueLoading>
          ) : dataStatic.userLogin.googleId ? (
            <ButtonContinue onClick={handlePayOrder}>Pay Now</ButtonContinue>
          ) : (
            <ButtonContinue type="submit">Pay Now</ButtonContinue>
          )}
        </WrapperButtons>
        {globalErr.errData ? (
          <WrapperErr>
            <ErrGlobal>{globalErr.errData}</ErrGlobal>
          </WrapperErr>
        ) : null}
      </form>
    </Container>
  );
};

export default Payment;
