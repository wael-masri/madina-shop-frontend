import React, { useState, useRef } from "react";
import Countdown from "react-countdown";
import {
  ContainerComp,
  WrapperTtitle,
  Title,
  SubTitle,
  VerificationInputStyled,
  WrapperBoxReset,
  WrapperContentReset,
  TitleReset,
  TextReset,
  SendCode,
  ButtonConfirmCode,
  ErrMsg,
  WrapperInputPassword,
} from "./Style";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputProfile from "./InputProfile";
import { useSelector } from "react-redux";
import AuthApi from "../../../Api/AuthApi";
import { Navigate, useNavigate } from "react-router-dom";

const ChangePasswrod = () => {
  const Navigate = useNavigate();
  const userLogin = useSelector((state) => state.dataStatic.userLogin);
  const [code, setCode] = useState(0);
  const [isTimer, setIsTimer] = useState(false);
  const [steps, setSteps] = useState(1);
  const refTimer = useRef();
  const resetPasswordSchema = yup.object().shape({
    password: yup.string().min(8, "Too Short!").required("Password Required!"),
    confirmPassword: yup
      .string()
      .min(8, "Too Short!")
      .required("Confirm Password Required!")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const handleStart = async (e) => {
    let newObject = {};
    newObject.email = userLogin.email;
    try {
      const res = await AuthApi.forgetPassword(newObject);
      res && setIsTimer(true);
    } catch (err) {
      console.log(err.data.message);
    }

    refTimer.current?.start();
  };
  const handleConfirmCode = async () => {
    let newObject = {};
    const resetCode = code.trim();
    newObject = { resetCode };
    if (resetCode.length > 5) {
      try {
        const res = await AuthApi.verifyPassword(newObject);
        res && setSteps(2);
      } catch (err) {
        console.log(err.data.message);
      }
    }
  };
  const handleSubmitReset = async (data) => {
    let newObject = {};
    const newPassword = data.password.trim();
    const email = userLogin.email;

    newObject = { email, newPassword };
    try {
      const res = await AuthApi.resetPassword(newObject);
      res && Navigate("/");
    } catch (err) {
      console.log(err.data.message);
    }
  };
  return (
    <ContainerComp>
      <WrapperTtitle>
        <Title>Change Password</Title>
        <SubTitle>
          Edit your account settings and change your password here.
        </SubTitle>
      </WrapperTtitle>

      {steps === 1 ? (
        <WrapperBoxReset>
          <WrapperContentReset>
            <TitleReset>Reset Password</TitleReset>
            <TextReset>
              You have requested a password reset. To get a new password, please
              chaeck your inbox for the red email from madinaShop and enter the
              password reset code we have set to :{userLogin.email}.
              {isTimer ? (
                <Countdown
                  date={Date.now() + 60000}
                  ref={refTimer}
                  renderer={({ hours, minutes, seconds, completed }) => {
                    if (completed) {
                      // Render a completed state
                      setIsTimer(false);
                    } else {
                      // Render a countdown
                      return (
                        <SendCode>
                          Wait please ({minutes}:{seconds})
                        </SendCode>
                      );
                    }
                  }}
                />
              ) : (
                <SendCode onClick={() => handleStart()}>
                  Send code here
                </SendCode>
              )}
            </TextReset>
            <VerificationInputStyled
              onChange={(e) => setCode(e)}
              length={6}
              validChars={"0-9"}
              placeholder=""
              autoFocus={"true"}
            />
            <ButtonConfirmCode onClick={() => handleConfirmCode()}>
              Confirm
            </ButtonConfirmCode>
          </WrapperContentReset>
        </WrapperBoxReset>
      ) : (
        <WrapperBoxReset>
         
            <WrapperContentReset>
              <TitleReset>Reset Password</TitleReset>
               <form onSubmit={handleSubmit(handleSubmitReset)}>
              <WrapperInputPassword>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, name, value } }) => (
                    <InputProfile
                      type="text"
                      placeholder="New Password"
                      value={value || ""}
                      name={name}
                      onChange={onChange}
                    />
                  )}
                />
                <ErrMsg>{errors.password?.message}</ErrMsg>
              </WrapperInputPassword>
              <WrapperInputPassword>
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field: { onChange, name, value } }) => (
                    <InputProfile
                      type="text"
                      placeholder="Confirm Password"
                      value={value || ""}
                      name={name}
                      onChange={onChange}
                    />
                  )}
                />
                <ErrMsg>{errors.confirmPassword?.message}</ErrMsg>
              </WrapperInputPassword>
              
              <ButtonConfirmCode type="submit">
                Reset Password
              </ButtonConfirmCode>
              </form>
            </WrapperContentReset>
          
        </WrapperBoxReset>
      )}
    </ContainerComp>
  );
};

export default ChangePasswrod;
