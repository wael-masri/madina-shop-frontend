import React from "react";
import {
  Wrapper,
  Container,
  WrapperField,
  WrapperImageIcon,
  IconClose,
  Image,
  AddToCartButton,
  WrapperFieldStock,
  CustomLink,
} from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { customConfirmation } from "../CustomConfirmation";
import { setWishlistItem } from "../../Redux/Actions/DataStaticActions";
const CardWishlist = ({ data }) => {
  const userProfile = useSelector((state) => state.dataStatic.userLogin);
  const dispatch = useDispatch();
  const toggleWishlistItem = () => {
    setWishlistItem(dispatch, userProfile._id, {
      rmvWish: data._id,
    });
  };

  return (
    <Container>
      <Wrapper>
        <WrapperImageIcon>
          <IconClose
            onClick={() =>
              customConfirmation(
                toggleWishlistItem,
                "Are You Sure?",
                "Are you sure to remove this product from your wishlist ?"
              )
            }
          />
          <CustomLink to="/product" state={data._id}>
            {" "}
            <Image src={data.imageCover && data.imageCover} alt="coverwish" />
          </CustomLink>
        </WrapperImageIcon>
        <WrapperField>
          <CustomLink to="/product" state={data._id}>
            {data.title}
          </CustomLink>
        </WrapperField>
        <WrapperField hide="true">
          <del>
            {data.priceAfterDiscount && data.priceAfterDiscount > 0
              ? `$${data.price}`
              : null}
          </del>
          &nbsp;
          {data.priceAfterDiscount && data.priceAfterDiscount > 0
            ? `$${data.priceAfterDiscount}`
            : `$${data.price}`}
        </WrapperField>
        <WrapperFieldStock status={data.quantity === 0}>
          {data.quantity === 0? "OUT" : "IN"}
        </WrapperFieldStock>
        <WrapperField>
          <CustomLink to="/product" state={data._id}>
            {" "}
            <AddToCartButton hide="true">Add To Cart</AddToCartButton>{" "}
          </CustomLink>
        </WrapperField>
      </Wrapper>
    </Container>
  );
};

export default CardWishlist;
