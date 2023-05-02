import React from "react";
import {
  Container,
  WrapperImage,
  ImageCover,
  WrapperContent,
  Collection,
  Title,
  Desc,
  Colored,
  ButtonLink,
  WrapperText,
  IconButton,
  WrapperImgs,
  ImageItem,
  WrapperStickers,
  ImageStickers,
  InfoStickers
} from "./Style";
import cover from "../../../Assets/Images/pattern.png";
import Dress from "../../../Assets/Images/dress.png";
import stickers from "../../../Assets/Images/stickers.png";
const BigDeals = () => {
  return (
    <Container>
      <WrapperImage>
        <ImageCover src={cover} alt="coverimage" />
      </WrapperImage>
      <WrapperContent>
        <WrapperText>
          <Collection>2023 Collection</Collection>
          <Title>Women Dress IG15236</Title>
          <Desc>
            Deals <Colored>30% Flat</Colored>
          </Desc>
          <ButtonLink to="/product" state="64481e759fc05e0c3dd2a3ac"> 
            Shop Now <IconButton />
          </ButtonLink>
        </WrapperText>
        <WrapperImgs>
          <ImageItem src={Dress} alt="chairphoto" />
          <WrapperStickers>
            <ImageStickers src={stickers} alt="stickersphoto" />
            <InfoStickers>105$</InfoStickers>
          </WrapperStickers>
        </WrapperImgs>
      </WrapperContent>
    </Container>
  );
};

export default BigDeals;
