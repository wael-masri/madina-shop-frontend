import React from "react";
import { TitleSideBar, TagsSize, WrapperTagsSize } from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { setTagFilter } from "../../Redux/Actions/DataStaticActions";

const TagSide = () => {
  const dataStatic = useSelector((state) => state.dataStatic);
  const dispatch = useDispatch();
  return (
    <>
      <TitleSideBar>Tags</TitleSideBar>
      <WrapperTagsSize>
        <TagsSize
          onClick={() => dispatch(setTagFilter(""))}
          focused={dataStatic.tagFilter === ""? 1 : 0}
        >
          All Tags
        </TagsSize>
        {dataStatic.dataTag &&
          dataStatic.dataTag.map((val, index) => {
            return (
              <TagsSize
                onClick={() => dispatch(setTagFilter(val.name))}
                key={index}
                focused={val.name === dataStatic.tagFilter? 1 : 0}
              >
                {val.name}
              </TagsSize>
            );
          })}
      </WrapperTagsSize>
    </>
  );
};

export default TagSide;
