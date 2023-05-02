import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductById, getProductRelated } from "../Redux/Api/ProductApi";
import { getReviews } from "../Redux/Api/reviewApi";
import { resetPageReview } from "../Redux/Actions/DataStaticActions";
import { RelatedItems, SubHeader } from "../SubComponents";
import { AboutProduct, SingleProduct } from "../Components/MainComponents";

const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pagination = useSelector((state) => state.dataStatic);
  const changeReview = useSelector((state) => state.booleanData);
  const product = useSelector((state) => state.product.dataById);

  // get product By ID
  useEffect(() => {
    if (!location.state) {
      navigate("/category");
    } else {
      const getDataById = () => {
        let id = location.state;
        getProductById(dispatch, id);
      };
      getDataById();
    }
  }, [location.state]);

  //fetch data relatedProdcuts
  useEffect(() => {
    const getRelatedData = () => {
      if (product.category) {
        getProductRelated(dispatch, product.category._id);
      }
    };
    getRelatedData();
  }, [location.state, product]);

  // kermel bass nd5ol 3al page y3tina awal 2 reviews of this product
  useEffect(() => {
    const getDataByIdd = () => {
      dispatch(resetPageReview());
    };
    getDataByIdd();
  }, [location.state]);

  // kermel n3mol click 3al show more aw less y3mol run
  useEffect(() => {
    const getDataById = () => {
      let id = location.state;
      getReviews(dispatch, id, pagination.limitReview, pagination.pageReview);
    };
    getDataById();
  }, [pagination.pageReview, changeReview.isReview, location.state]);

  return (
    <>
      <SubHeader
        title={product.title}
        first="Home"
        linkFirst="/"
        second="category"
        linkSecond="/category"
        third="product"
      />
      <SingleProduct />
      <AboutProduct />
      <RelatedItems />
    </>
  );
};

export default ProductPage;
