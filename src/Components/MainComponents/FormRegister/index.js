import React, { useState } from "react";
import {
  Container,
  Wrapper,
  FirstWrap,
  SecondWrap,
  LogoImage,
  WrapperTitle,
  ButtonLogin,
  HelpLogin,
  LabelLogin,
} from "./Style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../../Api/AuthApi";
import FormInputs from "./FormInputs";
import { toast } from "react-toastify";
const LoginForm = () => {
  const [isCheck, setIsCheck] = useState(false);
  const navigate = useNavigate();
  const SigninSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password Required!")
      .min(8, "Password is too short!"),
    confirmpassword: yup
      .string()
      .required("Password Required!")
      .oneOf([yup.ref("password"), null], "Your passwords do not match."),
    name: yup
      .string()
      .required("Username Required!")
      .min(3, "Username is too short!"),
    email: yup.string().email("Invalid email!").required("Email Required!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  const handleSubmitRegister = async (data) => {
    if (isCheck) {
      let newAccount = {};
      newAccount.name = data.name.trim();
      newAccount.email = data.email.trim();
      newAccount.password = data.password.trim();
      await AuthApi.create(newAccount)
        .then(async (response) => {
          let newObj = {};
          newObj.email = newAccount.email;
          await AuthApi.sendEmailVerify(newObj)
            .then((response) => {
              navigate("/verifyEmail", { state: { newObj } });
            })
            .catch((err) => {
              toast(err.data.errors[0].msg, { containerId: "F" });
              reset();
            });
        })
        .catch((err) => {
          toast(err.data.errors[0].msg, { containerId: "F" });
          reset();
        });
    }
  };

  return (
    <Container>
      <WrapperTitle>Sign In</WrapperTitle>
      <form onSubmit={handleSubmit(handleSubmitRegister)}>
        <Wrapper>
          <FirstWrap>
            <FormInputs
              control={control}
              errors={errors}
              isCheck={isCheck}
              setIsCheck={setIsCheck}
            />
            <ButtonLogin type="submit">Register Now</ButtonLogin>
          </FirstWrap>
          <SecondWrap>
            <LogoImage src={logo} alt="logopic" />
          </SecondWrap>
        </Wrapper>
      </form>
      <HelpLogin>
        <LabelLogin onClick={() => navigate("/login")}>
          I am already have an account
        </LabelLogin>
      </HelpLogin>
    </Container>
  );
};

export default LoginForm;
