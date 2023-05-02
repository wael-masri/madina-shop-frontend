import React from "react";
import {
  TitleSideBar,
  WrapperColorsRadio,
  ColorsBox,
  ColorsBoxLayer,
  CheckColor,
} from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { setColorFilter } from "../../Redux/Actions/DataStaticActions";
const ColorSide = () => {
  const dispatch = useDispatch();
  const dataStatic = useSelector((state) => state.dataStatic);
  return (
    <>
      <TitleSideBar>Colors</TitleSideBar>
      <WrapperColorsRadio>
        <ColorsBox color="white" onClick={() => dispatch(setColorFilter(""))}>
          All
        </ColorsBox>
        {dataStatic.dataColor &&
          dataStatic.dataColor.map((val, index) => {
            return (
              <ColorsBox
                key={index}
                color={val.name}
                onClick={() => dispatch(setColorFilter(val.name))}
              >
                <ColorsBoxLayer visible={val.name === dataStatic.colorFilter? 1 : 0}>
                  <CheckColor />
                </ColorsBoxLayer>
              </ColorsBox>
            );
          })}
      </WrapperColorsRadio>
    </>
  );
};

export default ColorSide;
