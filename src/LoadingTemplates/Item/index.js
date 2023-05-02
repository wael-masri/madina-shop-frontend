import React from "react";
import {
  Container,
  Wrapper,
  WrapperImage,
  WrapperDesc,
  WrapperRting,
  Line,
  OldPrice,
  WrapperCounter,
  WrapperCurrency,
  WrapperBottom,
 
} from "./Style";

import { Skeleton } from "@mui/material";

const CardLoading = () => {

  const CardItemApp = () => {
    return (
      <Container>
        <Wrapper>
          <WrapperImage>
            <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
          </WrapperImage>
          <WrapperDesc>
            <WrapperRting>
              <Skeleton width={"90%"} />
            </WrapperRting>
            <Skeleton width={"50%"} />
            <Skeleton width={"40%"} />
            <Line></Line>
            <WrapperBottom>
              <WrapperCurrency>
                <OldPrice>
                  <Skeleton width={"60px"} />
                </OldPrice>
               
              </WrapperCurrency>
              <WrapperCounter>
                <Skeleton width={"60px"} />
              </WrapperCounter>
            </WrapperBottom>
          </WrapperDesc>
        </Wrapper>
      </Container>
    );
  };

  return <CardItemApp />;
};

export default CardLoading;
