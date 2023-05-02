import styled from "styled-components";
import { tab } from "../../Assets/CustomCss/Responsive";


//hover Icons

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const WrapperHoverIcons = styled.div`
  position: absolute;
  top: 10%;
  z-index: 111;
  width: 60px;
  transform: translateY(-250px);
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0s ease-in-out;
`;
export const NewPrice = styled.div`
  font-weight: 600;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.FAKEGRAY};
  display: flex;
  flex-direction: ${(props) => (props.list === "list" ? "row" : "column")};
  max-width: ${(props) => (props.list === "list" ? "" : "280")}px;
  transition: 0.4s ease-in-out;
  &:hover ${WrapperHoverIcons} {
    transform: translateY(0px);

    transition: 0.3s ease-in-out;
  }
  &:hover ${NewPrice} {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.3s ease-in-out;
  }
  ${tab({
    maxWidth:"100%"
  })}
`;

export const WrapperImage = styled.div`
  width: ${(props) => (props.list === "list" ? "50" : "100")}%;
  height: 270px;
  position: relative;
`;
export const DescriptionList = styled.div`
  width: 100%;
  letter-spacing: 1px;
  color: ${({theme}) => theme.TEXTCOLOR};
`;
export const ImageCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;



export const WrapperDesc = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme}) => theme.FAKEWHITE};
`;
export const WrapperRting = styled.div`
  padding-top: 10px;
`;
export const NameProduct = styled.div`
  letter-spacing: 1px;
  color: ${({theme}) => theme.TEXTCOLOR1};
  font-weight: 400;
  font-size: 16px;
`;

export const Category = styled.div`
  color: ${({theme}) => theme.REDCOLOR};
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.BORDERSCOLOR};
`;
export const WrapperCurrency = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OldPrice = styled.div`
  color: ${({theme}) => theme.TEXTCOLOR};
`;

export const Del = styled.del``;
export const WrapperCounter = styled.div`
  flex: 1;
  display: flex;
`;
export const WrapperBottom = styled.div`
  display: flex;
`;


export const LabelCount = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${({theme}) => theme.FAKEGRAY};
  color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const WrapperIcons = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;

  justify-content: center;
`;
