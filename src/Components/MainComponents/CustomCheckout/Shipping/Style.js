import styled from "styled-components";
import {BsArrowRightShort} from "react-icons/bs"
import {HiOutlineArrowNarrowLeft} from "react-icons/hi"
import { mobile } from "../../../../Assets/CustomCss/Responsive";
export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const WrapperDetails = styled.div`
  width: 100%;
  border: 2px solid ${({theme}) => theme.BORDERSCOLOR};
  border-radius: 5px;
  padding: 0 25px;
`;
export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  color:${({theme}) => theme.TEXTCOLOR};
`;
export const LabelDetails = styled.div`
flex: 1;
`;
export const LinkDetails = styled.div`
color:${({theme}) => theme.REDCOLOR};
font-size: 14px;
flex: 1;
display: flex;
cursor: pointer;
justify-content: flex-end;

`;
export const ContentDetails = styled.div`
flex: 4;
color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const Line = styled.div`
width: 100%;
height: 2px;
background-color: ${({theme}) => theme.BORDERSCOLOR};
`;
export const SubTitle = styled.div`
width: 100%;
font-size: 18px;
letter-spacing: 1px;
font-weight: 500;
margin-bottom: 15px;
margin-top: 30px;
color: ${({theme}) => theme.TEXTCOLOR};
`;

export const WrapperShippingMethod = styled.div`
  width: 100%;
  border: 2px solid ${({theme}) => theme.BORDERINPUT};
  border-radius: 5px;
  padding: 15px 25px;
  color:${({theme}) => theme.TEXTCOLOR1};
  background-color: #1773b017;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelShippingMethod = styled.div``;
export const LinkShippingMethod = styled.div`
font-weight: 600;
font-size: 14px;
`;

export const WrapperButtons = styled.div`
width: 100%;
display: flex;
margin: 40px 0;
gap: 10px;
align-items: center;
justify-content: space-between;
${mobile({flexDirection: "column-reverse"})}
`;
export const ButtonContinue = styled.div`
background-color: ${({theme}) => theme.BLACKCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
letter-spacing: 1px;
cursor: pointer;
padding: 10px 15px;
`;
export const ButtonReturn = styled.div`
color: ${({theme}) => theme.REDCOLOR};
`;
export const IconNextButton = styled(BsArrowRightShort)`
color: inherit;
vertical-align: middle;
`;
export const IconPrev = styled(HiOutlineArrowNarrowLeft)`
color: inherit;
vertical-align: middle;
`;