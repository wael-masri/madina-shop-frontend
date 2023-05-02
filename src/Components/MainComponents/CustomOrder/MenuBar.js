import React from 'react';
import {useNavigate} from "react-router-dom";
import {WrapperMenuBar,WrapperMenuBarItem,ItemMenu,SpaceCir,IconHome} from "./Style";
const MenuBar = ({setCountMenu,countMenu}) => {
  const navigate = useNavigate()
  return (
    <WrapperMenuBar>
        <WrapperMenuBarItem>
            <ItemMenu onClick={() => setCountMenu(1)} active={countMenu === 1}>Refunds</ItemMenu>
            <SpaceCir></SpaceCir>
            <ItemMenu active={countMenu === 2} onClick={() => setCountMenu(2)}>Orders</ItemMenu>
            <SpaceCir></SpaceCir>
            <ItemMenu onClick={() => navigate("/")}><IconHome /> Back Home</ItemMenu>
        </WrapperMenuBarItem>
    </WrapperMenuBar>
  )
}

export default MenuBar