import React, { useEffect } from "react";
import { FirstWrapper, SecondWrapper, Container, Title } from "./Style";
import { SideBarPlaceOrder } from "../../../SubComponents";
import PersonalInformation from "./PersonalInformation";
import NavOrder from "./NavOrder";
import Shipping from "./Shipping";
import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOrder } from "../../../Redux/Actions/DataStaticActions";
import secureLocalStorage from "react-secure-storage";
const CustomCheckout = () => {
  const dispatch = useDispatch();
  const dataStatic = useSelector((state) => state.dataStatic);
  const menuOrder = secureLocalStorage.getItem("menuOrder");

  useEffect(() => {
    const checkUserData = () => {
      if (menuOrder) {
        dispatch(setMenuOrder(parseInt(menuOrder)));
      } else {
        dispatch(setMenuOrder(1));
      }
    };
    checkUserData();
  }, []);
  return (
    <Container>
      <FirstWrapper>
        <Title>MadinaShop Order</Title>
        <NavOrder />
        {dataStatic.menuOrder === 1 ? (
          <PersonalInformation />
        ) : dataStatic.menuOrder === 2 ? (
          <Shipping />
        ) : (
          <Payment />
        )}
      </FirstWrapper>
      <SecondWrapper>
        <SideBarPlaceOrder />
      </SecondWrapper>
    </Container>
  );
};

export default CustomCheckout;
