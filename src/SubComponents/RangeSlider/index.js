import * as React from "react";
import {SliderRangeStyle} from "./Style";

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = ({ handleChange1, value1,handleChange2 }) => {
  return (
    <SliderRangeStyle
      getAriaLabel={() => "Minimum distance"}
      max={80000}
      min={0}
      step={1000}
      value={value1}
      onChangeCommitted={handleChange2} 
      onChange={handleChange1}
      getAriaValueText={valuetext}
      disableSwap
    />
  );
};


export default RangeSlider;
