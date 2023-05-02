import React from "react";
import { ContainerOrder,EmptyOrder } from "./Style";
import CardOrder from "./CardOrder";

import { useSelector } from "react-redux";
import LoadingCardOrder from "../../../LoadingTemplates/LoadingCardOrder";
const Orders = () => {
  const orders = useSelector((state) => state.order.data);
  const loadOrder = useSelector((state) => state.order);

  return (
    <ContainerOrder>
      {orders.data && orders.data.length === 0 ? (
        <EmptyOrder>No Orders History</EmptyOrder>
      ) : (
        <>
          {loadOrder.loading ? (
            <>
              <LoadingCardOrder />
              <LoadingCardOrder />
              <LoadingCardOrder />
            </>
          ) : (
            <>
              {orders.data &&
                orders.data.map((val, index) => {
                  return <CardOrder key={index} data={val} />;
                })}
            </>
          )}
        </>
      )}
    </ContainerOrder>
  );
};

export default Orders;
