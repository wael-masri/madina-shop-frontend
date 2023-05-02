import React from 'react'
import {
  
    WrapperDetails,
    Details,
    LabelDetails,
    LinkDetails,
    Line,
    ContentDetails,
   
  } from "./Style";
const BoxHeaderInfo = ({changeInfo,informationOrder,shipping}) => {
  return (
    <WrapperDetails>
        <Details>
          <LabelDetails>Contact</LabelDetails>
          <ContentDetails>
            {informationOrder && informationOrder.contact}
          </ContentDetails>
          <LinkDetails onClick={() => changeInfo()}>Change</LinkDetails>
        </Details>
        <Line />
        <Details>
          <LabelDetails>Ship to</LabelDetails>
          <ContentDetails>
            {informationOrder && informationOrder.address}
          </ContentDetails>
          <LinkDetails onClick={() => changeInfo()}>Change</LinkDetails>
        </Details>
        <Line />
        <Details>
          <LabelDetails>Method</LabelDetails>
          <ContentDetails>
            {shipping && shipping.status} · ${shipping && shipping.shipping}
          </ContentDetails>
          <LinkDetails></LinkDetails>
        </Details>
      </WrapperDetails>
  )
}

export default BoxHeaderInfo