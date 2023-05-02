import styled from "styled-components";

import WestIcon from "@mui/icons-material/West";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";
export const Container = styled.div`
  width: 100%;
  display: flex;
  ${mobile({flexDirection:"column"})}
  ${tab({flexDirection:"column"})}
`;
export const WrapperCartItems = styled.div`
  flex: 3;
  padding: 0px 30px;
  margin: 40px 0;
  ${mobile({padding:"0px 10px"})}
`;
export const WrapperCheckout = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.GRAYCOLOR};
`;
export const Title = styled.p`
  font-size: 23px;
  font-weight: 600;
  padding: 10px 0;
`;
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({theme}) => theme.BORDERSCOLOR};
  color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const SpanTitle = styled.p`
  font-size: 23px;
  font-weight: 500;
  padding: 10px 0;
`;

export const WrapperTitleCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`;
export const ImageTitleCart = styled.div`
  flex: 2;
  display: flex;
  font-weight: 500;
  letter-spacing: 2px;
  margin-left: 4px;
  color: ${({theme}) => theme.TEXTCOLOR};
   ${mobile({fontSize:"14px"})}
`;
export const TitleCart = styled.div`
  flex: 1;
  display: flex;
  font-weight: 500;
  letter-spacing: 2px;
 justify-content: center;
  ${mobile({fontSize:"14px"})}
  color: ${({theme}) => theme.TEXTCOLOR};
`;
export const WrapperCartItem = styled.div`
  width: 100%;
`;

export const WrapperEmptyCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
export const EmptyCartButton = styled.div`
  background-color: ${({theme}) => theme.BLACKCOLOR};
  color: ${({theme}) => theme.WHITECOLOR};
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.4s ease;
  &:hover {
    background-color:${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
`;
export const ContinueShopping = styled.div`
  color:${({theme}) => theme.REDCOLOR};
  padding: 10px 15px;
  font-weight: 500;
  transition: 0.4s ease;
  cursor: pointer;
  ${mobile({
    padding:"0"
  })}
`;

export const LeftIcon = styled(WestIcon)`
  color: ${({theme}) => theme.REDCOLOR};
  vertical-align: middle;
  font-size: 17px !important;
`;

export const EmptyCartLabel = styled.div`
padding: 60px 0;
color: ${({theme}) => theme.TEXTCOLOR};
font-size: 25px;
letter-spacing: 2px;
font-weight: 500;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`;
