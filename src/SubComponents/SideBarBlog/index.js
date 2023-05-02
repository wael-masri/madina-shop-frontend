import React from "react";
import {
  TitleSideBar,
  SubCategory,
  WrapperTags,
  Tags,
  WrapperProduct,
} from "./Style";
import FirstCard from "../FirstCard";
import { useEffect } from "react";
import ProductApi from "../../Api/ProductApi";
import { useState } from "react";
import Category from "./Category";

const SideBarBlog = () => {
  const [ProductOffer, setProductOffer] = useState([]);
  useEffect(() => {
    const getProductOffre = async () => {
      const res = await ProductApi.getByBlog();
      setProductOffer(res.data);
    };
    getProductOffre();
  }, []);
  console.log(ProductOffer);
  return (
    <>
      <TitleSideBar>Recent Offers</TitleSideBar>
      {ProductOffer &&
        ProductOffer.map((val, index) => {
          return (
            <WrapperProduct>
              <FirstCard
                image={val.imageCover}
                title={val.title}
                state={val._id}
                price1={val.price}
                price2={val.priceAfterDiscount}
              />
            </WrapperProduct>
          );
        })}
       <Category />
      <WrapperTags>
        <Tags>Symphony</Tags>
        <Tags>Nokia</Tags>
        <Tags>Samsung</Tags>
        <Tags>Lenovo</Tags>
        <Tags>Poco 12</Tags>
        <Tags>Oppos</Tags>
      </WrapperTags>
    </>
  );
};

export default SideBarBlog;
