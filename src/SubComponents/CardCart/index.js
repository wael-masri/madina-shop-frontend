import React, { useEffect, useState } from "react";
import {
  Container,
  WrapperImageDetails,
  WrapperInfoItem,
  ImageItem,
  InfoItem,
  SubInfoItem,
  WrapperCounter,
  IncButton,
  DecButton,
  Counter,
  IconDec,
  IconInc,
  BolderDetails,
  TitleCart,
  ButtonRemoveItemCart,
  ColorShowing,
  ButtonSaveQty,
} from "./Style";
import {
  removeCartItem,
  updateCartItem,
} from "../../Redux/Actions/CartActions";
import { useDispatch } from "react-redux";
import { customConfirmation } from "../CustomConfirmation";
const CardCart = ({ data }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    setCount(data.quantity);
  }, []);
  const handleChangeCounter = (actions) => {
    if (actions === "inc") {
      if (count < data.product.quantity) {
        setCount(count + 1);
        setIsEdit(true);
      }
    } else {
      if (count > 1) {
        setCount(count - 1);
        setIsEdit(true);
      }
    }
  };

 const removeItemwithConfirm = () => {
    removeCartItem(dispatch, data._id);
  };
  return (
    <Container>
      <WrapperImageDetails>
        <ImageItem
          src={data.product && data.product.imageCover}
          alt="photoItem"
        />
        <InfoItem>
          <TitleCart>{data.product && data.product.title}</TitleCart>
          <SubInfoItem>
            <BolderDetails>Color: </BolderDetails>
            <ColorShowing color={data.color && data.color} />
          </SubInfoItem>
          <SubInfoItem>
            <BolderDetails>Size: </BolderDetails>
            {data.size && data.size}
          </SubInfoItem>
          <SubInfoItem>
            <BolderDetails>Model: </BolderDetails>
            {data.model && data.model}
          </SubInfoItem>
          <ButtonRemoveItemCart
            onClick={() =>
              customConfirmation(
                removeItemwithConfirm,
                "Madina Shop",
                "Are you sure to remove this product in your cart ?"
              )
            }
          >
            Remove
          </ButtonRemoveItemCart>
        </InfoItem>
      </WrapperImageDetails>
      <WrapperInfoItem>
        <WrapperCounter>
          <DecButton onClick={() => handleChangeCounter("dec")}>
            <IconDec />
          </DecButton>
          <Counter>{count}</Counter>
          <IncButton onClick={() => handleChangeCounter("inc")}>
            <IconInc />
          </IncButton>
        </WrapperCounter>
        {isEdit ? (
          <ButtonSaveQty
            onClick={() => {
              updateCartItem(dispatch, data._id, { quantity: count });
              setIsEdit(false);
            }}
          >
            Update Quantity
          </ButtonSaveQty>
        ) : null}
      </WrapperInfoItem>
      <WrapperInfoItem>${data.price && data.price}</WrapperInfoItem>
      <WrapperInfoItem colorred={true}>
        ${count && count * data.price}
      </WrapperInfoItem>
    </Container>
  );
};

export default CardCart;
