import React from "react";
import {
  Container,
  SideBar,
  SideProduct,
  Wrapper,
  WrapperHeaderProducts,
  TextHeader,
  ButtonsHeader,
  WrapperProduct,
} from "./Style";
import { Skeleton } from "@mui/material";
import CardLoading from "../Item";
import SideBarCategory from "../../SubComponents/SideBarCategory";

const ProductsLoading = () => {
  return (
    <Container>
      <Wrapper>
        <SideProduct>
          <WrapperHeaderProducts>
            <TextHeader>
              <Skeleton width={"150px"} height={"50px"} />
            </TextHeader>
            <ButtonsHeader>
              <Skeleton width={"50px"} height={"50px"} />
              <Skeleton width={"50px"} height={"50px"} />
            </ButtonsHeader>
          </WrapperHeaderProducts>
          <WrapperProduct>
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </WrapperProduct>
        </SideProduct>
        <SideBar>
          <SideBarCategory />
        </SideBar>
      </Wrapper>
    </Container>
  );
};

export default ProductsLoading;
