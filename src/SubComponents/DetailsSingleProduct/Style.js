import styled, { keyframes, css } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FaCheck } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { mobile } from "../../Assets/CustomCss/Responsive";

const AnimationCart = keyframes`
 from { transform: translateX(0px); }
to { transform: translateX(200px); }
`;
const AnimationTextCart = keyframes`
 from { opacity: 1; }
to { opacity:0 }
`;

export const Title = styled.p`
  font-size: 27px;
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 10px;
  text-transform: capitalize;
`;
export const WrapperRtaing = styled.div`
  display: flex;
`;
export const NumberReviews = styled.p`
  font-size: 14px;
  margin-left: 10px;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const WrapperPrices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 70%;
  margin: 10px 0px;
  ${mobile({
    width:"100%"
  })}
`;
export const NewPrice = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.REDCOLOR};
  font-size: 18px;
`;
export const OldPrice = styled.del`
  color: ${({ theme }) => theme.TEXTCOLOR};
  font-size: 18px;
`;
export const Discount = styled.div`
  border: 1px solid ${({ theme }) => theme.REDCOLOR};
  padding: 3px;
  font-size: 14px;
`;
export const Desc = styled.p`
  letter-spacing: 1px;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const WrapperFeatures = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;
export const WrapperFeaturesItem = styled.div`
  width: 100%;

  margin: 5px 0;
`;
export const FeaturesName = styled.div`
  font-weight: 600;
`;

export const FeaturesItem = styled.div`
  background-color: ${({ theme, focused }) =>
    focused ? theme.REDCOLOR : theme.GRAYCOLOR};
  padding: 5px;
  cursor: pointer;
  text-transform: uppercase;
  float: left;
  width: max-content;
  color: ${({ theme, focused }) =>
    focused ? theme.WHITECOLOR : theme.TEXTCOLOR};
  transition: 0.3s ease;
  margin: 0px 10px;
  &:hover {
    color: ${({ theme }) => theme.WHITECOLOR};
    background-color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.3s ease;
  }
`;

export const CheckColor = styled(FaCheck)`
  color: ${({ theme }) => theme.BORDERSCOLOR};
  display: flex;
`;
export const ColorsBoxLayer = styled.div`
  position: absolute;
  background-color: rgba(133, 130, 132, 0.34);
  width: 100%;
  height: 100%;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  position: relative;
  margin: 20px 0;
  ${mobile({
    width:'100%'
  })}
`;
export const ImageOutOrder = styled.img`
  position: absolute;
  width: 250px;
`;
export const ImageEx = styled.img`
  position: absolute;
  width: 100px;
`;

export const FeaturesColor = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  overflow: hidden;
  float: left;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.BORDERSCOLOR};
  background-color: ${(props) => (props.color ? props.color : "black")};
  margin: 0px 10px;
`;

export const FeaturesCat = styled.span`
  color: ${({ theme }) => theme.TEXTCOLOR};
`;

export const ButtonInc = styled(AddIcon)`
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.3s ease;
  }
`;
export const ButtonDec = styled(RemoveIcon)`
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.3s ease;
  }
`;
export const WrapperCounterCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LabelCounter = styled.div`
  background-color: ${({ theme }) => theme.GRAYCOLOR};
  padding: 10px 17px;
  margin: 0px 10px;
  width: 50px;
  display: flex;

  align-items: center;
  justify-content: center;
`;
export const WrapperExpire = styled.div`
  color: ${({ theme }) => theme.REDCOLOR};
  border: 1px solid ${({ theme }) => theme.REDCOLOR};
  font-size: 14px;
  border-radius: 2px;
  padding: 3px 7px;
`;

export const ErrMsg = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.REDCOLOR};
  letter-spacing: 1px;
`;

export const IconCart = styled(ImCart)`
  ${({ load }) =>
    load &&
    css`
      animation-name: ${AnimationCart};
      animation-duration: 2.2s;
    `}
  margin-right: 5px;
`;

export const TextButtonCart = styled.span`
  ${({ load }) =>
    load &&
    css`
      animation-name: ${AnimationTextCart};
      animation-duration: 1s;
    `}
`;

export const AddCartButton = styled.div`
  background-color: ${({ theme }) => theme.BLACKCOLOR};
  color: ${({ theme }) => theme.WHITECOLOR};
  padding: 10px 25px;
  font-size: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.4s ease;
  &:hover {
    background-color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.4s ease;
  }
`;
