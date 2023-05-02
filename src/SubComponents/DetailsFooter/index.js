import React from "react";
import { Wrapper, Image, WrapperText, Text,Title } from "./Style.js";
const DetailsFooter = (props) => {
 const {title,desc,image } = props 
  return (
    <Wrapper>
      <Image src={image} alt="miniphoto" />
      <WrapperText>
        <Title>{title}</Title>
        <Text>{desc}</Text>
      </WrapperText>
    </Wrapper>
  );
};

export default DetailsFooter;
