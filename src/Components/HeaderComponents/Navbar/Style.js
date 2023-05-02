import styled,{css} from "styled-components";
import { Link } from "react-router-dom";
import {FiMenu} from "react-icons/fi";
import {IoMdClose} from "react-icons/io";
import { ContainerMega, WrapperMegaNav } from "../../../SubComponents/CustomMegaMenu/Style";
import { hover, mobile } from "../../../Assets/CustomCss/Responsive";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const Container = styled.div`
  width: 100%;
  padding: 0px 60px;
  background-color: ${({theme}) => theme.BLACKCOLOR};
  min-height: 60px;
  display: flex;
  position: relative;
`;
export const ContainerRes = styled.div`
  width: 100%;
  padding: 0px 60px;
  background-color: ${({theme}) => theme.BLACKCOLOR};
  min-height: 60px;
  display: flex;
 
  ${mobile({
    padding:"0px",
    
    justifyContent:"center",
    alignItems:"center"
  })}
`;
export const IconMenu = styled(FiMenu)`

color: ${({theme}) => theme.REDCOLOR};
cursor: pointer;
font-size: 30px;

`;
export const IconCloseMenu = styled(IoMdClose)`
color: ${({theme}) => theme.REDCOLOR};
cursor: pointer;
font-size: 30px;
`;
export const WrapperIconMneu = styled.div`
position: absolute;
right: 5px;
height: 100%;
display: none;
${mobile({
  display: "flex",
  alignItems:"center"
})}
`;
export const NavWrapperResponsive = styled.div`
 color: ${({theme}) => theme.WHITECOLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection:"column"
  })}
`;
export const NavWrapper = styled.div`
  color: ${({theme}) => theme.WHITECOLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    display:"none"
  })}
`;
export const NavItems = styled.div`
  color: ${({theme}) => theme.WHITECOLOR};
  text-decoration: none;
  outline: none;
  height: 100%;
  margin: 0px 3px;
  padding: 15px 25px;
  background-color: ${({theme}) => theme.BLACKCOLOR};
  border-bottom: 4px solid ${({theme}) => theme.BLACKCOLOR};
  transition: 0.4s ease;
  position: relative;
 
  &:after {
  content: "";
  position: absolute;
  right: ${props => props.active === "active"? "auto" : "0px"};
  width: ${props => props.active === "active"? "100%" : "0px"};
  bottom: -5px;
  left: ${props => props.active === "active"? "0" : "none"};
  background: ${({theme}) => theme.REDCOLOR};
  height: 4px;
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  ${mobile({
    bottom: '0px'
  })}
}
&:hover:after,
:focus:after,
:active:after {
  left: 0;
  right: auto;
  width: 100%;
}

  ${hover(ContainerMega,{opacity:0})}
  ${mobile({width:"100%",alignItem:"center",display:"flex",justifyContent:"center",})}
`;
export const NavText = styled(Link)`
  color: ${({theme}) => theme.WHITECOLOR};
  text-decoration: none;
  outline: none;
  font-size: 16px;
  letter-spacing: 2px;
`;
export const WrapperBlog = styled.div`
   &:hover ${ContainerMega}{
  transition:0.2s ease-in-out;
  visibility: visible;
  opacity: 1;
  z-index: 99999;
  }
  &:hover ${WrapperMegaNav}{
   transform: translateY(0px);
   transition: 0.2s ease-in-out;
   z-index: 2;
  }
`;
export const DownIcon = styled(KeyboardArrowDownIcon)`
vertical-align: middle;
`;




