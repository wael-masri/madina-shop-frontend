import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  WrapperImages,
  WrapperImageCover,
  WrapperInfo,
  ImageCover,
  WrapperMiniImages,
  WrapperMiniImage,
  WrapperMiniImagesScroll,
  WrapperIconsScroller,
  ImageMini,
} from "./Style";
import DetailsSingleProduct from "../../../SubComponents/DetailsSingleProduct";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector } from "react-redux";
import { SingleItem } from "../../../LoadingTemplates";

const SingleProduct = () => {
  const product = useSelector((state) => state.product);
  const productdata = useSelector((state) => state.product.dataById);
  const refSlider = useRef(null);
  const [urlImage, setUrlImage] = useState(null);
  
  useEffect(() => {
    const getDataByIdd = () => {
      if (productdata.imageCover) {
        setUrlImage(productdata.imageCover);
      }
    };
    getDataByIdd();
  }, [productdata.imageCover]);
  const scroll = (widthImg) => {
    refSlider.current.scrollLeft += widthImg;
  };

  const handleChangeCoverImage = (url) => {
    setUrlImage(url);
  };

  return product.loadingById ? (
    <SingleItem />
  ) : (
    <Container>
      <Wrapper>
        <WrapperImages>
          <WrapperImageCover>
            <ImageCover src={urlImage && urlImage} alt="photocover" />
          </WrapperImageCover>
          <WrapperMiniImages>
            <WrapperMiniImagesScroll ref={refSlider}>
              <WrapperMiniImage
                focused={productdata.imageCover === urlImage? 1 : 0}
                onClick={() => handleChangeCoverImage(productdata.imageCover)}
              >
                <ImageMini
                  src={productdata && productdata.imageCover}
                  alt="miniphoto"
                />
              </WrapperMiniImage>
              {productdata.images &&
                productdata.images.map((val, index) => {
                  return (
                    <WrapperMiniImage
                      focused={val === productdata.imageCover? 1 : 0}
                      key={index}
                      onClick={() => handleChangeCoverImage(val)}
                    >
                      <ImageMini src={val} alt="miniphoto" />
                    </WrapperMiniImage>
                  );
                })}
            </WrapperMiniImagesScroll>
            <WrapperIconsScroller location="left" onClick={() => scroll(-200)}>
              <KeyboardArrowLeftIcon />
            </WrapperIconsScroller>
            <WrapperIconsScroller location="right" onClick={() => scroll(200)}>
              <ChevronRightIcon />
            </WrapperIconsScroller>
          </WrapperMiniImages>
        </WrapperImages>
        <WrapperInfo>
          <DetailsSingleProduct />
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
