import React from "react";
import InputOrder from "./InputOrder/index";
import { Controller } from "react-hook-form";
import { ErrMsg, WrapperInput } from "./Style";
const FormInputs = ({ errors, control }) => {
  
  return (
    <>
      <WrapperInput>
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
      </WrapperInput>
      <WrapperInput>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, name, value } }) => (
            <InputOrder
              type="text"
              placeholder="Password"
              password="true"
              value={value || ""}
              name={name}
              onChange={onChange}
            />
          )}
        />
        <ErrMsg>{errors.password?.message}</ErrMsg>
      </WrapperInput>
    </>
  );
};

export default FormInputs;
