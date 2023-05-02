import React from "react";
import {
  Container,
  Title,
  WrapperButton,
  WrapperImage,
  WrapperTime,
  IconTime,
  Time,
  TextDesc,
  Button,
  Image,
} from "./Style";
import blogpic from "../../Assets/Images/blog.jpg";

const PostBlog = () => {
  return (
    <Container>
      <Title>The main objectives of the marketer</Title>
      <WrapperTime>
        <Time>
          <IconTime /> 12.01.2022
        </Time>
        </WrapperTime>
        <WrapperImage>
          <Image src={blogpic} alt="blogpic" />
        </WrapperImage>
        <TextDesc>
          The ability to manage money competently is especially valuable quality
          in the conditions of financial crisis, when the purchasing power of
          the population is shrinking, inflation is rising, and currency
          exchange rates are completely unpredictable. Below are the common
          mistakes related to money affairs along with financial planning advice
          to help manage your own finances properly.
        </TextDesc>
        <WrapperButton>
            <Button>Read More</Button>
        </WrapperButton>
    </Container>
  );
};

export default PostBlog;
