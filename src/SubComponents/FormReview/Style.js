import styled, { css } from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { mobile } from "../../Assets/CustomCss/Responsive";
export const StarsIcons = styled(StarIcon)`
color:#faaf00;
vertical-align: middle !important;

`;
export const Container = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 30px 0;
`;
export const LabelText = styled.p`
  color: ${({theme}) => theme.BLACKCOLOR};
  font-size: 16px;
  font-weight: 500;
  margin-right: 5px;
`;
export const TextAreaReview = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid ${({theme}) => theme.BORDERSCOLOR};
  border-radius: 4px;
  background-color: ${({theme}) => theme.GRAYCOLOR};
  font-size: 16px;
  resize: none;
  &:focus {
    outline: none !important;
    border: 2px solid ${({theme}) => theme.REDCOLOR};
  }
`;
export const WrapperRadioButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const WrapperSubmitForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ButtonSubmitForm = styled.button`
all: unset;
  background-color: ${({theme}) => theme.BLACKCOLOR};
  color: ${({theme}) => theme.WHITECOLOR};
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.4s ease;
  border-radius: 5px;
  ${({load}) => !load && css`
  &:hover {
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
  `}
 ${mobile({
  marginTop:"10px"
 })}
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.BORDERSCOLOR};
`;
export const ErrMsg = styled.span`
font-size: 13px;
color:${({theme}) => theme.REDCOLOR};

`;