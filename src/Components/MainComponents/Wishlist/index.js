import React from "react";
import CardWishlist from "../../../SubComponents/CardWishlist";
import {
  Container,
  Title,
  Wrapper,
  WrapperTitle,
  WrapperTitlesWishlist,
  TitlesWishlist,
  WrapperCardWishlist,
  WishlistIcon,
  EmptyWish
} from "./Style";
import {useSelector } from "react-redux";
const Wishlist = () => {
  const userWishlist = useSelector((state) => state.dataStatic.userLogin);
  
  return (
    <Container>
      <Wrapper>
        <WrapperTitle>
          <Title>
            My Wishlist <WishlistIcon />
          </Title>
        </WrapperTitle>
        <WrapperTitlesWishlist>
          <TitlesWishlist hide="true"></TitlesWishlist>
          <TitlesWishlist>Product Name</TitlesWishlist>
          <TitlesWishlist hide="true">Price</TitlesWishlist>
          <TitlesWishlist>Stock</TitlesWishlist>
          <TitlesWishlist hide="true" >Action</TitlesWishlist>
        </WrapperTitlesWishlist>
        {userWishlist.wishList &&
          userWishlist.wishList.map((val, index) => {
            return (
              <WrapperCardWishlist key={index}>
                <CardWishlist data={val} />
              </WrapperCardWishlist>
            );
          })}
        {!userWishlist.wishList || userWishlist.wishList.length === 0 ? (
          <EmptyWish>Your Wishlist is empty!</EmptyWish>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Wishlist;
