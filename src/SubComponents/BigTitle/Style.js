import styled from "styled-components";
import { mobile } from "../../Assets/CustomCss/Responsive";

export const Container = styled.div`
  width: 100%;
`;
export const TitleText = styled.p`
  color: ${({ theme }) => theme.TEXTCOLOR1};
  position: relative;
  font-size: 27px;
  letter-spacing: 1px;
  font-weight: 600;
  &:after {
    position: absolute;
    content: "";
    width: 90px;
    height: 3px;
    background: ${({ theme }) => theme.REDCOLOR};
    left: 0;
    bottom: -8px;
  }
  ${mobile({
    fontSize:"19px"
  })}
`;
