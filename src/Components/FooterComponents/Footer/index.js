import React, { useEffect } from "react";
import { Container, DivElements, Wrapper, Line } from "./Style";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../Redux/Api/categoryApi";
import { GalleryFooter } from "../../../SubComponents";
import InfoFooter from "./InfoFooter";
import UsefulLinks from "./UsefulLinks";
import AccountLinks from "./AccountLinks";
import { FooterCardData } from "../../../Assets/CustomCss/data";
import CardFooter from "./CardFooter";
import BottomFooter from "./BottomFooter";
const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const dispatch = useDispatch();
  useEffect(() => {
    let limit = 8;
    getCategories(dispatch, limit);
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <InfoFooter />
        <UsefulLinks splitLocation={splitLocation} />
        <AccountLinks splitLocation={splitLocation} />
        <DivElements>
          <GalleryFooter />
        </DivElements>
      </Wrapper>
      <Line />
      <Wrapper>
        {FooterCardData &&
          FooterCardData.map((val, index) => {
            return <CardFooter data={val} key={index} />;
          })}
      </Wrapper>
      <Line />
      <BottomFooter />
    </Container>
  );
};

export default Footer;
