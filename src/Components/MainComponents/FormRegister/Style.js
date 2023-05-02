import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";
export const Container = styled.div`
  min-height: calc(100vh - 93px);
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  ${mobile({flexDirection:"column",flexDirection: "column-reverse"})}
`;


export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  padding-top: 50px;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: 500;
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const LogoImage = styled.img`
  object-fit: cover;
  width: 600px;
  ${mobile({width: "300px"})}
  ${tab({width: "300px"})}
`;
export const FirstWrap = styled.div`
  flex: 2;
  border-right: 1px solid ${({ theme }) => theme.BORDERSCOLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 45px 0;
  position: relative;
`;
export const SecondWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.BORDERSCOLOR};
`;
export const WrapperInput = styled.div`
  width: 60%;
  margin: 10px 0;
  ${mobile({width: "90%"})}
`;
export const ErrMsg = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.REDCOLOR};
`;
export const ButtonLogin = styled.button`
  all: unset;
  width: 60%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.BLACKCOLOR};
  border-radius: 5px;
  color: ${({ theme }) => theme.WHITECOLOR};
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.2s ease-in-out;
  }
  ${mobile({width: "90%"})}
`;
export const WrapperAgree = styled.div`
width: 60%;
margin-bottom: 10px;
font-size: 14px;
${mobile({width: "90%"})}
`;
export const HelpLogin = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 15px 0;


`;
export const LabelLogin = styled.div`
text-transform: capitalize;
letter-spacing: 1px;
font-weight: 500;
font-size: 15px;
text-decoration: underline;
color: ${({theme}) => theme.TEXTCOLOR1};
cursor: pointer;
&:hover{
    color:${({theme}) => theme.REDCOLOR};
}
`;

export const LabelAgree = styled.label`
color: ${({theme}) => theme.TEXTCOLOR1};
`;