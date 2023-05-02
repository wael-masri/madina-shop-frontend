import React from "react";
import InputOrder from "./InputOrder";
import { Controller } from "react-hook-form";
import { WrapperField, TextAreaContact, ErrMsg } from "./Style";
const FormInputs = ({ control, errors }) => {
  return (
    <>
      <WrapperField>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, name, value } }) => (
            <InputOrder
              type="text"
              placeholder="Name"
              value={value || ""}
              name={name}
              onChange={onChange}
            />
          )}
        />
        <ErrMsg>{errors.name?.message}</ErrMsg>
      </WrapperField>
      <WrapperField>
        <Controller
          control={control}
          name="email"
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
        <ErrMsg>{errors.email?.message}</ErrMsg>
      </WrapperField>
      <WrapperField>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, name, value } }) => (
            <InputOrder
              type="text"
              placeholder="Phone Number"
              value={value || ""}
              name={name}
              onChange={onChange}
            />
          )}
        />
        <ErrMsg>{errors.phone?.message}</ErrMsg>
      </WrapperField>
      <WrapperField>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, name, value } }) => (
            <TextAreaContact
              placeholder="What's on your mind?"
              onChange={onChange}
              value={value || ""}
            ></TextAreaContact>
          )}
        />
        <ErrMsg>{errors.description?.message}</ErrMsg>
      </WrapperField>
    </>
  );
};

export default FormInputs;
