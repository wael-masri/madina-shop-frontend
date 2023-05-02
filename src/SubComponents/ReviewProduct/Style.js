import styled from "styled-components";
import {FiChevronDown,FiChevronUp} from "react-icons/fi"
import { mobile } from "../../Assets/CustomCss/Responsive";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperCardReview = styled.div`
  width: 100%;
  padding: 0px 20px;
  ${mobile({
    padding:"0 10px"
  })}
 
`;
export const Title = styled.p`
  padding: 10px 0;
  font-size: 24px;
  font-weight: 500;
`;
export const WrapperAvgRating = styled.div`
 
 

`;
export const WrapperCountReviews = styled.p`
 color: ${({theme}) => theme.TEXTCOLOR};
 font-size: 15px;
`;
export const WrapperButtonShowMore = styled.div`
width: 100%;
background-color: ${({theme}) => theme.GRAYCOLOR};
display: flex;
justify-content:center;

`;
export const ButtonShowMore = styled.div`
padding: 5px;
margin: 5px 0px;
background-color: ${({theme}) => theme.REDCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
border-radius:5px;
`;
export const IconDown = styled(FiChevronDown)`
color: inherit;
vertical-align:middle;
`;
export const IconUp = styled(FiChevronUp)`
color: inherit;
vertical-align:middle;
`;
export const ContainerLoading = styled.div`
  width: 100%;
  margin: 40px 0;
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.BORDERSCOLOR};
`;