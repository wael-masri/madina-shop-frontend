import React, { useEffect } from "react";
import {
  Container,
  Wrapper,
  FirstWrap,
  SecondWrap,
  WrapperLogo,
  LogoImage,
  WrapperCreateAcc,
  CreateAcc,
  WrapperTitle,
  ButtonLogin,
  SpanOr,
  ButtonGoogleLogin,
  LogoGoogleImage,
  LabelGoogle,
  WrappLabelsGoogle,
  HelpLogin,
} from "./Style";
import {toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../Assets/Images/logo.png";
import logoGoogle from "../../../Assets/Images/logoGoogle.png";
import AuthApi from "../../../Api/AuthApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInputs from "./FormInputs";
const LoginForm = () => {
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      if (data.message === "Successfully Loged In") {
        localStorage.setItem("tokenMadinaShopWeb", data.user.tokenGoogle);
        navigate("/");
      }
    } catch (err) {
      const mute = err;
    }
  };
  useEffect(() => {
    getUser();
  });

  const navigate = useNavigate();
  const SigninSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password Required!")
      .min(8, "Password is too short!"),

    email: yup.string().email("Invalid email!").required("Email Required!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });


  const handleSubmitLogin = async (data) => {
    let newObject = {};
    const email = data.email.trim();
    const password = data.password.trim();
    newObject = { email, password };
    try {
      const res = await AuthApi.signin(newObject);
      if (res && res.active === true) {
        localStorage.setItem("tokenMadinaShopWeb", res.token);
        navigate("/");
      } else {
        toast('Sorry, this User is Blocked or deleted!', {containerId: 'F'});
      }
    } catch (err) {
      err && err.data.message && toast('Username or Password incorrect', {containerId: 'F'});
    }
  };

  const googleAuth = () => {
    window.open(`http://localhost:5000/api/auth/google/callback`, "_self");
  };

  return (
    <Container>
      <WrapperCreateAcc>
        <CreateAcc onClick={() => navigate("/register")}>
          Create Account
        </CreateAcc>
      </WrapperCreateAcc>
      <WrapperLogo>
        <LogoImage src={logo} alt="logopic" />
      </WrapperLogo>
      <WrapperTitle>Sign In</WrapperTitle>
      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <Wrapper>
          <FirstWrap>
            <FormInputs control={control} errors={errors} />
            <ButtonLogin type="submit">Log In</ButtonLogin>
            <SpanOr>Or</SpanOr>
          </FirstWrap>
          <SecondWrap>
            <ButtonGoogleLogin onClick={googleAuth}>
              <WrappLabelsGoogle>
                <LogoGoogleImage src={logoGoogle} alt="piclogo" />
                <LabelGoogle>Continue With Google</LabelGoogle>
              </WrappLabelsGoogle>
            </ButtonGoogleLogin>
          </SecondWrap>
        </Wrapper>
      </form>
      <HelpLogin>Can't log in?</HelpLogin>
    </Container>
  );
};

export default LoginForm;
