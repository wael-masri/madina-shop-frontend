import styled from "styled-components";
import {BsArrowRightShort,BsCashStack} from "react-icons/bs"
import {HiOutlineArrowNarrowLeft} from "react-icons/hi";
import {MdPayment} from "react-icons/md";
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
margin-bottom: 3px;
margin-top: 30px;
color: ${({theme}) => theme.TEXTCOLOR};
`;

export const SubText = styled.div`
font-size: 13px;
letter-spacing: 1px;
color: ${({theme}) => theme.TEXTCOLOR};
margin-bottom: 10px;
`;

export const WrapperButtons = styled.div`
width: 100%;
display: flex;
margin: 40px 0;
gap: 10px;
align-items: center;
justify-content: space-between;
`;
export const ButtonContinue = styled.button`
all: unset;
cursor: pointer;
background-color: ${({theme}) => theme.BLACKCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
letter-spacing: 1px;
padding: 10px 15px;
display: flex;
gap: 5px;

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
export const DetailsPayment = styled.div`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 18px 25px;
  color:${({theme}) => theme.TEXTCOLOR1};
`;

export const WrapperPayment = styled.div`
  width: 100%;
  border: 2px solid ${({theme}) => theme.BORDERSCOLOR};
  border-radius: 5px;
  
`;

export const LabelPaymentChoice = styled.div`
margin-left: 20px;
color: ${({theme,ispayment}) => ispayment? theme.REDCOLOR : theme.TEXTCOLOR1};
cursor: pointer;
`;

export const IconPayment = styled(MdPayment)`
vertical-align: middle;
color: ${({theme,ispayment}) => ispayment ? theme.REDCOLOR : theme.TEXTCOLOR1};
cursor: pointer;
`;

export const IconCash = styled(BsCashStack)`
vertical-align: middle;
color: ${({theme,ispayment}) => ispayment ? theme.REDCOLOR : theme.TEXTCOLOR1};
cursor: pointer;
`;
export const WrapperInputHalf = styled.div`
  flex: 1;
`;
export const WrapperGroupInput = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
export const ErrMsg = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.REDCOLOR};
 position: absolute;
`;
export const WrapperErr = styled.div`
width: 100%;
background-color: rgba(249, 2, 2, 0.2);
border: 1px solid ${({theme}) => theme.REDCOLOR};
padding: 10px;
border-radius: 4px;
`;
export const ErrGlobal = styled.div`
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${({ theme }) => theme.REDCOLOR};

`;
export const LoadButton = styled.img`
width: 25px;
height: auto;
`;
export const ButtonContinueLoading = styled.button`
all: unset;
background-color: ${({theme}) => theme.BLACKCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
letter-spacing: 1px;
padding: 10px 15px;
display: flex;
gap: 5px;

`;