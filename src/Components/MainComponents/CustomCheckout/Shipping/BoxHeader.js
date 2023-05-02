import React from 'react'
import {
    WrapperDetails,
    Details,
    LabelDetails,
    LinkDetails,
    Line,
    ContentDetails,
  } from "./Style";
const BoxHeader = ({changeInfo,informationOrder}) => {
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
  </WrapperDetails>
  )
}

export default BoxHeader