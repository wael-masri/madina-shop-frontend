import React from "react";
import {
  ContainerMenuSidde,
  ItemMenuSide,
  ImageMenuSide,
  LineMenu,
  WrapperImageSide,
  NameUserSide,
  IconHome,
  IconInfo,
  IconImage,
  IconPassword,
  IconClose,
} from "./Style";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MenuSide = ({ countItemMenu, setCountItemMenu,setIsOpenMneu,isOpenMneu }) => {
  const navigate = useNavigate();
  const dataItemMenu = [
    { id: 1, name: "Personal Information",icon:<IconInfo /> },
    { id: 2, name: "Profile Image" ,icon:<IconImage /> },
    { id: 3, name: "Change Password" ,icon:<IconPassword /> },
    { id: 4, name: "Close Account" ,icon:<IconClose /> },
  ];

  const dataUser = useSelector((state) => state.dataStatic.userLogin);
  return (
    <ContainerMenuSidde>
      <WrapperImageSide>
        <ImageMenuSide src={dataUser.profileImage} alt="profileimage" />
      </WrapperImageSide>
      <NameUserSide>{dataUser.name}</NameUserSide>
      <LineMenu />
      <ItemMenuSide onClick={() => navigate("/")}><IconHome /> Home Page</ItemMenuSide>
      {dataItemMenu &&
        dataItemMenu.map((val, index) => {
          return (
            <ItemMenuSide
              onClick={() => {setCountItemMenu(val.id); if(isOpenMneu){ setIsOpenMneu(!isOpenMneu)}}}
              key={index}
              focused={val.id === countItemMenu}
            >
             {val.icon} {val.name}
            </ItemMenuSide>
          );
        })}
    </ContainerMenuSidde>
  );
};

export default MenuSide;
