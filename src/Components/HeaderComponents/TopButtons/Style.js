import styled from "styled-components";
import { mobile } from "../../../Assets/CustomCss/Responsive";
import { MdOutlineModeNight, MdOutlineLightMode } from "react-icons/md";
export const IconDark = styled(MdOutlineModeNight)`
  color: ${({ theme }) => theme.TEXTCOLOR};
  font-size: 25px;
`;
export const IconLight = styled(MdOutlineLightMode)`
  color: ${({ theme }) => theme.TEXTCOLOR};
  font-size: 25px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 12px 60px;
  border-bottom: 0.5px solid ${({theme}) => theme.BORDERSCOLOR};

  color: ${({theme}) => theme.TEXTCOLOR};
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({flexDirection:"column",padding:"12px 5px"})}
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ButtonsUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Text = styled.div`
  flex: 1;
  color: ${({theme}) => theme.TEXTCOLOR};
  ${mobile({margin:"10px 0px"})}
`;
export const ButtonLi = styled.li`
  padding: 0px 10px;
  border-right: 1px solid ${({theme}) => theme.BORDERSCOLOR};
  cursor: pointer;
  z-index: 11111;
  
 

`;

