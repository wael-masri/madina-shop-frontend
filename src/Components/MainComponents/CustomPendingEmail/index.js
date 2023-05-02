import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  BoxVerify,
  Logo,
  Title,
  SubTitle,
  Label,
  WrapperInputCode,
  ButtonSubmit,
  Colored,
  SubText,
  VerificationInputStyled,
} from "./Style";
import LogoImage from "../../../Assets/Images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import AuthApi from "../../../Api/AuthApi";
import { toast } from "react-toastify";
const CustomPendingEmail = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (state === null) {
      navigate("/register");
    }
  }, [state]);

 
  const navigate = useNavigate();
  const [code, setCode] = useState(0);

  const submitVerify = async () => {
    if (code.length === 6) {
      await AuthApi.verifyEmail({ resetCode: code })
        .then((response) => {
          navigate("/login");
        })
        .catch((err) => {
          err && toast('Invalid or expired code verfied!', {containerId: 'F'});
        });
    }
  };
  return (
    <Container>
      <Wrapper>
        <BoxVerify>
          <Logo src={LogoImage} alt="logo" />
          <Title>Please verify your email</Title>
          <SubTitle>You're almost there! we sent an email to</SubTitle>
          <SubText>
            {state && state.newObj?.email && state.newObj.email}
          </SubText>
          <SubTitle>
            Just check your email and verify code to complete your signup.
            <br />
            if you don't see it, you may to check your spam folder.
          </SubTitle>
          <Label>Verify Code Here :</Label>
          <WrapperInputCode>
            <VerificationInputStyled
              onChange={(e) => setCode(e)}
              length={6}
              validChars={"0-9"}
              placeholder=""
              autoFocus={"true"}
            />
          </WrapperInputCode>
          <ButtonSubmit onClick={() => submitVerify()}>
            VERIFY CODE
          </ButtonSubmit>
          <Label>
            Need hepl?{" "}
            <Colored onClick={() => navigate("/contact")}>Contact Us</Colored>
          </Label>
        </BoxVerify>
      </Wrapper>
    </Container>
  );
};

export default CustomPendingEmail;
