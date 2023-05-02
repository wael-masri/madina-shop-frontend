import React from "react";
import FirstCard from "../../../SubComponents/FirstCard";
import { slidesData } from "../../../Assets/CustomCss/data";
import {
  Container,
  FirstProductBox,
  SecondProductBox,
  SubContainer,
  WrapperProduct,
  WrapperSlideShow,
} from "./Style";
import offreHome from "../../../Assets/Images/offreHome.png";
import offerHome2 from "../../../Assets/Images/offerHome2.png";
import Slider from "../../../SubComponents/SliderHome";
const SlideShowHome = () => {
  return (
    <Container>
      <SubContainer>
        <WrapperProduct>
          <FirstProductBox>
            <FirstCard
              image={offreHome}
              discount={10}
              title="Iphone Xs"
              state="6428852cc37f825e94adf01f"
            />
          </FirstProductBox>
          <SecondProductBox>
            <FirstCard
              image={offerHome2}
              discount={10}
              title="Dress lk15632"
              state="644825139fc05e0c3dd2a4b0"
            />
          </SecondProductBox>
        </WrapperProduct>
        <WrapperSlideShow>
          <Slider slides={slidesData} />
        </WrapperSlideShow>
      </SubContainer>
    </Container>
  );
};

export default SlideShowHome;
