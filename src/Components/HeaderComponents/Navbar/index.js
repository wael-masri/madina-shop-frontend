import React from "react";
import CustomMegaMenu from "../../../SubComponents/CustomMegaMenu";
import {
  Container,
  NavItems,
  NavWrapper,
  NavText,
  WrapperBlog,
  DownIcon,
  IconMenu,
  IconCloseMenu,
  WrapperIconMneu,
  NavWrapperResponsive,
  ContainerRes,
} from "./Style";
import { useLocation } from "react-router-dom";
import { linksDataNavbar } from "../../../Assets/CustomCss/data";
import { useState } from "react";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const handleChangeMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      <Container>
        <WrapperIconMneu>
          {isMenu ? (
            <IconCloseMenu onClick={handleChangeMenu} />
          ) : (
            <IconMenu onClick={handleChangeMenu} />
          )}
        </WrapperIconMneu>
        <NavWrapper>
          {linksDataNavbar &&
            linksDataNavbar.map((val, index) => {
              return (
                <NavText to={`/${val.link}`} key={index} >
                  <NavItems
                    active={splitLocation[1] === val.link ? "active" : null} 
                  >
                    {val.name}
                  </NavItems>
                </NavText>
              );
            })}
        </NavWrapper>
      </Container>
      {isMenu ? <ContainerRes>
        <NavWrapperResponsive>
          {linksDataNavbar &&
            linksDataNavbar.map((val, index) => {
              return (
                <NavText onClick={handleChangeMenu} to={`/${val.link}`} key={index}>
                  <NavItems
                    active={splitLocation[1] === val.link ? "active" : null}
                  >
                    {val.name}
                  </NavItems>
                </NavText>
              );
            })}
        </NavWrapperResponsive>
      </ContainerRes> : null}
    </>
  );
};

export default Navbar;
