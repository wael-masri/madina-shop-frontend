import React from "react";
import { Container, NavItem, IconNext } from "./Style";
import { useSelector } from "react-redux";
const NavOrder = () => {
  const dataStatic = useSelector((state) => state.dataStatic);
  return (
    <Container>
      <NavItem hoverAcc={dataStatic.menuOrder >= 1}>Cart</NavItem>
      <IconNext />
      <NavItem
        hoverAcc={dataStatic.menuOrder >= 1}
        focused={dataStatic.menuOrder === 1}
      >
        Information
      </NavItem>
      <IconNext />
      <NavItem
        hoverAcc={dataStatic.menuOrder >= 2}
        focused={dataStatic.menuOrder === 2}
      >
        Shipping
      </NavItem>
      <IconNext />
      <NavItem
        hoverAcc={dataStatic.menuOrder >= 3}
        focused={dataStatic.menuOrder === 3}
      >
        Payment
      </NavItem>
    </Container>
  );
};

export default NavOrder;
