import React from 'react'
import BigTitle from '../../../SubComponents/BigTitle'
import CardCategory from '../../../SubComponents/CardCategory'
import { Container,WrapperTitle,WrapperCategories,Category } from './Style'
import { useSelector } from 'react-redux'

const PopularCategories = () => {
  const categoriesData = useSelector(state => state.category.data);
  return (
    <Container>
   <WrapperTitle>
   <BigTitle title="Popular Categories" />
   </WrapperTitle>
   <WrapperCategories >
    {categoriesData.data && categoriesData.data.map((val,index) => {
      return(
        <Category   key={index}><CardCategory data={val} /></Category>
      )
    })}
   </WrapperCategories>
    </Container>
  )
}

export default PopularCategories