import React from 'react'
import {
    DivElements,
  } from "./Style";
import { DetailsFooter } from '../../../SubComponents';
const CardFooter = ({data}) => {
  return (
    <DivElements>
    <DetailsFooter
      title={data.title}
      desc={data.desc}
      image={`${data.image}`}
    />
  </DivElements>
  )
}

export default CardFooter