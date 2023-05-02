import styled,{css} from "styled-components";
import VerificationInput from "react-verification-input";
import {AiOutlineHome} from "react-icons/ai";
import {IoMdRemoveCircleOutline,IoMdClose} from "react-icons/io";
import {BiImageAdd} from "react-icons/bi";
import {MdPassword,MdOutlineContactEmergency} from "react-icons/md"
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";
import {FiMenu} from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

`;
export const IconMenu = styled(FiMenu)`
position: absolute;
color: ${({theme}) => theme.REDCOLOR};
right: 5px;
cursor: pointer;
z-index: 1515;
top: 5px;
font-size: 30px;
display: none;
${mobile({display:"block"})}
`;
export const IconCloseMenu = styled(IoMdClose)`
position: absolute;
color: ${({theme}) => theme.REDCOLOR};
right: 5px;
cursor: pointer;
z-index: 1515;
top: 5px;
font-size: 30px;
display: none;
${mobile({display:"block"})}
`;
export const WrapperSubHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const VerificationInputStyled = styled(VerificationInput)`
width: 100% !important;

`;
export const CoverImage = styled.img`
  width: 100%;
  height: 150px;
`;
export const LogoImage = styled.img`
  position: absolute;
  width: 250px;
`;
export const Wrapper = styled.div`
position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
  ${mobile({flexDirection: "column"})}
`;

export const FirstWrapper = styled.div`
  flex: 2;
  background-color: ${({ theme }) => theme.GRAYCOLOR};
  ${({ hide }) =>
    !hide &&
    css`
      ${mobile({
        display: "none",
      })}
    `}
`;

export const SecondWrapper = styled.div`
  flex: 4;
`;

// start menu side
export const IconHome = styled(AiOutlineHome)``;
export const IconInfo = styled(MdOutlineContactEmergency)``;
export const IconImage = styled(BiImageAdd)``;
export const IconPassword = styled(MdPassword)``;
export const IconClose = styled(IoMdRemoveCircleOutline)``;
export const ContainerMenuSidde = styled.div`
  padding: 5px 7px;
  
`;
export const WrapperImageSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageMenuSide = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  margin: 15px 0;
`;
export const NameUserSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 600;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const LineMenu = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.WHITECOLOR};
  margin: 10px 0;
`;
export const ItemMenuSide = styled.div`
  margin: 2px 0;
  padding: 7px;
  font-size: 18px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  color: ${({ theme, focused }) =>
    focused ? theme.WHITECOLOR : theme.BLACKCOLOR};
  background-color: ${({ theme, focused }) =>
    focused ? theme.BLACKCOLOR : "transparent"};
  &:hover {
    background-color: ${({ theme }) => theme.BLACKCOLOR};
    color: ${({ theme }) => theme.WHITECOLOR};
    transition: all 0.1s ease-in-out;
  }
`;
// end menu Side

//personal Information start
export const ContainerComp = styled.div`
  width: 100%;
  position:relative;
`;
export const WrapperTtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.REDCOLOR};
  font-size: 24px;
  margin-bottom: 5px;
  letter-spacing: 1px;
`;
export const SubTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const WrapperFormInfo = styled.div`
width: 100%;
padding: 50px 150px;
${mobile({padding:"50px 5px"})}
`;
export const WrapperInputFull = styled.div`
  width: 70%;
  margin: 20px 0;
  position: relative;
  ${mobile({width:"100%"})}
`;
export const WrapperButtonSaveInfo = styled.div`
width: 70%;
display: flex;
justify-content: flex-end;
margin: 25px 0;
align-items: center;
${mobile({width:"100%"})}

`;
export const ButtonSaveInfo = styled.button`
all: unset;
background-color: ${({theme}) => theme.BLACKCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
padding: 7px 15px;
letter-spacing: 1px;
margin-top: 20px;
font-weight: 400;
transition: .2s ease ;
margin-right: 10px;
&:hover{
    background-color: ${({theme}) => theme.REDCOLOR}; 
    transition: .2s ease ;
}
`;
// personal Information End
// close account start
export const WrapperText = styled.div`
width: 100%;
color: ${({theme}) => theme.TEXTCOLOR1};
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
${mobile({display:"block",padding:"0 10px"})}
${tab({display:"block",padding:"0 10px"})}
`;

export const LabelWarning = styled.span`
color: ${({ theme }) => theme.REDCOLOR};
font-weight: 500;
margin-right: 5px;
`;
export const ButtonCloseAccount = styled.div`
background-color: ${({theme}) => theme.REDCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
padding: 7px 15px;
letter-spacing: 1px;
margin-top: 20px;
font-weight: 400;
`;
export const ErrMsg = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.REDCOLOR};
`;
//close account end

//password reset start
export const WrapperBoxReset = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const WrapperContentReset = styled.div`
width: 50%;
margin-top: 50px;
`;
export const TitleReset = styled.div`
color:${({theme}) => theme.TEXTCOLOR1};
font-weight: 600;
margin-bottom: 10px;
font-size: 22px;
letter-spacing: 1px;
`;

export const TextReset = styled.p`
color:${({theme}) => theme.TEXTCOLOR};
margin-bottom: 10px;
`;
export const SendCode = styled.span`
color:${({theme}) => theme.REDCOLOR};
font-weight: 600;
cursor: pointer;
`;
export const ButtonConfirmCode = styled.button`
all: unset;
background-color: ${({theme}) => theme.REDCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
padding: 7px 15px;
letter-spacing: 1px;
margin-top: 20px;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;
`;
export const WrapperInputPassword = styled.div`
margin: 10px 0;
width: 100%;
`;
//password reset end