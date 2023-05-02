import React from "react";
import { Container, Wrapper, Line } from "./Style";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import InfoPrice from "./InfoPrice";
const SideBarPlaceOrder = () => {
  const dataCart = useSelector((state) => state.cart.data);
  return (
    <Container>
      <Wrapper>
        {dataCart.data &&
          dataCart.data.cartItems.map((val) => {
            return <CardItem key={val._id} data={val} />;
          })}
      </Wrapper>
      <Line />
      <Wrapper>
        <InfoPrice />
      </Wrapper>
      
    </Container>
  );
};

export default SideBarPlaceOrder;
