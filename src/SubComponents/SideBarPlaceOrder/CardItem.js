import React from "react";
import {
  FirstWrapper,
  SecondWrapper,
  WrapperItem,
  WrapperInfoItem,
  ImageItem,
  WrapperInfo,
  TitleItem,
  InfoItem,
  ColorContainer,
  QuantityContainer,
} from "./Style";
const CardItem = ({ data }) => {
  return (
    <WrapperItem>
      <FirstWrapper>
        <WrapperInfoItem>
          <ImageItem
            src={data.product.imageCover && data.product.imageCover}
            alt="omageItem"
          />
          <WrapperInfo>
            <TitleItem>{data.product.title && data.product.title}</TitleItem>
            <InfoItem>{data.model && data.model}</InfoItem>
            <InfoItem>{data.size && data.size}</InfoItem>
            <ColorContainer color={data.color}></ColorContainer>
          </WrapperInfo>
          <QuantityContainer>{data.quantity}</QuantityContainer>
        </WrapperInfoItem>
      </FirstWrapper>
      <SecondWrapper>${data.price && data.price}</SecondWrapper>
    </WrapperItem>
  );
};

export default CardItem;
