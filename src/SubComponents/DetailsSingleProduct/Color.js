import React from 'react'
import { useSelector } from 'react-redux';
import {
    WrapperFeatures,
    FeaturesName,
    WrapperFeaturesItem,
    FeaturesColor,
    ColorsBoxLayer,
    CheckColor,
  } from "./Style";
const Color = ({dataToCart,handleChangeColor}) => {
    const dataProduct = useSelector((state) => state.product.dataById);
  return (
    <WrapperFeatures>
    <FeaturesName>Color:</FeaturesName>
    <WrapperFeaturesItem>
      {dataProduct.color &&
        dataProduct.color.map((val, index) => {
          return (
            <FeaturesColor
              key={index}
              color={val}
              onClick={() => handleChangeColor(val)}
            >
              <ColorsBoxLayer visible={dataToCart.color === val}>
                <CheckColor />
              </ColorsBoxLayer>
            </FeaturesColor>
          );
        })}
    </WrapperFeaturesItem>
  </WrapperFeatures>
  )
}

export default Color