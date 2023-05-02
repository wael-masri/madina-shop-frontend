import styled,{css} from "styled-components";
import {GiCheckMark} from "react-icons/gi";
import {FaCheck} from "react-icons/fa";


export const TitleSideBar = styled.div`
  color: ${({theme}) => theme.TEXTCOLOR1};
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  width: 100%;
  margin-bottom: 30px;
`;
export const WrapperRangeSlider = styled.div`
  width: 95%;
  text-align: center;
`;
export const WrapperRangeSliderText = styled.div`
  width: 100%;
  color: ${({theme}) => theme.TEXTCOLOR1};
  letter-spacing: 1px;
  margin: 10px 0;
`;
export const BolderText = styled.span`
  font-weight: 500;
  margin-left: 10px;
  color: ${({theme}) => theme.REDCOLOR};
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
export const CheckIcon = styled(GiCheckMark)`
vertical-align: middle;
margin-left: 5px;
visibility: ${({focused}) => focused? "visible" : "hidden"};
`;
export const BrandTitle = styled.div`
  color: ${({theme,focused}) => focused? theme.WHITECOLOR : theme.TEXTCOLOR};
  background-color: ${({theme,focused}) => focused? theme.REDCOLOR : "transparent"};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 7px 0;
  width: max-content;
  cursor: pointer;
  transition: 0.4s ease;
  position: relative;
  padding: 3px 5px;
  border-radius: 3px;
  text-transform: capitalize;
  &:hover ${CheckIcon} {
    visibility: visible;
  }
  &:hover {
    color: ${({theme}) => theme.WHITECOLOR};
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.BORDERSCOLOR};
  margin-bottom: 30px;
  
`;

export const ColorsBox = styled.div`
 width: 30px;
 height: 30px;
 background-color: ${({color}) => color};
 border-radius: 50%;
 margin: 3px 6px;
 display: inline-block;
 border: 1px solid ${({theme}) => theme.BORDERSCOLOR};
 cursor: pointer;
 position: relative;
 overflow: hidden;
 color:${({theme}) => theme.TEXTCOLOR};
 text-align: center;
 padding-top:4px;
  font-size: 13px;
  font-weight: 600;
`;

export const WrapperColorsRadio = styled.div`
  width: 100%;
`;
export const CheckColor = styled(FaCheck)`
color: ${({theme}) => theme.BORDERSCOLOR};
display: flex;
  
`;
export const ColorsBoxLayer = styled.div`
position: absolute;
background-color: rgba(133, 130, 132, 0.34);
width: 100%;
height: 100%;
visibility: ${({visible}) => visible? "visible" : "hidden"};
top:0;
display: flex;
justify-content: center;
align-items: center;
`;
export const WrapperTagsSize = styled.div`
  width: 100%;
  margin: 10px 0;
`;
export const TagsSize = styled.div`
  padding: 5px 10px;
  font-size: 13px;
  margin: 5px 10px;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: ${({theme,focused}) => focused? theme.REDCOLOR : theme.GRAYCOLOR};
  cursor: pointer;
  color: ${({theme,focused}) => focused? theme.WHITECOLOR : theme.TEXTCOLOR};
  display: inline-block;
  transition: 0.4s ease;
  &:hover {
    color: ${({theme}) => theme.WHITECOLOR};
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
`;

