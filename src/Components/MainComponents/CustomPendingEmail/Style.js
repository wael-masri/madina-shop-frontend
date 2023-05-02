import styled from "styled-components";
import VerificationInput from "react-verification-input";
export const Container = styled.div`
  min-height: calc(100vh - 93px);
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 93px);
  display: flex;
  justify-content: center;
  align-items: center;
  

`;

export const BoxVerify = styled.div`
background-color: ${({theme}) => theme.GRAYCOLOR};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
`;
export const Logo = styled.img`
width: 180px;
`;
export const Title = styled.div`
letter-spacing: 1px;
font-weight: 500;
font-size: 22px;
color: ${({theme}) => theme.TEXTCOLOR1};
margin-bottom: 20px;
margin-top: 10px;
`;
export const SubTitle = styled.p`
margin: 10px 0;
font-size: 15px;
color: ${({theme}) => theme.TEXTCOLOR};
`;
export const VerificationInputStyled = styled(VerificationInput)`
width: 100% !important;

`;
export const SubText = styled.p``;
export const Label = styled.div`
margin-bottom: 10px;
letter-spacing: 1px;
font-weight: 500;
`;
export const WrapperInputCode = styled.div``;
export const ButtonSubmit = styled.div`
width: 50%;
margin-top: 17px;
margin-bottom: 10px;
padding: 10px 0;
font-weight: 500;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background-color: ${({theme}) => theme.BLACKCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
transition: .2s ease-in-out;
&:hover {
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: .2s ease-in-out;
}
`;
export const Colored = styled.span`
color: ${({theme}) => theme.REDCOLOR};
text-decoration: underline;
cursor: pointer;
`;