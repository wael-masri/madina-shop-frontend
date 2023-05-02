import React, { useEffect, useState } from "react";
import {
  TitleSideBar,
  WrapperRangeSlider,
  WrapperRangeSliderText,
  BolderText,
} from "./Style";
import RangeSlider from "../../SubComponents/RangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { setPriceSorting } from "../../Redux/Actions/DataStaticActions";
const minDistance = 100;
const FilterSide = () => {
  const dispatch = useDispatch();
   const dataStatic = useSelector(state => state.dataStatic);
  const [valueRange, setValueRange] = useState([]);

   useEffect(() => {
    setValueRange(dataStatic.priceSorting);
   },[dataStatic]);
  const handleChangeRangeSlider = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      
      setValueRange([
        Math.min(newValue[0], valueRange[1] - minDistance),
        valueRange[1],
      ]);
    } else {
   
      setValueRange([
        valueRange[0],
        Math.max(newValue[1], valueRange[0] + minDistance),
      ]);
    }
  };
  const handleGetValueSlider = () => {
    dispatch(setPriceSorting(valueRange))
  }

  return (
    <>
      <TitleSideBar>Filter</TitleSideBar>
      <WrapperRangeSlider>
        <RangeSlider
          value1={valueRange}
          handleChange1={handleChangeRangeSlider}
          handleChange2={handleGetValueSlider}
        />
        <WrapperRangeSliderText>
          Price:{" "}
          <BolderText>
            ${valueRange[0]} - ${valueRange[1]}
          </BolderText>
        </WrapperRangeSliderText>
      </WrapperRangeSlider>
    </>
  );
};

export default FilterSide;
