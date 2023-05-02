import React from "react";
import { Description, Title, WrapLi, Wrapper, WrapUl,WrapIcon,IconDone } from "./Style";

const ProductDetails = () => {
  return (
    <Wrapper>
      <Title>Experience is over the world visit</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium,
        dolor tellus aliquet nunc vitae ultricies erat elit eu lacus. Vestibulum
        non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam
        sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed
        nibh egestas elementum. Mauris et bibendum dui. Aenean consequat
        pulvinar luctus.
      </Description>
      <Title>More Details</Title>
      <WrapUl>
        <WrapLi><WrapIcon><IconDone /></WrapIcon>Lorem Ipsum generators on the tend to repeat.</WrapLi>
        <WrapLi><WrapIcon><IconDone /></WrapIcon>If you are going to use a passage.</WrapLi>
        <WrapLi><WrapIcon><IconDone /></WrapIcon>Lorem Ipsum generators on the tend to repeat.</WrapLi>
        <WrapLi><WrapIcon><IconDone /></WrapIcon>If you are going to use a passage.</WrapLi>
      </WrapUl>
    </Wrapper>
  );
};

export default ProductDetails;
