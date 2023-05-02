import React from 'react'
import {
    Container,
    Wrapper,
    WrapperImages,
    WrapperImageCover,
    WrapperInfo,
    WrapperMiniImages,
    WrapperMiniImage,
    WrapperMiniImagesScroll,
    Title,
    WrapperBottom
  } from "./Style";
  import Skeleton from "@mui/material/Skeleton";
const SingleItem = () => {
  return (
    <Container>
    <Wrapper>
      <WrapperImages>
        <WrapperImageCover>
          <Skeleton  width="100%" height="100%" variant="rectangular" />
        </WrapperImageCover>
        <WrapperMiniImages>
          <WrapperMiniImagesScroll >
            <WrapperMiniImage>
            <Skeleton  width="100%" height="100%" variant="rectangular" />
            </WrapperMiniImage>
            
                  <WrapperMiniImage>
                  <Skeleton  width="100%" height="100%" variant="rectangular" />
                  </WrapperMiniImage>
                  <WrapperMiniImage>
                  <Skeleton  width="100%" height="100%" variant="rectangular" />
                  </WrapperMiniImage>
                  <WrapperMiniImage>
                  <Skeleton  width="100%" height="100%" variant="rectangular" />
                  </WrapperMiniImage>
                 
                
            
          </WrapperMiniImagesScroll>
       
      
        </WrapperMiniImages>
      </WrapperImages>
      <WrapperInfo>
        <Title>
        <Skeleton  width="40%" height="50px" />
        </Title>
      
      <Skeleton  width="40%" />
      <Skeleton  width="20%" />
      <Skeleton  width="70%" />
      <Skeleton  width="70%" />
      <Skeleton  width="70%" />
      <Skeleton  width="50%" />
      <Skeleton  width="70%" />
      <Skeleton  width="70%" />
      <Skeleton  width="70%" />
      <Skeleton  width="70%" />
      <WrapperBottom>
      <Skeleton  width="30%" />
      <Skeleton  width="30%" />
      </WrapperBottom>
      
      </WrapperInfo>
    </Wrapper>
  </Container>
  )
}

export default SingleItem