import React from 'react'
import { useSelector } from 'react-redux';
import {
    WrapperFeatures,
    FeaturesName,
    WrapperFeaturesItem,
    FeaturesCat,
  } from "./Style";
const Category = () => {
    const dataProduct = useSelector((state) => state.product.dataById);
  return (
    <WrapperFeatures>
    <FeaturesName>Categories:</FeaturesName>
    <WrapperFeaturesItem>
      <FeaturesCat>
        &nbsp;{dataProduct.category && dataProduct.category.name}
      </FeaturesCat>
    </WrapperFeaturesItem>
  </WrapperFeatures>
  )
}

export default Category