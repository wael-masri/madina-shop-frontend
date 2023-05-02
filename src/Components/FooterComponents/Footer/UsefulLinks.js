import React from 'react'
import {
    DivElements,
    ItemUl,
    ItemLi,
    MediumTitle,
  } from "./Style";
import { useNavigate } from 'react-router-dom';
const UsefulLinks = ({splitLocation}) => {
    const navigate = useNavigate();
  return (
    <DivElements>
    <ItemUl>
      <MediumTitle>Useful Links</MediumTitle>
      <ItemLi
        onClick={() => navigate("/blog")}
        focused={splitLocation[1] === "blog"}
      >
        About Us
      </ItemLi>
      <ItemLi
        onClick={() => navigate("/category")}
        focused={splitLocation[1] === "category"}
      >
        Shop
      </ItemLi>
      <ItemLi
        onClick={() => navigate("/help")}
        focused={splitLocation[1] === "help"}
      >
        Help
      </ItemLi>
      <ItemLi
        onClick={() => navigate("/contact")}
        focused={splitLocation[1] === "contact"}
      >
        Contact
      </ItemLi>
    </ItemUl>
  </DivElements>
  )
}

export default UsefulLinks