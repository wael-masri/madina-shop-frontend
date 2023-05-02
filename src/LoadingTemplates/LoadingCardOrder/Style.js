import styled from "styled-components";
import { mobile } from "../../Assets/CustomCss/Responsive";
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  
`;
export const WrapperMenuBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
export const WrapperMenuBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;
  gap: 10px;
  ${mobile({flexDirection:"column",gap:"20px"})}
`;
export const ItemMenu = styled.div`
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  color: ${({ theme }) => theme.TEXTCOLOR1};
  position: relative;
  transition: 0.4s ease;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background: ${(props) => (props.active ? props.theme.REDCOLOR : "")};
    left: 0;
    bottom: -8px;
    transition: 0.4s ease;
  }
  &:hover {
    &:after {
      background: ${({ theme }) => theme.REDCOLOR};
      transition: 0.4s ease;
    }
  }
`;
export const SpaceCir = styled.div`
  border-radius: 50%;
  width: 7px;
  height: 7px;
  background-color: ${({ theme }) => theme.BORDERSCOLOR};
  ${mobile({display:"none"})}
`;

// order start
export const ContainerOrder = styled.div`
  width: 100%;
`;
export const WrapperBoxOrder = styled.div`
  display: flex;
  margin: 50px 0;
  align-items: center;
  justify-content: center;
  ${mobile({flexDirection:"column"})}
`;
export const BoxOrder = styled.div`
  width: 80%;
  border: 2px solid ${({ theme }) => theme.BORDERSCOLOR};
  border-radius: 5px;
  ${mobile({width:"95%"})}
`;
export const BoxOrderHeader = styled.div`
  width: 100%;
  padding: 7px 20px;
  border-bottom: 2px solid ${({ theme }) => theme.BORDERSCOLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({flexDirection:"column"})}
`;
export const BoxOrderHeader1 = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const SpanBoxOrderHeader1 = styled.span`
  font-weight: 500;
  font-size: 16px;
  margin-left: 5px;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const BoxOrderHeader2 = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const SpanBoxOrderHeader2 = styled.span`
  color: ${({ theme }) => theme.REDCOLOR};
`;
export const BoxOrderBody = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: flex-start;
  ${mobile({flexDirection:"column"})}
`;
export const BoxOrderBody1 = styled.div`
  flex: 1;
`;
export const TitleBoxOrder = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
  letter-spacing: 1px;
  color: ${({ theme, colored }) =>
    colored ? theme.REDCOLOR : theme.TEXTCOLOR1};
`;
export const InfoBoxOrder = styled.div`
  font-size: 15px;
  font-weight: ${({ colored }) => (colored ? 600 : 400)};
  color: ${({ theme, colored }) =>
    colored ? theme.TEXTCOLOR1 : theme.TEXTCOLOR};
`;
export const Divfisrt = styled.div`
  width: 0;
  height: 0;

  border: 8px solid transparent;
  border-left: 0;
  border-left: 7px solid ${({theme,active}) => active ? theme.REDCOLOR : theme.BORDERSCOLOR};
`;
export const BodyDib = styled.div`
  width: ${({first}) => first? 70 : 60}px;
  height: 16px;
  background-color: ${({theme,active}) => active ? theme.REDCOLOR : theme.BORDERSCOLOR};
`;
export const ReflectBodyDib = styled.div`
  width: 0;
  height: 0;
  border: 8px solid ${({theme,active}) => active ? theme.REDCOLOR : theme.BORDERSCOLOR};
  border-left: 0;
  border-left: 7px solid transparent;
`;
export const WrapperStatusDiv = styled.div`
  display: flex;
`;
export const LabelFlesh = styled.div`
 font-weight: 500;
 color: ${({theme,active}) => active ? theme.REDCOLOR : theme.BORDERSCOLOR};
 margin-right: 19px;
 margin-bottom: 15px;
 font-size: 14px;
`;
export const EstimatedArr = styled.div`
width: 100%;
font-size: 14px;
color:${({theme}) => theme.TEXTCOLOR};
margin: 10px 0;
`;
export const ButtonRefand = styled.div`
width: 100%;
padding: 5px 8px;
background-color: ${({theme}) => theme.BLACKCOLOR};
display: flex;
justify-content: center;
align-items: center;
color: ${({theme}) => theme.WHITECOLOR};
border-radius: 5px;
transition: .2s ease;
&:hover{
    background-color: ${({theme}) => theme.REDCOLOR}; 
    transition: .2s ease;
}
`;
// order end


export const EmptyOrder = styled.div`
width: 100%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
color: ${({theme}) => theme.TEXTCOLOR};
font-weight: 500;
font-size: 25px;
letter-spacing: 1px;
`;

export const WrapperLoadingItem = styled.div`


display: flex;
justify-content: space-between;
align-items: center;
margin-right: 10px;
`;
