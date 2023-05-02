import React, { useEffect } from "react";
import { Footer } from "../FooterComponents";
import {
  Announcement,
  LogoHome,
  Navbar,
  TopButtons,
} from "../HeaderComponents";
import { Container } from "./Style";
import { getCarts } from "../../Redux/Api/cartApi";
import { useDispatch, useSelector } from "react-redux";
import { clearAccount } from "../../Redux/Actions/CartActions";

const HeaderFooter = ({ children }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.dataStatic.userLogin);
  useEffect(() => {
    if (userLogin._id) {
      
      getCarts(dispatch);
    }else{
      dispatch(clearAccount());
    }
  }, [userLogin]);
  return (
    <Container>
      <Announcement />
      <TopButtons />
      <LogoHome />
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default HeaderFooter;
