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
  ButtonRefand,
} from "./Style";
import moment from "moment";
import CardItemOrder from "./CardItem";
import { useDispatch } from "react-redux";
import { UpdateOrderRefund } from "../../../Redux/Actions/OrderActions";
const CardOrder = ({ data, refund }) => {
  const dispatch = useDispatch();

  return (
    <WrapperBoxOrder>
      <BoxOrder>
        <BoxOrderHeader>
          <BoxOrderHeader1>
            Order : {data._id && data._id}
            <SpanBoxOrderHeader1>
              {data.createdAt && moment(data.createdAt).format("MMM DD, YYYY")}
            </SpanBoxOrderHeader1>
          </BoxOrderHeader1>
          <BoxOrderHeader2>
            Order Total:{" "}
            <SpanBoxOrderHeader2>
              ${data.totalOrderPrice && data.totalOrderPrice} ({data.paymentMethodType && data.paymentMethodType})
            </SpanBoxOrderHeader2>
          </BoxOrderHeader2>
        </BoxOrderHeader>
        <BoxOrderBody>
          <BoxOrderBody1>
            <TitleBoxOrder colored={true}>Items</TitleBoxOrder>
            {data.cartItems &&
              data.cartItems.map((val, index) => {
                return <CardItemOrder data={val} key={index} />;
              })}
          </BoxOrderBody1>
          <BoxOrderBody1>
            <TitleBoxOrder>Shipping Info</TitleBoxOrder>
            <InfoBoxOrder colored={true}>
              {data.shippingAddress &&
                data.shippingAddress.firstName +
                  " " +
                  data.shippingAddress.lastName}
            </InfoBoxOrder>
            <InfoBoxOrder>
              {data.shippingAddress && data.shippingAddress.phone}
            </InfoBoxOrder>
            <InfoBoxOrder>
              {data.shippingAddress && data.shippingAddress.city}
            </InfoBoxOrder>
            <InfoBoxOrder>
              {data.shippingAddress && data.shippingAddress.address},
              {data.shippingAddress && data.shippingAddress.appartment}
            </InfoBoxOrder>
          </BoxOrderBody1>
          <BoxOrderBody1>
            <TitleBoxOrder>Package Status</TitleBoxOrder>
            <WrapperStatusDiv>
              <LabelFlesh active={true}>Confirmed</LabelFlesh>
              <LabelFlesh>Shipped</LabelFlesh>
              <LabelFlesh>Delivered</LabelFlesh>
            </WrapperStatusDiv>
            <WrapperStatusDiv>
              <BodyDib first={true} active={true}></BodyDib>
              <Divfisrt active={true}></Divfisrt>
              <ReflectBodyDib></ReflectBodyDib>
              <BodyDib></BodyDib>
              <Divfisrt></Divfisrt>
              <ReflectBodyDib></ReflectBodyDib>
              <BodyDib></BodyDib>
              <Divfisrt></Divfisrt>
            </WrapperStatusDiv>
            <EstimatedArr>
              Estimated arrival: after 3 days $
              {data.shippingPrice && data.shippingPrice}
            </EstimatedArr>
            {refund ? (
              <ButtonRefand
                onClick={() => UpdateOrderRefund(dispatch,refund,data._id)}
              >
                Re-order
              </ButtonRefand>
            ) : (
              <ButtonRefand
                onClick={() => UpdateOrderRefund(dispatch,refund, data._id)}
              >
                Refund Order
              </ButtonRefand>
            )}

            <EstimatedArr>You can only refund order befor shipped</EstimatedArr>
          </BoxOrderBody1>
        </BoxOrderBody>
      </BoxOrder>
    </WrapperBoxOrder>
  );
};

export default CardOrder;
