import React from 'react'
import { BrandsImg, Container,WrapperBrands } from './Style'
import brand1 from "../../../Assets/Images/1.png"
import brand2 from "../../../Assets/Images/2.png"
import brand3 from "../../../Assets/Images/3.png"
import brand4 from "../../../Assets/Images/4.png"
import brand5 from "../../../Assets/Images/5.png"
const Brands = () => {
  return (
    <Container>
        <WrapperBrands><BrandsImg src={brand1} alt="brands" /></WrapperBrands>
        <WrapperBrands><BrandsImg src={brand2} alt="brands" /></WrapperBrands>
        <WrapperBrands><BrandsImg src={brand3} alt="brands" /></WrapperBrands>
        <WrapperBrands><BrandsImg src={brand4} alt="brands" /></WrapperBrands>
        <WrapperBrands><BrandsImg src={brand5} alt="brands" /></WrapperBrands>
      
    </Container>
  )
}

export default Brands