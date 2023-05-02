import styled from "styled-components";
import { Link } from "react-router-dom";
import {CiMenuKebab} from "react-icons/ci";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { mobile } from "../../../Assets/CustomCss/Responsive";

export const Container = styled.div`
  width: 100%;
  padding: 2px 60px;
  color: ${({theme}) => theme.TEXTCOLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease-in-out;
  ${mobile({padding:"5px 5px"})}
  &.fixedContainer{
   
  top: 0;
  background-color: ${({theme}) => theme.BACKGROUND1};
  position: fixed;
  z-index: 111111;
  transition: 0.3s ease-in-out;
  width: 100%;
  
 box-shadow:0px 3px 10px ${({theme}) => theme.TEXTCOLOR};
  
  }
`;
export const LogoWrapper = styled.div`
  flex: 1;
  height: 80px;
`;
export const SearchForm1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  border: 1px solid ${({theme}) => theme.TEXTCOLOR};
  background-color: ${({theme}) => theme.FAKEWHITE};
  border-radius: 7px;
  ${mobile({display:"none"})}
`;
export const InputSearch = styled.input`
  width: 100%;
  border: none;
  padding: 5px;
  background-color: ${({theme}) => theme.FAKEWHITE};
  color: ${({theme}) => theme.TEXTCOLOR};
  &:focus {
        outline: none;
        
    }
  
`;
export const IconSearch = styled(SearchIcon)`
 vertical-align: middle;
 cursor: pointer;
 font-size: 26px !important;
 transition: .4s ease;
 &:hover{
  color: ${({theme}) => theme.REDCOLOR};
  transition: .4s ease;
 }
`;
export const Logo = styled.img`
  width: 180px;
  ${mobile({
     width: '150px'
  })}
`;
export const IconsWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
  ${mobile({margin:"20px 0px"})}
`;
export const TopIcons = styled(Link)`
text-decoration: none;
color: inherit;
letter-spacing: 2px;
padding: 0px 10px;
&:hover {
  color:${({theme}) => theme.REDCOLOR};
  transition: 0.3S ease-in-out;
  }

`;
export const WishlistIcon = styled(FavoriteBorderIcon)`
margin: 0px 10px;
color:${({theme,active}) => active === "active"? theme.REDCOLOR : theme.TEXTCOLOR1};
vertical-align: middle;
&:hover {
  color:${({theme}) => theme.REDCOLOR};
  transition: 0.3S ease-in-out;
  }

`;
export const CartIcon = styled(LocalMallOutlinedIcon)`
margin: 0px 10px;
color:${({theme,active}) => active === "active"? theme.REDCOLOR : theme.TEXTCOLOR1};
vertical-align: middle;
&:hover {
  color:${({theme}) => theme.REDCOLOR};
  transition: 0.3S ease-in-out;
  }

`;
export const BadgeIcon = styled(Badge)({
  "& .MuiBadge-badge": {
    color: ({theme}) => theme.WHITECOLOR,
    backgroundColor: ({theme}) => theme.REDCOLOR,
    right:'10px',
    top:"1px"
  }
});
export const WrapperLink = styled(Link)`
text-decoration: none;
color:inherit;
`;
export const WrapperContentSearching = styled.div`
position: absolute;
top:100%;
width: 100%;
min-height: 100px;
z-index: 151515;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
overflow: hidden;
background-color: rgba(233, 231, 231, 0.97);
margin: -10px;
margin-top: 10px;
`;
export const EmptySearch = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
color: ${({theme}) => theme.TEXTCOLOR2};
`
export const ItemSearch = styled.div`
width: 100%;
cursor: pointer;
display: flex;
justify-content: flex-start;
padding: 5px 5px;
border-bottom: 1px solid ${({theme}) => theme.GRAYCOLOR};
align-items: center;
transition: .1s ease-in-out;
color: ${({theme}) => theme.REDCOLOR};
&:hover{
  background-color: ${({theme}) => theme.GRAYCOLOR};
  transition: .1s ease-in-out;
}
`;
export const LabelBottomSearch = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 5px 5px;
align-items: center;
color: ${({theme}) => theme.TEXTCOLOR};
`;

export const LinkCustom = styled(Link)`
text-decoration: none;
color: inherit;
`;

export const ImageProfile = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
`;

export const IconMenu = styled(CiMenuKebab)`
vertical-align: middle;
color: ${({theme}) => theme.TEXTCOLOR};
font-size: 20px;
`;
export const WrapperMenu = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
z-index: 15151515;
position: relative;
`;
// menu list start
export const WrapperMenuList = styled.div`
padding: 15px 10px;
top: 40px;
right: 0;
z-index: 151515;
background-color: ${({theme}) => theme.BACKGROUND1};
border: 2px solid ${({theme}) => theme.BORDERSCOLOR};
position: absolute;
`;
export const WrapperHeaderList = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
margin: 10px 0;
`;
export const WrapperHeaderImage = styled.div`
flex: 1;
`;
export const WrapperHeaderInfo = styled.div`
flex: 2;
`;
export const ImageList = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
`;
export const EmailList = styled.div`
color: ${({theme}) => theme.TEXTCOLOR};
font-size: 14px;
`;
export const NameList = styled.div`
color: ${({theme}) => theme.TEXTCOLOR1};
font-size: 19px;
`;
export const LineList = styled.div`
width: 100%;
height: 1px;
margin: 15px 0;
background-color: ${({theme}) => theme.BORDERSCOLOR};
`;
export const ItemList = styled.div`
margin: 2px 0;
padding: 5px ;
font-size: 15px;
transition: all .1s ease-in-out;
background-color: ${({theme,active}) => active==="active"? theme.GRAYCOLOR : "none"};
cursor: pointer;
color: ${({theme,logout}) =>logout? theme.REDCOLOR : theme.TEXTCOLOR1};
&:hover{
  background-color: ${({theme}) => theme.GRAYCOLOR};
  transition: all .1s ease-in-out;
}
`;
// menu list end

