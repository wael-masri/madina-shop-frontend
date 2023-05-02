import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
const CustomSelect = ({
  placeholder,
  isMulti,
  data,
  isDisabled,
  handleChange,
  ref,
  value,
  
}) => {
  const booleanData = useSelector(state => state.booleanData)
  return (
    <Select
      isDisabled={isDisabled}
      value={value}
      ref={ref && ref}
      placeholder={placeholder}
      options={data}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        

        colors: {
          ...theme.colors,
          primary25:"#ea1c26",
          neutral80:booleanData.isMode? "#fff" : "#000",
          primary: "#000",
          neutral20:booleanData.isMode? "#f6f7f8" : "#20232a",
          neutral50:booleanData.isMode? "#f6f7f8" : "#20232a",
        },
      })}
      styles={{
        menuList: (styles) => ({
          ...styles,
          background: booleanData.isMode? "#20232a" : "#fff",
          zIndex:454545,
          color: booleanData.isMode? "#fff" : "#000",
        }),
        menuPortal: base => ({ ...base, zIndex:454545 }),

        control: (base) => ({
          ...base,
          border: 0,
          zIndex:454545,
          boxShadow: "none",
          backgroundColor: booleanData.isMode? "#20232a" : "#fff",
          
        }),
      }}
      isMulti={isMulti}
      onChange={handleChange}
    />
  );
};

export default CustomSelect;
