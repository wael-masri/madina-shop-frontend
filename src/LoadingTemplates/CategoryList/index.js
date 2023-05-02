import React from "react";
import { SkeletonStyled } from "./Style";
const CategoryList = () => {
  const arrListCat = ["1", "2", "3", "4", "5", "6"];
  return arrListCat.map((val, index) => {
    return <SkeletonStyled width="50%" key={index} height={"15px"} />;
  });
};

export default CategoryList;
