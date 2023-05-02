import React from "react";
import { useSelector } from "react-redux";
import {
  WrapperFeatures,
  FeaturesName,
  FeaturesItem,
  WrapperFeaturesItem,
} from "./Style";
const Model = ({ dataToCart, handleChangeModel }) => {
  const dataProduct = useSelector((state) => state.product.dataById);
  return (
    <WrapperFeatures>
      {dataProduct.model && dataProduct.model.length !== 0 ? (
        <>
          <FeaturesName>Model:</FeaturesName>
          <WrapperFeaturesItem>
            {dataProduct.model &&
              dataProduct.model.map((val, index) => {
                return (
                  <FeaturesItem
                    focused={dataToCart.model === val}
                    key={index}
                    onClick={() => handleChangeModel(val)}
                  >
                    {val}
                  </FeaturesItem>
                );
              })}
          </WrapperFeaturesItem>
        </>
      ) : null}
    </WrapperFeatures>
  );
};

export default Model;
