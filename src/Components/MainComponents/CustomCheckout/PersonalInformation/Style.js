import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { mobile } from "../../../../Assets/CustomCss/Responsive";
export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;
export const SubTitle = styled.div`
  width: 100%;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const Title = styled.p`
  font-size: 21px;
  font-weight: 600;
  padding: 10px 0;
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const WrapperInputFull = styled.div`
  width: 100%;
  margin: 20px 0;
  position: relative;
`;
export const WrapperShippingAddress = styled.div`
  width: 100%;
  margin-top: 50px;
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
export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  margin: 40px 0;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  ${mobile({flexDirection: "column-reverse"})}
`;
export const ButtonContinue = styled.button`
  all: unset;
  background-color: ${({ theme }) => theme.BLACKCOLOR};
  color: ${({ theme }) => theme.WHITECOLOR};
  letter-spacing: 1px;
  padding: 10px 15px;

`;
export const ButtonReturn = styled.div`
  color: ${({ theme }) => theme.REDCOLOR};
`;
export const IconNextButton = styled(BsArrowRightShort)`
  color: inherit;
  vertical-align: middle;
`;
export const IconPrev = styled(HiOutlineArrowNarrowLeft)`
  color: inherit;
  vertical-align: middle;
`;
export const ErrMsg = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.REDCOLOR};
  position: absolute;
`;
