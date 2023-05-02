import React from "react";
import {
  Container,
  WrapperTitle,
  Wrapper,
  WrapperArticles,
  WrapperSideBarBlog,
  WrapperCardBlog,
  CardOfBlog
} from "./Style";
import BigTitle from "../../../SubComponents/BigTitle";
import SideBarBlog from "../../../SubComponents/SideBarBlog";
import PostBlog from "../../../SubComponents/PostBlog";
import CardBlog from "../../../SubComponents/CardBlog";
const Blog = () => {
  return (
    <Container>
      <WrapperTitle>
        <BigTitle title="LATEST NEWS & ARTICLES" />
      </WrapperTitle>
      <Wrapper>
        <WrapperArticles>
          <PostBlog />
          <WrapperCardBlog>
          <CardOfBlog>
            <CardBlog />
          </CardOfBlog>
          <CardOfBlog>
            <CardBlog />
          </CardOfBlog>
          <CardOfBlog>
            <CardBlog />
          </CardOfBlog>
          <CardOfBlog>
            <CardBlog />
          </CardOfBlog>
          <CardOfBlog>
            <CardBlog />
          </CardOfBlog>
          <CardOfBlog>
            <CardBlog />
          </CardOfBlog>
          <CardOfBlog>
            <CardBlog />
          </CardOfBlog>
        
          </WrapperCardBlog>
        </WrapperArticles>

        <WrapperSideBarBlog>
          <SideBarBlog />
        </WrapperSideBarBlog>
      </Wrapper>
    </Container>
  );
};

export default Blog;
