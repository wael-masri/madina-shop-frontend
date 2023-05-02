import React from "react";
import { Controller } from "react-hook-form";
import InputOrder from "./InputOrder/index";
import { ErrMsg, WrapperInput, WrapperAgree, LabelAgree } from "./Style";
const FormInputs = ({ errors, control, setIsCheck, isCheck }) => {
  return (
    <>
      <WrapperInput>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, name, value } }) => (
            <InputOrder
              type="text"
              placeholder="User Name"
              value={value || ""}
              name={name}
              onChange={onChange}
            />
          )}
        />
        <ErrMsg>{errors.name?.message}</ErrMsg>
      </WrapperInput>
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
              password="true"
              placeholder="Password"
              value={value || ""}
              name={name}
              onChange={onChange}
            />
          )}
        />
        <ErrMsg>{errors.password?.message}</ErrMsg>
      </WrapperInput>
      <WrapperInput>
        <Controller
          control={control}
          name="confirmpassword"
          render={({ field: { onChange, name, value } }) => (
            <InputOrder
              type="text"
              password="true"
              placeholder="Confirm Password"
              value={value || ""}
              name={name}
              onChange={onChange}
            />
          )}
        />
        <ErrMsg>{errors.confirmpassword?.message}</ErrMsg>
      </WrapperInput>
      <WrapperAgree>
        <input
          type="checkbox"
          id="agreeTerm"
          name="agreeTerm"
          value={isCheck}
          onChange={(e) => setIsCheck(e.target.checked)}
        />
        <LabelAgree htmlFor="agreeTerm">
          {" "}
          I agree all statement in terms of service
        </LabelAgree>
      </WrapperAgree>
    </>
  );
};

export default FormInputs;
