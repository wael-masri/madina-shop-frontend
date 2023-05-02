import React from "react";
import { WrapImage, Wrapper, Image, OverLay, SearchIcons } from "./Style";
import { useSelector } from "react-redux";
const GalleryFooter = () => {
  const categoriesData = useSelector(state => state.category.data);
  return (
    <Wrapper>
      {categoriesData.data && categoriesData.data.map((val,index) => {
        return(
          <WrapImage key={index}>
          <Image src={val.image} alt="photofooter" />
          <OverLay to="/category" state={val._id}>
            <SearchIcons />
          </OverLay>
        </WrapImage>
        )
      })};
    </Wrapper>
  );
};

export default GalleryFooter;
