import styled from "styled-components";
import { mobile} from "../../../Assets/CustomCss/Responsive";
export const Container = styled.div`
  min-height: calc(100vh - 93px);
  width: 100%;

`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
export const WrapperLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
export const WrapperCreateAcc = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: 500;
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const CreateAcc = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR1};
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.2s ease-in-out;
  }
`;
export const LogoImage = styled.img`
  object-fit: cover;
  width: 180px;
`;
export const FirstWrap = styled.div`
  flex: 1;
  border-right: 1px solid ${({ theme }) => theme.BORDERSCOLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 45px 0;
  position: relative;
  ${mobile({border:"none"})}
`;
export const SecondWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.BORDERSCOLOR};
  ${mobile({border:"none"})}
`;
export const WrapperInput = styled.div`
  width: 60%;
  margin: 10px 0;
  ${mobile({width:"90%"})}
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
  ${mobile({width:"90%"})}
`;
export const SpanOr = styled.span`
position: absolute;
right: -10px;
top: 50%;
letter-spacing: 1px;
font-weight: 500;
color: ${({theme}) => theme.TEXTCOLOR};
background-color: ${({theme}) => theme.BACKGROUND1};
${mobile({display:"none"})}
`;
export const LabelGoogle = styled.div`
font-size: 18px;
letter-spacing: 1px;
font-weight: 500;
color: ${({theme}) => theme.TEXTCOLOR};
`;
export const ButtonGoogleLogin = styled.div`
width: 60%;
cursor: pointer;
border: 1px solid ${({theme}) => theme.TEXTCOLOR};
&:hover ${LabelGoogle}{
    color: ${({theme}) => theme.TEXTCOLOR1};
}
${mobile({width:"90%"})}
`;
export const LogoGoogleImage = styled.img`
width: 40px;
`;

export const WrappLabelsGoogle = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
${mobile({width:"90%"})}
`;

export const HelpLogin = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 15px 0;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: 500;
color: ${({theme}) => theme.TEXTCOLOR1};
cursor: pointer;

`;