import React, { useState, useEffect } from "react";
import {
  Title,
  WrapperRtaing,
  NumberReviews,
  WrapperPrices,
  NewPrice,
  OldPrice,
  Discount,
  Desc,
  WrapperFeatures,
  WrapperButton,
  AddCartButton,
  FeaturesName,
  FeaturesItem,
  WrapperFeaturesItem,
  FeaturesColor,
  FeaturesCat,
  ButtonDec,
  ButtonInc,
  WrapperCounterCart,
  LabelCounter,
  ImageOutOrder,
  WrapperExpire,
  ImageEx,
  ColorsBoxLayer,
  CheckColor,
  ErrMsg,
  IconCart,
  TextButtonCart,
} from "./Style";
import Model from "./Model";
import outOrder from "../../Assets/Images/outOrder.png";
import Expired from "../../Assets/Images/expired.png";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import RatingItem from "./RatingItem";
import { createCart } from "../../Redux/Api/cartApi";
import { useNavigate } from "react-router-dom";
import Size from "./Size";
import Color from "./Color";
import Category from "./Category";

const DetailsSingleProduct = () => {
  const navigate = useNavigate();
  const dataProduct = useSelector((state) => state.product.dataById);
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.dataStatic.userLogin);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [statusSate, setStatusDate] = useState("");
  const [errCart, setErrCart] = useState("");
  const [dataToCart, setDataToCart] = useState({
    color: "",
    size: "",
    model: "",
  });
  useEffect(() => {
    const compareDate = () => {
      if (dataProduct.expire !== null) {
        let dateNow = new Date(Date.now()).getTime();
        let expire = new Date(dataProduct.expire).getTime();
        if (expire > dateNow) {
          setStatusDate("valid");
        } else {
          setStatusDate("invalid");
        }
      } else {
        setStatusDate("valid");
      }
    };
    const prepareDataToCart = () => {
      if (dataProduct.size && dataProduct.size.length === 0) {
        setDataToCart((prevState) => ({ ...prevState, size: "REGULAR SIZE" }));
      }
      if (dataProduct.color && dataProduct.color.length === 0) {
        setDataToCart((prevState) => ({
          ...prevState,
          color: "REGULAR COLOR",
        }));
      }
      if (dataProduct.model && dataProduct.model.length === 0) {
        setDataToCart((prevState) => ({
          ...prevState,
          model: "REGULAR MODEL",
        }));
      }
    };
    prepareDataToCart();
    compareDate();
  }, [dataProduct]);
  const handleChangeCounter = (action) => {
    if (action === "inc") {
      if (count < dataProduct.quantity) {
        setCount(count + 1);
      }
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };
  const handleChangeColor = (value) => {
    setDataToCart((prevState) => ({ ...prevState, color: value }));
  };
  const handleChangeSize = (value) => {
    setDataToCart((prevState) => ({ ...prevState, size: value }));
  };
  const handleChangeModel = (value) => {
    setDataToCart((prevState) => ({ ...prevState, model: value }));
  };
  const prepareDataToCart = (dataCart) => {
    if (
      dataToCart.color === "" ||
      dataToCart.size === "" ||
      dataToCart.model === ""
    ) {
      setErrCart("Choose the color, size and model, please!");
    } else {
      dataCart.color = dataToCart.color;
      dataCart.size = dataToCart.size;
      dataCart.model = dataToCart.model;
      dataCart.quantity = count;
      dataCart.productId = dataProduct._id;
    }
  };
  const addToCartFunction = () => {
    if (userLogin._id) {
      let dataCart = {};
      prepareDataToCart(dataCart);
      if (Object.keys(dataCart).length !== 0) {
        createCart(dispatch, dataCart);
        setErrCart("");
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Title>{dataProduct.title}</Title>
      <WrapperRtaing>
        <RatingItem
          ratingValue={(dataProduct.rating && dataProduct.rating) || 0}
        />
        <NumberReviews>
          ({(dataProduct.ratingSum && dataProduct.ratingSum) || 0} customer
          review)
        </NumberReviews>
      </WrapperRtaing>
      <WrapperPrices>
        <NewPrice>
          {dataProduct.priceAfterDiscount > 0
            ? `$${dataProduct.priceAfterDiscount}`
            : `$${dataProduct.price}`}
        </NewPrice>
        {dataProduct.priceAfterDiscount > 0 ? (
          <WrapperExpire>
            Until{" "}
            {dataProduct.expire &&
              moment(dataProduct.expire).format("MMM DD YYYY")}
          </WrapperExpire>
        ) : null}

        <OldPrice>
          {dataProduct.priceAfterDiscount > 0 ? `$${dataProduct.price}` : null}
        </OldPrice>
        <Discount>
          {dataProduct.priceAfterDiscount > 0
            ? ((dataProduct.price - dataProduct.priceAfterDiscount) * 100) /
              dataProduct.price
            : 0}
          %
        </Discount>
      </WrapperPrices>
      <Desc>{dataProduct.description}</Desc>
      <Model handleChangeModel={handleChangeModel} dataToCart={dataToCart} />
      <Size dataToCart={dataToCart} handleChangeSize={handleChangeSize} />
      {dataProduct.color && dataProduct.color.length !== 0 ? (
        <Color dataToCart={dataToCart} handleChangeColor={handleChangeColor} />
      ) : null}
      <Category />
      <WrapperFeatures>
        <FeaturesName>SubCategories:</FeaturesName>
        <WrapperFeaturesItem>
          {dataProduct.subCategories &&
            dataProduct.subCategories.map((val, index) => {
              return <FeaturesCat key={index}>&nbsp;{val.name}</FeaturesCat>;
            })}
        </WrapperFeaturesItem>
      </WrapperFeatures>
      {dataProduct.tag && dataProduct.tag.length !== 0 ? (
        <WrapperFeatures>
          <FeaturesName>Tags:</FeaturesName>
          <WrapperFeaturesItem>
            {dataProduct.tag &&
              dataProduct.tag.map((val, index) => {
                return <FeaturesItem key={index}>{val}</FeaturesItem>;
              })}
          </WrapperFeaturesItem>
        </WrapperFeatures>
      ) : null}

      <WrapperButton>
        {dataProduct.quantity ? (
          <>
            {statusSate === "valid" ? (
              <>
                <AddCartButton onClick={() => addToCartFunction()}>
                  <IconCart load={cart.loading ? 1 : 0} />{" "}
                  <TextButtonCart load={cart.loading ? 1 : 0}>
                    Add To Cart
                  </TextButtonCart>
                </AddCartButton>
                <WrapperCounterCart>
                  <ButtonDec onClick={() => handleChangeCounter("dec")} />
                  <LabelCounter>{count}</LabelCounter>
                  <ButtonInc onClick={() => handleChangeCounter("inc")} />
                </WrapperCounterCart>{" "}
              </>
            ) : (
              <ImageEx src={Expired} alt="expic" />
            )}
          </>
        ) : (
          <ImageOutOrder src={outOrder} alt="outStock" />
        )}
      </WrapperButton>
      <ErrMsg>{errCart}</ErrMsg>
    </>
  );
};

export default DetailsSingleProduct;
