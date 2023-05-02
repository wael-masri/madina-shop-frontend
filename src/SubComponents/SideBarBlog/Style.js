import { Link } from "react-router-dom";
import styled,{css} from "styled-components";


export const WrapperTitle = styled.div`
  width: 100%;
  padding: 0 20px;
`;
// export const TitleSideBar = styled.p`
//   font-size: 18px;
//   font-weight: 600;
//   letter-spacing: 1px;
//   margin-bottom: 30px;
// `;
export const TitleSideBar = styled.div`
  color: ${({theme}) => theme.TEXTCOLOR1};
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  width: 100%;
  margin-bottom: 30px;
`;
export const SubCategoriesTitle = styled.div`
  color: ${({theme,focused}) => focused? theme.REDCOLOR : theme.TEXTCOLOR};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 15px 0;
  width: max-content;
  cursor: pointer;
  transition: 0.4s ease;
  text-transform: capitalize;
  position: relative;
  ${({focused}) => focused && css`&:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.REDCOLOR};
    left: 0;
    bottom: -3px;
  }`}
  
  &:hover {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
`;
export const SubCategory = styled.p`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({theme}) => theme.REDCOLOR};
  margin: 10px 0;
  transition: 0.4s ease;
  &:hover {
    color: ${({theme}) => theme.BLACKCOLOR};
    transition: 0.4s ease;
  }
`;
export const WrapperTags = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const Tags = styled.div`
  padding: 5px 10px;
  font-size: 13px;
  margin: 5px 10px;
  background-color: ${({theme}) => theme.GRAYCOLOR};
  cursor: pointer;
  color: ${({theme}) => theme.TEXTCOLOR};
  display: inline-block;
  transition: 0.4s ease;
  &:hover {
    color: ${({theme}) => theme.WHITECOLOR};
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
`;

export const WrapperProduct = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${({theme}) => theme.BLACKCOLOR};
  margin: 30px 0;
`;
export const WrapperRangeSliderText = styled.div`
  width: 100%;
  color: ${({theme}) => theme.TEXTCOLOR1};
  letter-spacing: 1px;
  margin: 10px 0;
`;

export const LinkCategory = styled(Link)`
text-decoration: none;
color: inherit;
transition: 0.4s ease;
&:hover {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
`;
