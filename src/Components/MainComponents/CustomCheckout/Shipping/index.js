import React, { useEffect } from "react";
import {
  Container,
  ButtonReturn,
  IconPrev,
  ButtonContinue,
  WrapperButtons,
  IconNextButton,
} from "./Style";
import  secureLocalStorage  from  "react-secure-storage";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOrder } from "../../../../Redux/Actions/DataStaticActions";
import { useNavigate } from "react-router-dom";
import BoxHeader from "./BoxHeader";
import BoxShipping from "./BoxShipping";
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const informationOrder = JSON.parse(secureLocalStorage.getItem("informationOrder"));
  const shipping = JSON.parse(secureLocalStorage.getItem("shippingCost"));
  const dataStatic = useSelector(state => state.dataStatic);

  useEffect(() => {
    if (!(informationOrder && Object.keys(informationOrder).length !== 0)) {
      dispatch(setMenuOrder(1));
      secureLocalStorage.setItem("menuOrder", 1);
    }
  }, []);
  const changeInfo = () => {
    dispatch(setMenuOrder(1));
    secureLocalStorage.setItem("menuOrder", 1);
  };
  const continuePayment = () => {
    if (
      shipping &&
      Object.keys(shipping).length !== 0 &&
      informationOrder &&
      Object.keys(informationOrder).length !== 0
    ) {
      if (
        dataStatic.userLogin &&
        Object.keys(dataStatic.userLogin).length !== 0
      ) {
        dispatch(setMenuOrder(3));
        secureLocalStorage.setItem("menuOrder", 3);

      }else{
        navigate("/login");
      }
    } else {
      navigate("/cart");
    }
  };
  return (
    <Container>
     <BoxHeader changeInfo={changeInfo} informationOrder={informationOrder} />
    <BoxShipping shipping={shipping} />
      <WrapperButtons>
        <ButtonReturn>
          <IconPrev /> Return to Information
        </ButtonReturn>
        <ButtonContinue onClick={() => continuePayment()}>
          Continue To Payment <IconNextButton />
        </ButtonContinue>
      </WrapperButtons>
    </Container>
  );
};

export default Shipping;
