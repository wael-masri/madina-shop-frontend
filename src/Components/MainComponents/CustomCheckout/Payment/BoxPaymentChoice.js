import React from "react";
import {
  Line,
  DetailsPayment,
  WrapperPayment,
  LabelPaymentChoice,
  IconPayment,
  IconCash,
} from "./Style";
const BoxPaymentChoice = ({togglePayment,ispaymentMethod}) => {
  return (
    <WrapperPayment>
      <DetailsPayment>
        <IconCash
          onClick={() => togglePayment("cash")}
          ispayment={ispaymentMethod === "cash" ? 1 : 0}
        />
        <LabelPaymentChoice
          ispayment={ispaymentMethod === "cash" ? 1 : 0}
          onClick={() => togglePayment("cash")}
        >
          Cash on delivery
        </LabelPaymentChoice>
      </DetailsPayment>
      <Line />
      <DetailsPayment>
        <IconPayment
          onClick={() => togglePayment("payment")}
          ispayment={ispaymentMethod === "payment" ? 1 : 0}
        />
        <LabelPaymentChoice
          ispayment={ispaymentMethod === "payment" ? 1 : 0}
          onClick={() => togglePayment("payment")}
        >
          Credit Card
        </LabelPaymentChoice>
      </DetailsPayment>
    </WrapperPayment>
  );
};

export default BoxPaymentChoice;
