import React, { useState, useEffect } from "react";
import { Container } from "./Style";
import MenuBar from "./MenuBar";
import Orders from "./Orders";
import Refands from "./Refands";
import { getOrders } from "../../../Redux/Api/orderApi";
import { useDispatch } from "react-redux";

const CustomOrder = () => {
  const [countMenu, setCountMenu] = useState(2);
  const dispatch = useDispatch();
  useEffect(() => {
    var refund;
    if (countMenu == 2) {
      refund = false;
    } else {
      refund = true;
    }
    getOrders(dispatch, refund);
  }, [dispatch, countMenu]);
  return (
    <Container>
      <MenuBar setCountMenu={setCountMenu} countMenu={countMenu} />
      {countMenu === 1 ? <Refands /> : <Orders />}
    </Container>
  );
};

export default CustomOrder;
