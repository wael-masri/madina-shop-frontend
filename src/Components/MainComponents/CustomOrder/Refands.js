import React from "react";
import { ContainerOrder, EmptyOrder } from "./Style";
import CardOrder from "./CardOrder";

import { useSelector } from "react-redux";
import LoadingCardOrder from "../../../LoadingTemplates/LoadingCardOrder";
const Refunds = () => {
  const loadOrder = useSelector((state) => state.order);
  const orders = useSelector((state) => state.order.data);

  return (
    <ContainerOrder>
      {orders.data && orders.data.length === 0 ? (
        <EmptyOrder>No Orders Refunds</EmptyOrder>
      ) : null}
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
                return <CardOrder refund="true" key={index} data={val} />;
              })}
          </>
        )}
      </>
    </ContainerOrder>
  );
};

export default Refunds;
