import React from "react";
import { WrapperGroupInput, WrapperInputHalf, ErrMsg } from "./Style";
import { Controller } from "react-hook-form";
import InputOrder from "../InputOrder";

const FormInputs = ({ control, errors }) => {
  return (
    <>
      <WrapperGroupInput>
        <WrapperInputHalf>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, name, value } }) => (
              <InputOrder
                type="text"
                value={value || ""}
                placeholder="Email"
                name={name}
                onChange={onChange}
              />
            )}
          />
          <ErrMsg>{errors.email?.message}</ErrMsg>
        </WrapperInputHalf>
        <WrapperInputHalf>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, name, value } }) => (
              <InputOrder
                type="text"
                password="true"
                value={value || ""}
                placeholder="Password"
                name={name}
                onChange={onChange}
              />
            )}
          />
          <ErrMsg>{errors.password?.message}</ErrMsg>
        </WrapperInputHalf>
      </WrapperGroupInput>
    </>
  );
};

export default FormInputs;
