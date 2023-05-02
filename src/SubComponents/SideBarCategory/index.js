import React from "react";
import {
  Line
} from "./Style";
import CategorySide from "./CategorySide";
import FilterSide from "./FilterSide";
import ColorSide from "./ColorSide";
import SizeSide from "./SizeSide";
import BrandSide from "./BrandSide";
import TagSide from "./TagSide";
const SideBarCategory = () => {

  return (
    <>
      <CategorySide />
      <Line />
      <FilterSide />
      <Line />
      <ColorSide />
      <Line />
      <SizeSide />
      <Line />
      <BrandSide />
      <Line />
      <TagSide />
      <Line />
    </>
  );
};

export default SideBarCategory;
