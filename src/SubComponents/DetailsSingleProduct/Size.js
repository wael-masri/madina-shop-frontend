import React from 'react'
import {
    WrapperFeatures,
    FeaturesName,
    FeaturesItem,
    WrapperFeaturesItem,
  } from "./Style";
import { useSelector } from 'react-redux';
const Size = ({dataToCart,handleChangeSize}) => {
    const dataProduct = useSelector((state) => state.product.dataById);
  return (
    <WrapperFeatures>
        {dataProduct.size && dataProduct.size.length !== 0 ? (
          <>
            {" "}
            <FeaturesName>Size:</FeaturesName>
            <WrapperFeaturesItem>
              {dataProduct.size &&
                dataProduct.size.map((val, index) => {
                  return (
                    <FeaturesItem
                      focused={dataToCart.size === val}
                      key={index}
                      onClick={() => handleChangeSize(val)}
                    >
                      {val}
                    </FeaturesItem>
                  );
                })}
            </WrapperFeaturesItem>{" "}
          </>
        ) : null}
      </WrapperFeatures>
  )
}

export default Size