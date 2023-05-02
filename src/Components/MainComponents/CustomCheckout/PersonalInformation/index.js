import React, { useEffect } from "react";
import {
  Container,
  SubTitle,
  Title,
  WrapperInputFull,
  WrapperShippingAddress,
  WrapperButtons,
  ButtonContinue,
  ButtonReturn,
  IconNextButton,
  IconPrev,
  ErrMsg,
} from "./Style";
import InputOrder from "../InputOrder/index.js";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOrder } from "../../../../Redux/Actions/DataStaticActions";
import secureLocalStorage from "react-secure-storage";
import FormInputs from "./FormInputs";
const PersonalInformation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataStatic = useSelector((state) => state.dataStatic);
  const shippingCost = JSON.parse(secureLocalStorage.getItem("shippingCost"));
  const oldData = JSON.parse(secureLocalStorage.getItem("informationOrder"));
  const phoneRegExp =
    /^(961(3|70|71|76|81|01|06)|(03|70|71|76|81|01|06))\d{6}$/;
  const personalInformationSchema = yup.object().shape({
    contact: yup
      .string()
      .required("Email Required!")
      .email("Email is not valid !"),
    firstName: yup
      .string()
      .required("First Name is Required !")
      .min(3, "First Name is Too Short!"),
    lastName: yup
      .string()
      .required("Last Name is Required !")
      .min(3, "Last Name is Too Short!"),
    address: yup
      .string()
      .required("Address is Required !")
      .min(10, "Address is Too Short!"),
    appartment: yup
      .string()
      .required("Appartment is Required !")
      .min(3, "Appartment is Too Short!"),
    city: yup.string().required("City is Required !"),
    phone: yup
      .string()
      .required("Phone is Required !")
      .matches(phoneRegExp, "Phone number is not valid"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(personalInformationSchema),
  });

  useEffect(() => {
    if (oldData) {
      reset(oldData);
    }
  }, []);
  const handleSubmitInformation = (data) => {
    let information = { ...data };
    if (shippingCost && Object.keys(shippingCost).length !== 0) {
      if (
        dataStatic.userLogin &&
        Object.keys(dataStatic.userLogin).length !== 0
      ) {
        secureLocalStorage.setItem(
          "informationOrder",
          JSON.stringify(information)
        );
        dispatch(setMenuOrder(2));
        secureLocalStorage.setItem("menuOrder", 2);
      } else {
        navigate("/login");
      }
    } else {
      navigate("/cart");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSubmitInformation)}>
        <Title>PERSONAL INFORMATION</Title>
        <SubTitle>Contact</SubTitle>
        <WrapperInputFull>
          <Controller
            control={control}
            name="contact"
            render={({ field: { onChange, name, value } }) => (
              <InputOrder
                type="text"
                placeholder="Email"
                value={value || ""}
                name={name}
                onChange={onChange}
              />
            )}
          />
          <ErrMsg>{errors.contact?.message}</ErrMsg>
        </WrapperInputFull>
        <WrapperShippingAddress>
          <SubTitle>Shipping address</SubTitle>
          <FormInputs control={control} errors={errors} />
          <WrapperButtons>
            <ButtonReturn>
              <IconPrev /> Return to cart
            </ButtonReturn>
            <ButtonContinue type="submit">
              Continue To Shipping <IconNextButton />
            </ButtonContinue>
          </WrapperButtons>
        </WrapperShippingAddress>
      </form>
    </Container>
  );
};

export default PersonalInformation;
