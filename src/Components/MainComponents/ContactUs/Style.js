import styled, { css } from "styled-components";
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../../../Assets/CustomCss/Responsive";
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const Wrapper = styled.div`
width: 90%;
background-color: ${({theme}) => theme.GRAYCOLOR};
margin-bottom: 30px;
`;

export const WrapperTitle = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
export const Title = styled.div`
font-size: 30px;
font-weight: 500;
letter-spacing: 4px;
margin: 30px 0;
color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const WrapperFields = styled.div`
width: 50%;
${mobile({
  width:"90%"
})}

`;

export const SubTitle = styled.div`
font-size: 18px;
font-weight: 500;
letter-spacing: 1px;
margin-bottom: 20px;
color: ${({theme}) => theme.REDCOLOR};
`;
export const SubText = styled.div`
font-size: 15px;
color: ${({theme}) => theme.TEXTCOLOR};
margin-bottom: 10px;
`;
export const WrapperField = styled.div`
width: 100%;
margin: 20px 0;
`;
export const WrapperButtonSendmsg = styled.div`
width: 100%;
margin-bottom: 30px;
display: flex;
justify-content: flex-end;
`;
export const Colored = styled.span`
font-weight: 300;
color: ${({theme}) => theme.REDCOLOR};
`;
export const ButtonSendmsg = styled.button`
all: unset;
display: flex;
justify-content: center;
align-items: center;
background-color:${({theme}) => theme.BLACKCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
padding: 10px 10px;
font-weight: 500;
transition: .4s ease;
border-radius: 2px;
${({isLoad}) => !isLoad && css`
&:hover {
    background-color:${({theme}) => theme.REDCOLOR};  
    transition: .4s ease;
}
`}

`;

export const IconSend = styled(SendIcon)`
margin-left: 5px;
font-size: 17px !important;
`;
export const TextAreaContact = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px 20px;
  border: 2px solid ${({ theme }) =>  theme.BORDERSCOLOR};
  border-radius: 7px;
  background-color: transparent;
  color: ${({theme}) => theme.TEXTCOLOR1};
  font-size: 16px;
  resize: none;
  &:focus {
    outline: none !important;
    border: 2px solid ${({ theme }) =>  theme.BORDERINPUT};
  }
`;
export const ErrMsg = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.REDCOLOR};
 
`;