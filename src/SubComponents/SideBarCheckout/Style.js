import styled from "styled-components";


export const WrapperCheckout = styled.div`
padding: 0px 30px;
margin: 40px 0;
`;

export const Title = styled.p`
  font-size: 23px;
  font-weight: 600;
  padding: 10px 0;
  color: ${({theme}) => theme.REDCOLOR};
`;
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({theme}) => theme.BORDERSCOLOR};
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;
export const Info = styled.div`
color: ${({theme}) => theme.TEXTCOLOR1};
font-size: 14px;
font-weight: 500;
`;
export const WrapperSubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 25px 0;
  font-size: 17px;
font-weight: 600;
color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const WrapperInput = styled.div`
 width: 100%;
`;
export const WrapperButtonPromo = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-start;
 align-items: center;

`;
export const ButtonPromo = styled.div`
background-color: ${({theme}) => theme.REDCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
padding: 10px 30px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
margin: 10px 0;
border-radius: 2px;
`;

export const Line = styled.div`
width: 100%;
height: 2px;
background-color: ${({theme}) => theme.BORDERSCOLOR};
margin: 20px 0;
`;
export const WrapperButtonCheckout = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;

`;
export const WrapperSelectBox = styled.ul`
 width: 100%;
 border-radius: 2px;
 list-style: none;
 background-color: ${({theme}) => theme.WHITECOLOR};
 padding: 0px;

`;
export const ButtonCheckout = styled.button`
all: unset;
background-color: ${({theme}) => theme.BLACKCOLOR};
cursor: pointer;
color: ${({theme}) => theme.WHITECOLOR};
padding: 10px 0px;
font-size: 14px;
font-weight: 500;
margin: 10px 0;
width: 90%;
border-radius: 2px;
display: flex;
justify-content: center;
align-items: center;
transition: .4s ease;
&:hover {
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
}
`;

export const Colored = styled.span`
color: ${({theme}) => theme.REDCOLOR};
`;
export const ErrMsg = styled.span`
font-size: 13px;
color:${({theme}) => theme.REDCOLOR};

`;

export const FieldsInput = styled.input`
width: 100%;
height: 40px;
padding: 7px;
font-size: 17px;
color: ${({theme}) => theme.TEXTCOLOR1};
background-color: ${({theme}) => theme.BACKGROUND1};
border:none;
&:focus{
  outline: none;
}
`;