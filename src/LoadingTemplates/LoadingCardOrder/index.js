import React from "react";
import {
  WrapperBoxOrder,
  BoxOrder,
  BoxOrderHeader,
  BoxOrderHeader1,
  BoxOrderHeader2,
  SpanBoxOrderHeader1,
  SpanBoxOrderHeader2,
  BoxOrderBody1,
  BoxOrderBody,
  TitleBoxOrder,
  InfoBoxOrder,
  Divfisrt,
  BodyDib,
  WrapperStatusDiv,
  ReflectBodyDib,
  LabelFlesh,
  EstimatedArr,
  WrapperLoadingItem
} from "./Style";
import { Skeleton } from "@mui/material";
const LoadingCardOrder = () => {
  return (
    <WrapperBoxOrder>
      <BoxOrder>
        <BoxOrderHeader>
          <BoxOrderHeader1>
          <Skeleton width={"100px"} />
            <SpanBoxOrderHeader1><Skeleton width={"60px"} /></SpanBoxOrderHeader1>
          </BoxOrderHeader1>
          <BoxOrderHeader2>
          <SpanBoxOrderHeader2><Skeleton width={"60px"} /></SpanBoxOrderHeader2>
          </BoxOrderHeader2>
        </BoxOrderHeader>
        <BoxOrderBody>
          <BoxOrderBody1>
          <Skeleton width={"120px"} />
          <WrapperLoadingItem>
          <Skeleton width={"100px"} height={"100px"} />
          <Skeleton width={"60px"} />
          </WrapperLoadingItem>
          <WrapperLoadingItem>
          <Skeleton width={"100px"} height={"100px"} />
          <Skeleton width={"60px"} />
          </WrapperLoadingItem>
          
          
          
          </BoxOrderBody1>
          <BoxOrderBody1>
          <Skeleton width={"120px"} />
            <InfoBoxOrder colored={true}>
            <Skeleton width={"20%"} />
            </InfoBoxOrder>
            <InfoBoxOrder><Skeleton width={"20%"} /></InfoBoxOrder>
            <InfoBoxOrder><Skeleton width={"20%"} /></InfoBoxOrder>
            <InfoBoxOrder><Skeleton width={"20%"} /></InfoBoxOrder>
          </BoxOrderBody1>
          <BoxOrderBody1>
          <Skeleton width={"120px"} />
            <WrapperStatusDiv>
              <LabelFlesh ><Skeleton width={"20%"} /></LabelFlesh>
              <LabelFlesh><Skeleton width={"20%"} /></LabelFlesh>
              <LabelFlesh><Skeleton width={"20%"} /></LabelFlesh>
            </WrapperStatusDiv>
            <WrapperStatusDiv>
              <BodyDib ></BodyDib>
              <Divfisrt ></Divfisrt>
              <ReflectBodyDib></ReflectBodyDib>
              <BodyDib></BodyDib>
              <Divfisrt></Divfisrt>
              <ReflectBodyDib></ReflectBodyDib>
              <BodyDib></BodyDib>
              <Divfisrt></Divfisrt>
            </WrapperStatusDiv>
            <EstimatedArr><Skeleton width={"220px"} /></EstimatedArr>
            <Skeleton width={"220px"} />
            <EstimatedArr><Skeleton width={"220px"} height={"60px"} /></EstimatedArr>
          </BoxOrderBody1>
        </BoxOrderBody>
      </BoxOrder>
    </WrapperBoxOrder>
  );
};

export default LoadingCardOrder;
