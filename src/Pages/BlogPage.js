import React from 'react'
import { SubHeader } from '../SubComponents'
import { Blog } from '../Components/MainComponents'
const BlogPage = () => {
  return (
    <>
    <SubHeader title="Blog" first="Home" linkFirst="/" second="blog" />
    <Blog />
    </>
  )
}

export default BlogPage