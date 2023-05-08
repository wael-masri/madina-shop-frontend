import styled from "styled-components";
import { Link } from "react-router-dom";
//hover Icons
import {MdFavorite} from "react-icons/md";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const BoxHover = styled.div`
  position: absolute;
  z-index: 111;
  display: flex;
  width: 100%;
  height: 100%;
  top:0;
  transform: translateY(-100%);
  transition:.2s ease-in-out;
  background-color: rgba(11, 11, 11, 0.6);
`;
export const WrapperHoverIcons = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;
export const WrapperButtonShow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonShow = styled(Link)`
text-decoration:none;
  border: 1px solid ${({ theme }) => theme.WHITECOLOR};
  color: ${({ theme }) => theme.WHITECOLOR};
  background-color: transparent;
  font-size: 15px;
  letter-spacing: 1px;
  transform: scale(0.3);
  padding: 7px 15px;
  border-radius: 3px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in-out;
    color: ${({ theme }) => theme.REDCOLOR};
    border-color: ${({ theme }) => theme.REDCOLOR};
  }
`;
export const NewPrice = styled.div`
  font-weight: 600;
  padding: 3px 7px;
`;
export const WrapperIconsHover1 = styled.div`
  margin-bottom: 5px;
  height: 50px;
  width: 50px;
  background-color: transparent;
  transform: translateX(-60px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.WHITECOLOR};
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.FAKEGRAY};
  }
`;
export const WrapperIconsHover2 = styled(Link)`
  margin-bottom: 5px;
  height: 50px;
  width: 50px;
  background-color: transparent;
  transform: translateX(-60px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.WHITECOLOR};
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.FAKEGRAY};
  }
`;
export const WrapperIconsHover3 = styled(Link)`
  margin-bottom: 5px;
  height: 50px;
  width: 50px;
  background-color: transparent;
  transform: translateX(-60px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.WHITECOLOR};
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.FAKEGRAY};
  }
`;
export const WrapperIconsHover4 = styled(Link)`
  margin-bottom: 5px;
  height: 50px;
  width: 50px;
  background-color: transparent;
  transform: translateX(-60px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.WHITECOLOR};
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.FAKEGRAY};
  }
`;
export const LoveIcon = styled(MdFavorite)`
  cursor: pointer;
 color: ${({focused,theme}) => focused? theme.REDCOLOR : "none"};
 font-size: 19px;
`;
export const CompareIcon = styled(CompareArrowsIcon)`
  cursor: pointer;
`;
export const ViewIcon = styled(VisibilityOutlinedIcon)`
  cursor: pointer;
`;
export const CartIcon = styled(LocalMallOutlinedIcon)`
  cursor: pointer;
`;
export const ImageCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.list === "list" ? "row" : "column")};
  max-width: ${(props) => (props.list === "list" ? "px" : "100%")};
  transition: 0.4s ease-in-out;
  &:hover ${BoxHover} {
    transform: translateY(0px);
    transition: 0.2s ease-in-out;
  }
  &:hover ${NewPrice} {
    color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.3s ease-in-out;
  }
  &:hover ${WrapperIconsHover1} {
    transform: translateX(0px);
    transition: 0.4s ease-in-out;
  }
  &:hover ${WrapperIconsHover2} {
    transform: translateX(0px);
    transition: 0.5s ease-in-out;
  }
  &:hover ${WrapperIconsHover3} {
    transform: translateX(0px);
    transition: 0.6s ease-in-out;
  }
  &:hover ${WrapperIconsHover4} {
    transform: translateX(0px);
    transition: 0.7s ease-in-out;
  }
  &:hover ${ButtonShow} {
    transform: scale(1);
    transition: 0.5s ease-in-out;
  }
  &:hover ${ImageCover} {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

export const WrapperImage = styled.div`
  width: ${(props) => (props.list === "list" ? "50" : "100")}%;
 // height: 270px;
  position: relative;
  max-height: 280px;
  
`;
export const DescriptionList = styled.div`
  width: 100%;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;

export const ImageOffer = styled.img`
  top:-15px;
  width: 100px;
  left:-27px;
  position: absolute;
`;
export const ImageOutOfStock = styled.img`
  width: 100px;
  position: absolute;
  right:0;

`;
export const WrapperDesc = styled.div`
  width: 100%;
   padding: 0 15px; 
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.FAKEWHITE};
`;
export const WrapperRting = styled.div`
  padding-top: 10px;
`;
export const NameProduct = styled.div`
  letter-spacing: 1px;
  color: ${({ theme }) => theme.TEXTCOLOR1};
  font-weight: 400;
  font-size: 16px;
`;

export const Category = styled.div`
  color: ${({ theme }) => theme.REDCOLOR};
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.BORDERSCOLOR};
`;
export const WrapperCurrency = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OldPrice = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR};
`;

export const Del = styled.del``;

export const WrapperBottom = styled.div`
  display: flex;
  padding: 6px 7px;
`;

export const WrapperExpire = styled.div`
color: ${({ theme }) => theme.REDCOLOR};
border: 1px solid ${({ theme }) => theme.REDCOLOR};
font-size:14px;
border-radius:2px;
padding: 3px 7px;
`;
