import React from "react";
import {
  Wrapper,
  WrapperImageCover, 
  WrapperInfo,
  WrapperHeader,
  WrapperNameRating,
  WrapperDate,
  Line,
  Container,
  WrapperDateDelete,

} from "./Style";
import { Skeleton } from "@mui/material";
const ReviewLoading = () => {

  return (
    <Container>
      <Wrapper>
        <WrapperImageCover>
         <Skeleton variant="circular" width={60} height={60}  />
        </WrapperImageCover>
        <WrapperInfo>
          <WrapperHeader>
            <WrapperNameRating>
            <Skeleton width="130px"  />
            <Skeleton width="130px"  />
           
            </WrapperNameRating>
            <WrapperDateDelete>
              <WrapperDate>
              <Skeleton width="150px"  />
              </WrapperDate>
            </WrapperDateDelete>
          </WrapperHeader>
          <Skeleton width="50%"  />
        </WrapperInfo>
      </Wrapper>
      <Line />
    </Container>
  );
};

export default ReviewLoading;
