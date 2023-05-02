import React, { useEffect } from "react";
import BigDeals from "../Components/MainComponents/BigDeals";
import Brands from "../Components/MainComponents/Brands";
import FilterProduct from "../Components/MainComponents/FilterProduct";
import PopularCategories from "../Components/MainComponents/PopularCategories";
import SlideShowHome from "../Components/MainComponents/SlideShowHome";
import { useDispatch, useSelector } from "react-redux";
import { getProductfilter } from "../Redux/Api/ProductApi";
const HomePage = () => {
  const categoryFilteredData = useSelector(
    (state) => state.dataStatic.filterHomeData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    let limit = 8;
    getProductfilter(dispatch, limit, categoryFilteredData);
  }, [dispatch, categoryFilteredData]);
  return (
    <>
      <SlideShowHome />
      <FilterProduct />
      <BigDeals />
      <PopularCategories />
      <Brands />
    </>
  );
};

export default HomePage;
