import React, { useState } from "react";
import FAQComponents from "../../../SubComponents/FAQComponents";
import ProductDetails from "../../../SubComponents/ProductDetails";
import ReviewProduct from "../../../SubComponents/ReviewProduct";
import { Container, WrappperButton, Buttons, Wrappper } from "./Style";

const AboutProduct = () => {
  const [field, setField] = useState(null);
  const showByButton = (newField) => {
    setField(newField);
  };

  return (
    <Container>
      <WrappperButton>
        <Buttons
          onClick={() => {
            showByButton("productDetails");
          }}
        >
          PRODUCT DETAILS
        </Buttons>
        <Buttons onClick={() => showByButton("review")}>REVIEW</Buttons>
        <Buttons onClick={() => showByButton("faq")}>FAQ</Buttons>
      </WrappperButton>
      <Wrappper>
        {field === null ? (
          <ReviewProduct />
        ) : field === "review" ? (
          <ReviewProduct />
        ) : field === "productDetails" ? (
          <ProductDetails />
        ) : field === "faq" ? (
          <FAQComponents />
        ) : (
          <></>
        )}
      </Wrappper>
    </Container>
  );
};

export default AboutProduct;
