import React from 'react';
import RatingItem from "../RatingItem";
import offerImage from "../../Assets/Images/offer.png";
import outStock from "../../Assets/Images/outStock.png";
import { customConfirmation } from "../CustomConfirmation";
import moment from "moment";
import {
    Container,
    Wrapper,
    WrapperImage,
    WrapperDesc,
    ImageCover,
    WrapperRting,
    NameProduct,
    Category,
    Line,
    OldPrice,
    NewPrice,
    WrapperCurrency,
    WrapperBottom,
    Del,
    WrapperHoverIcons,
    WrapperIconsHover1,
    WrapperIconsHover2,
    WrapperIconsHover3,
    WrapperIconsHover4,
    LoveIcon,
    CompareIcon,
    ViewIcon,
    CartIcon,
    BoxHover,
    WrapperButtonShow,
    ButtonShow,
    WrapperExpire,
    ImageOffer,
    ImageOutOfStock,
  } from "./Style";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CardApp = ({toggleWishlistItem,card,data}) => {
    const navigate = useNavigate();
    const userProfile = useSelector((state) => state.dataStatic.userLogin);
  return (
    <Container>
        <Wrapper>
          <WrapperImage>
            <ImageCover src={ data.imageCover} alt="imagecover" />
            {data.priceAfterDiscount > 0 ? (
              <ImageOffer src={offerImage} alt="imageOffer" />
            ) : null}

            <BoxHover>
              <WrapperHoverIcons>
                <WrapperIconsHover1
                  onClick={() => {
                    if (userProfile._id) {
                      userProfile.wishList.filter((e) => e._id === data._id)
                        .length > 0
                        ? customConfirmation(
                            toggleWishlistItem,
                            "Madina Shop",
                            "Are you sure to remove this product in your wishlist ?"
                          )
                        : customConfirmation(
                            toggleWishlistItem,
                            "Madina Shop",
                            "Are you sure to add this product in your wishlist ?"
                          );
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  <LoveIcon
                    focused={
                      userProfile._id &&
                      userProfile.wishList.filter((e) => e._id === data._id)
                        .length > 0
                        ? 1
                        : 0
                    }
                  />
                </WrapperIconsHover1>
                <WrapperIconsHover2>
                  <CompareIcon />
                </WrapperIconsHover2>
                <WrapperIconsHover3 to="/product" state={data._id}>
                  <ViewIcon />
                </WrapperIconsHover3>
                <WrapperIconsHover4>
                  <CartIcon />
                </WrapperIconsHover4>
              </WrapperHoverIcons>
              <WrapperButtonShow>
                <ButtonShow to="/product" state={data._id}>
                  ADD TO CART
                </ButtonShow>
              </WrapperButtonShow>
            </BoxHover>
          </WrapperImage>
          <WrapperDesc>
            {data.quantity === 0 ? (
              <ImageOutOfStock src={outStock} alt="PICSTOCK" />
            ) : null}
            <WrapperRting>
              <RatingItem nb={data.rating || 0} />
            </WrapperRting>
            <NameProduct>{data.title}</NameProduct>
            <Category>{data.category.name}</Category>
            <Line></Line>
            <WrapperBottom>
              <WrapperCurrency>
                <OldPrice>
                  <Del>
                    {data.priceAfterDiscount > 0 ? `$${data.price}` : null}
                  </Del>
                </OldPrice>
                {data.expire ? (
                  <WrapperExpire>
                    Until {data.expire && moment(data.expire).format("MMM DD")}
                  </WrapperExpire>
                ) : null}
                <NewPrice>
                  {data.priceAfterDiscount > 0
                    ? `$${data.priceAfterDiscount}`
                    : `$${data.price}`}
                </NewPrice>
              </WrapperCurrency>
            </WrapperBottom>
          </WrapperDesc>
        </Wrapper>
      </Container>
  )
}

export default CardApp