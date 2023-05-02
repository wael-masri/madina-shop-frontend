import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Api/ProductApi";
import { getCategories } from "../Redux/Api/categoryApi";
import { getBrands } from "../Redux/Api/brandApi";
import { setCategoryFilter } from "../Redux/Actions/DataStaticActions";
import { useLocation } from "react-router-dom";
import { SubHeader } from "../SubComponents";
import { Category } from "../Components/MainComponents";
const CategoryPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const paginationProduct = useSelector((state) => state.dataStatic);
  const [conversationsLoaded, setConversationsLoaded] = useState(false);
  useEffect(() => {
    getCategories(dispatch);
    getBrands(dispatch);
    if(location.state){
      dispatch(setCategoryFilter(location.state));
    }else{
      dispatch(setCategoryFilter(""));
    }
    
    setConversationsLoaded(true);
  }, [dispatch,location.state]);

  useEffect(() => {
    if (conversationsLoaded) {
      getProducts(
        dispatch,
        paginationProduct.limitProduct,
        paginationProduct.pageProduct,
        paginationProduct.categoryFilter,
        paginationProduct.brandFilter,
        paginationProduct.dataSorting,
        paginationProduct.priceSorting,
        paginationProduct.colorFilter,
        paginationProduct.tagFilter,
        paginationProduct.sizeFilter,
        paginationProduct.searchItem
      );
    }
  }, [
    paginationProduct.pageProduct,
    paginationProduct.categoryFilter,
    paginationProduct.brandFilter,
    paginationProduct.dataSorting,
    paginationProduct.priceSorting,
    paginationProduct.colorFilter,
    paginationProduct.tagFilter,
    paginationProduct.sizeFilter,
    paginationProduct.searchItem,
    conversationsLoaded
  ]);

  return (
    <>
      <SubHeader title="Shopping" first="Home" linkFirst="/" second="shop" />
      <Category />
    </>
  );
};

export default CategoryPage;
