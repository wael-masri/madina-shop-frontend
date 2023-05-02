import styled from "styled-components";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";

export const Container = styled.div`
  width: 100%;
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
export const FirstWrapper = styled.div`
  flex: 3;
  padding: 0px 100px;
  margin: 40px 0;
  ${mobile({padding: "0px 10px"})}
  ${tab({padding: "0px 20px"})}
`;
export const SecondWrapper = styled.div`
  flex: 2;
  background-color: ${({theme}) => theme.GRAYCOLOR};
  
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: 600;
  padding: 10px 0;
  color: ${({theme}) => theme.REDCOLOR};
`;

