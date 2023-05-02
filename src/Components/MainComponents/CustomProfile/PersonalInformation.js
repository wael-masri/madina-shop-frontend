import React, { useEffect } from "react";
import {
  ContainerComp,
  WrapperTtitle,
  Title,
  SubTitle,
  WrapperFormInfo,
  WrapperInputFull,
  ErrMsg,
  WrapperButtonSaveInfo,
  ButtonSaveInfo,
} from "./Style";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import InputProfile from "./InputProfile";
import UserApi from "../../../Api/UserApi";
import { useNavigate } from "react-router-dom";
const PersonalInformation = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.dataStatic.userLogin);
  const phoneRegExp =
    /^(961(3|70|71|76|81|01|06)|(03|70|71|76|81|01|06))\d{6}$/;
  const personalInformationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email Required!")
      .email("Email is not valid !"),
    name: yup
      .string()
      .required("Username is Required !")
      .min(3, "Username is Too Short!"),
    phone: yup
      .string()
      .required("Phone is Required !")
      .matches(phoneRegExp, "Phone number is not valid"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isDirty },
    control,
  } = useForm({
    resolver: yupResolver(personalInformationSchema),
  });
  useEffect(() => {
    if (userLogin) {
      const { name, phone, email } = userLogin;
      reset({ name, phone, email });
    }
  }, []);

  const handleSubmitInformation = async (data) => {
    let updateProfile = {};
    if (isDirty) {
      Object.entries(dirtyFields).forEach((dirtyField) => {
        updateProfile[dirtyField[0]] = data[dirtyField[0]];
      });
      const res = await UserApi.update(userLogin._id, updateProfile);
      res && navigate("/")
    }
  };
  return (
    <ContainerComp>
      <WrapperTtitle>
        <Title>Personal Information</Title>
        <SubTitle>Add information about yourself</SubTitle>
      </WrapperTtitle>
      <form onSubmit={handleSubmit(handleSubmitInformation)}>
        <WrapperFormInfo>
          <WrapperInputFull>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, name, value } }) => (
                <InputProfile
                  type="text"
                  placeholder="Email"
                  value={value || ""}
                  name={name}
                  onChange={onChange}
                />
              )}
            />
            <ErrMsg>{errors.email?.message}</ErrMsg>
          </WrapperInputFull>
          <WrapperInputFull>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, name, value } }) => (
                <InputProfile
                  type="text"
                  placeholder="User Name"
                  value={value || ""}
                  name={name}
                  onChange={onChange}
                />
              )}
            />
            <ErrMsg>{errors.name?.message}</ErrMsg>
          </WrapperInputFull>
          <WrapperInputFull>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, name, value } }) => (
                <InputProfile
                  type="text"
                  placeholder="Phone Number"
                  value={value || ""}
                  name={name}
                  onChange={onChange}
                />
              )}
            />
            <ErrMsg>{errors.phone?.message}</ErrMsg>
          </WrapperInputFull>
          <WrapperButtonSaveInfo>
            <ButtonSaveInfo type="submit">Update</ButtonSaveInfo>
          </WrapperButtonSaveInfo>
        </WrapperFormInfo>
      </form>
    </ContainerComp>
  );
};

export default PersonalInformation;
