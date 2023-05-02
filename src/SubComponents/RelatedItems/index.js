import React from "react";
import BigTitle from "../BigTitle";
import {
  Container,
  WrapperTitle,
  Wrapper,
  StyledSlider,
  NextArrowSlider,
  PreArrowSlider,
  WrapperCard,
} from "./Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "../CardItem";
import {useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { CardLoading } from "../../LoadingTemplates";

const RelatedItems = () => {
  const loadingRelated = ["1", "2", "3", "4"];
  const relatedProducts = useSelector((state) => state.product);

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <NextArrowSlider
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    />
  );

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <PreArrowSlider
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    />
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <WrapperTitle>
        <BigTitle title="Related Products" />
      </WrapperTitle>
      <Wrapper>
        <StyledSlider {...settings}>
          {relatedProducts.loadingRelated
            ? loadingRelated.map((val, index) => {
                return (
                 <CardLoading key={index} />
                );
              })
            : relatedProducts.dataRelated.map((val, index) => {
                return (
                  <WrapperCard key={index}>
                    <CardItem data={val} />
                  </WrapperCard>
                );
              })}
        </StyledSlider>
      </Wrapper>
    </Container>
  );
};

export default RelatedItems;
