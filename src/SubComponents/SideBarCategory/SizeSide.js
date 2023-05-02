import React from "react";
import { TitleSideBar, TagsSize, WrapperTagsSize } from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { setSizeFilter } from "../../Redux/Actions/DataStaticActions";

const SizeSide = () => {
  const dataStatic = useSelector((state) => state.dataStatic);
  const dispatch = useDispatch();
  return (
    <>
      <TitleSideBar>Sizes</TitleSideBar>
      <WrapperTagsSize>
        <TagsSize
          onClick={() => dispatch(setSizeFilter(""))}
          focused={dataStatic.sizeFilter === ""? 1 : 0}
        >
          All Size
        </TagsSize>
        {dataStatic.dataSize &&
          dataStatic.dataSize.map((val, index) => {
            return (
              <TagsSize
                onClick={() => dispatch(setSizeFilter(val.name))}
                key={index}
                focused={dataStatic.sizeFilter === val.name ? 1 : 0}
              >
                {val.name}
              </TagsSize>
            );
          })}
      </WrapperTagsSize>
    </>
  );
};

export default SizeSide;
