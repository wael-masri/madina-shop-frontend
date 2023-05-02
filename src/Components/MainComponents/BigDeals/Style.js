import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";
const ShackPhoto = keyframes`
 0% { transform: translateY(0px); }
 25% { transform: translateY(-30px); }
 50% { transform: translateY(0px); }
 75% { transform: translateY(-30px); }
  100% { transform: translateY(0px); }
`;
const RotateImage = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 50px 0px;
`;
export const WrapperImage = styled.div`
  width: 100%;
  height: 83px;
  ${mobile({
    height: "50px"
  })}
  ${tab({
    height: "50"
   
  })}
`;
export const ImageCover = styled.img`
  width: 100%;
  height: 100%;
  ${mobile({
    height: "100%"
  })}
   ${tab({
    height: "100%"
  })}
`;
export const WrapperContent = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.GRAYCOLOR};
  display: flex;
  justify-content: space-between;
`;
export const WrapperText = styled.div`
  flex: 1;
  padding:80px;
  ${mobile({
    padding:"15px"
  })}
 
`;
export const WrapperImgs = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Collection = styled.h4`
  color: ${({theme}) => theme.REDCOLOR};
  letter-spacing: 1px;
`;
export const Title = styled.p`
  color: ${({theme}) => theme.BLACKCOLOR};
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: 500;
  margin: 20px 0px;
  ${mobile({
    fontSize: '25px'
  })}
`;
export const Desc = styled.p`
  font-size: 20px;
  margin-bottom: 35px;
  ${mobile({
    fontSize: '18px'
  })}
`;
export const Colored = styled.span`
  color: ${({theme}) => theme.REDCOLOR};
`;
export const IconButton = styled(ArrowRightAltIcon)`
  color: ${({theme}) => theme.BLACKCOLOR};
  vertical-align: middle;
`;
export const ButtonLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 18px;
  color: ${({theme}) => theme.BLACKCOLOR};

  transition: 0.4s ease;
  &:hover {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
  &:hover ${IconButton} {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
`;
export const ImageItem = styled.img`
  width: 300px;
  height: auto;
  animation-name: ${ShackPhoto};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  ${mobile({
    width: '100px'
  })}
  ${tab({
    width: '200px'
  })}
`;
export const WrapperStickers = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: 40px;
  left: 40px;
  ${mobile({
    bottom: "5px"
  })}
   ${tab({
    bottom: "10px"
  })}
`;
export const ImageStickers = styled.img`
  width: 100%;
  height: auto;
  animation: ${RotateImage} 8s infinite linear;
  position: relative;
`;
export const InfoStickers = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  color: ${({theme}) => theme.GRAYCOLOR};
  font-weight: 500;
  font-size:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
