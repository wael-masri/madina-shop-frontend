import React from 'react'
import { Container,TitleText } from './Style'

const BigTitle = ({title}) => {
  return (
    <Container>
        <TitleText>
            {title && title}
        </TitleText>
    </Container>
  )
}

export default BigTitle