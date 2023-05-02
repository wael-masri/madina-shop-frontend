import React from 'react'
import { Container,ImageCover,InfoProduct,Title,DescInfo,LinkCard,WrapperImage } from './Style'

const FirstCard = ({image,state,title,discount,price1,price2}) => {
  let discountprice = ((price1 - price2) * 100) / price1;
 
  return (
    <Container>
      
        <InfoProduct>
          <Title>{title}</Title>
          <DescInfo>{discount || discountprice}% off</DescInfo>
          <LinkCard to="/product" state={state}>Shop Now</LinkCard>
        </InfoProduct>
        <WrapperImage>
          <ImageCover src={image} alt="sassa" />
        </WrapperImage>
    </Container>
  )
}

export default FirstCard