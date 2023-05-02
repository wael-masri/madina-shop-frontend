import React, { useState } from "react";
import {
  Container,
  Wrapper,
  WrapperTitle,
  Title,
  WrapperFields,
  SubTitle,
  SubText,
  ButtonSendmsg,
  WrapperButtonSendmsg,
  IconSend,
  Colored,
} from "./Style";
import LoadingImage from "../../../Assets/Images/LoadingButton.gif";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthApi from "../../../Api/AuthApi";
import { LoadButton } from "../../../Assets/CustomCss/GlobalStyles";
import FormInputs from "./FormInputs";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [isLoad, setIsLoad] = useState(false);
  const phoneRegExp =
    /^(961(3|70|71|76|81|01|06)|(03|70|71|76|81|01|06))\d{6}$/;
  const personalInformationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email Required!")
      .email("Email is not valid !"),
    name: yup
      .string()
      .required("Name is Required !")
      .min(3, "Name is Too Short!"),
    description: yup
      .string()
      .required("Description is Required !")
      .min(10, "Description is Too Short!"),
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
  const handleSendData = async (data) => {
    let objectSend = {};
    setIsLoad(true);
    objectSend.name = data.name.trim();
    objectSend.email = data.email.trim();
    objectSend.description = data.description.trim();
    objectSend.phone = data.phone.trim();
    const res = await AuthApi.sendEmail(objectSend);
    if (res) {
      setIsLoad(false);
      toast("Your message has been sent", { containerId: "S" });
      reset();
    }
  };
  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit(handleSendData)}>
          <WrapperTitle>
            <Title>
              Contact <Colored>Us</Colored>
            </Title>
            <WrapperFields>
              <SubTitle>Write Us</SubTitle>
              <SubText>
                Jot us a note and we’ll get back to you as quickly as possible.
              </SubText>
              <FormInputs control={control} errors={errors} />
              <WrapperButtonSendmsg>
                {isLoad ? (
                  <ButtonSendmsg isLoad={isLoad}>
                    Send <LoadButton src={LoadingImage} alt="load" />
                  </ButtonSendmsg>
                ) : (
                  <ButtonSendmsg type="submit">
                    Send <IconSend />
                  </ButtonSendmsg>
                )}
              </WrapperButtonSendmsg>
            </WrapperFields>
          </WrapperTitle>
        </form>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
