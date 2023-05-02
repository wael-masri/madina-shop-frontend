import React from "react";
import InputOrder from "../InputOrder/index.js";
import {
  WrapperInputFull,
  WrapperGroupInput,
  WrapperInputHalf,
  ErrMsg,
} from "./Style";
import { Controller } from "react-hook-form";
const FormInputs = ({ control, errors }) => {
  return (
    <>
      <WrapperGroupInput>
        <WrapperInputHalf>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, name, value } }) => (
              <InputOrder
                type="text"
                value={value || ""}
                placeholder="First Name"
                name={name}
                onChange={onChange}
              />
            )}
          />
          <ErrMsg>{errors.firstName?.message}</ErrMsg>
        </WrapperInputHalf>
        <WrapperInputHalf>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, name, value } }) => (
              <InputOrder
                type="text"
                value={value || ""}
                placeholder="Last Name"
                name={name}
                onChange={onChange}
              />
            )}
          />
          <ErrMsg>{errors.lastName?.message}</ErrMsg>
        </WrapperInputHalf>
      </WrapperGroupInput>
      <WrapperInputFull>
        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, name, value } }) => (
            <InputOrder
              type="text"
              value={value || ""}
              placeholder="Address"
              name={name}
              onChange={onChange}
            />
          )}
        />
        <ErrMsg>{errors.address?.message}</ErrMsg>
      </WrapperInputFull>
      <WrapperInputFull>
        <Controller
          control={control}
          name="appartment"
          render={({ field: { onChange, name, value } }) => (
            <InputOrder
              type="text"
              value={value || ""}
              placeholder="Appartment, suite, etc"
              name={name}
              onChange={onChange}
            />
          )}
        />
        <ErrMsg>{errors.appartment?.message}</ErrMsg>
      </WrapperInputFull>
      <WrapperGroupInput>
        <WrapperInputHalf>
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, name, value } }) => (
              <InputOrder
                type="text"
                value={value || ""}
                placeholder="City"
                name={name}
                onChange={onChange}
              />
            )}
          />
          <ErrMsg>{errors.city?.message}</ErrMsg>
        </WrapperInputHalf>
        <WrapperInputHalf>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, name, value } }) => (
              <InputOrder
                type="text"
                value={value || ""}
                placeholder="Mobile Number"
                name={name}
                onChange={onChange}
              />
            )}
          />
          <ErrMsg>{errors.phone?.message}</ErrMsg>
        </WrapperInputHalf>
      </WrapperGroupInput>
    </>
  );
};

export default FormInputs;
