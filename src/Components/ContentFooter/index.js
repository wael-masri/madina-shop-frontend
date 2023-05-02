import React from 'react'
import {Container} from "./Style";
import { FooterMini } from '../FooterComponents';
const ContentFooter = ({children}) => {
  return (
    <Container>
    {children}
    <FooterMini />
    </Container>
  )
}

export default ContentFooter