import styled from "styled-components";
import {BiShowAlt} from "react-icons/bi"
import { mobile } from "../../Assets/CustomCss/Responsive";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${mobile({textAlign:"center"})}
`;
export const OverLay = styled(Link)`
text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(13, 13, 13, 0.4);
  transition: 0.4s ease-in-out;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  ${mobile({width:"60px",height:"60px"})}
`;
export const WrapImage = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  margin: 0px 4px;
  display: inline-block;
  ${mobile({width:"60px",height:"60px"})}
  &:hover ${OverLay} {
    opacity: 1;
    transition: 0.4s ease-in-out;
    
  }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const SearchIcons = styled(BiShowAlt)`
  color: ${({theme}) => theme.GRAYCOLOR};
  position: relative;
  font-size: 28px;
`;
