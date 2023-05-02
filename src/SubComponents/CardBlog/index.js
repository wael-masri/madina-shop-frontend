import React from "react";
import {
  Container,
  WrapperImage,
  Image,
  Title,
  WrapperTime,
  IconTime,
  Time,
  TextCard,
} from "./Style";
import blogCard from "../../Assets/Images/blog.jpg"
const CardBlog = () => {
  return (
    <Container>
      <WrapperImage>
        <Image src={blogCard} alt="" />
      </WrapperImage>
      <Title>But I must explain to you how all this mistaken idea </Title>
      <WrapperTime>
        <Time>
          <IconTime /> April 14,2022
        </Time>
      </WrapperTime>
      <TextCard>
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text
      </TextCard>
    </Container>
  );
};

export default CardBlog;
