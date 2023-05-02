import React from 'react'
import CustomSelect from "../CustomSelect";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";
import {
    WrapperSubTitle,
    WrapperSelectBox,
    ErrMsg,
  } from "./Style";
const Shipping = ({control,errors,handleChangeShipping}) => {
    const dataStatic = useSelector((state) => state.dataStatic);
  return (
    <>
    <WrapperSubTitle>SHIPPING</WrapperSubTitle>
        <WrapperSelectBox>
          <Controller
            control={control}
            name="shipping"
            render={({ field: { onChange, value, ref } }) => (
              <CustomSelect
                inputRef={ref}
                isMulti={false}
                autoFocus={true}
                handleChange={(val) => {
                  onChange(val.value);
                  handleChangeShipping(val.value);
                }}
                value={dataStatic.dataShipping.find((c) => c.value === value)}
                placeholder="-- SELECT SHIPPING --"
                data={dataStatic.dataShipping}
              />
            )}
          />
        </WrapperSelectBox>
        <ErrMsg>{errors.shipping?.message}</ErrMsg>
    </>
  )
}

export default Shipping