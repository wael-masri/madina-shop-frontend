import React, { useEffect, useState } from "react";
import {
  Container,
  LogoWrapper,
  Logo,
} from "./Style";
import SearchComponents from "./SearchComponents";
import logo from "../../../Assets/Images/logo.png";
import { useSelector } from "react-redux";
import ProductApi from "../../../Api/ProductApi";
import { useLocation } from "react-router-dom";
import IconsLogoHome from "./IconsLogoHome";

const LogoHome = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [fixedDiv, setFixedDiv] = useState(false);
  const [resultSearch, setResultSearch] = useState([]);
  const [isOpenSearchBox, setIsOpenSearchBox] = useState("");
  const [numberOfWishlist, setNumberOfWishlist] = useState(0);
  const userWishlist = useSelector((state) => state.dataStatic.userLogin);

  const changeBackground = () => {
    if (window.scrollY >= 240) {
      setFixedDiv(true);
    } else {
      setFixedDiv(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  useEffect(() => {
    const getDataSearching = async () => {
      const result = await ProductApi.getBySearching(isOpenSearchBox);
      result && setResultSearch(result.data);
    };
    getDataSearching();
  }, [isOpenSearchBox]);

  useEffect(() => {
    if (userWishlist.wishList) {
      setNumberOfWishlist(userWishlist.wishList.length);
    } else {
      setNumberOfWishlist(0);
    }
  }, [userWishlist]);
  const handleChangeSearch = (e) => {
    setIsOpenSearchBox(e.target.value);
  };
  return (
    <Container>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      <SearchComponents
        resultSearch={resultSearch}
        handleChangeSearch={handleChangeSearch}
        isOpenSearchBox={isOpenSearchBox}
        setIsOpenSearchBox={setIsOpenSearchBox}
      />
      <IconsLogoHome
        splitLocation={splitLocation}
        numberOfWishlist={numberOfWishlist}
      />
    </Container>
  );
};

export default LogoHome;
