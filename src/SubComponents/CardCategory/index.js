import React from 'react'
import { Container,Wrapper,WrapperImg,WrapperInfo,Title,Desc,ImageCover } from './Style'
const CardCategory = ({data}) => {
  return (
    <Container>

        <Wrapper to="/category" state={data._id}>
            <WrapperImg>
                <ImageCover src={data.image} alt="imgcat" />
            </WrapperImg>
            <WrapperInfo>
                <Title>{data.name}</Title>
                <Desc>({data.numberOfProduct > 1? `${data.numberOfProduct} items` : `${data.numberOfProduct} item`})</Desc>
            </WrapperInfo>
        </Wrapper>
    </Container>
  )
}

export default CardCategory