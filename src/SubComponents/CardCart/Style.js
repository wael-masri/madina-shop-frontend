import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../../Assets/CustomCss/Responsive";

export const IconInc = styled(AddIcon)``;
export const IconDec = styled(RemoveIcon)``;
export const Container = styled.div`
width: 100%;
min-height: 120px;
display: flex;
justify-content: space-around;
align-items: center;
border-bottom: 2px solid ${({theme}) => theme.GRAYCOLOR};

`;
export const WrapperImageDetails = styled.div`
flex:2;
display: flex;

align-items: center;

`;
export const ImageItem = styled.img`
width: 130px;
height: 130px;
object-fit: cover;
margin: 5px 0;
border-radius: 5px;
${mobile({
  width:"90px",
  height:"90px"
})}
`;
export const InfoItem = styled.div`
margin: 5px 0;
letter-spacing: 1px;
font-weight: 500;
margin-left: 5px;
`;
export const SubInfoItem = styled.div`
color: ${({theme}) =>  theme.TEXTCOLOR1};
font-size: 14px;
display: flex;

`;
export const TitleCart = styled.div`
color: ${({theme}) =>  theme.TEXTCOLOR1};
font-size: 16px;
font-weight:600;
letter-spacing: 2px;
margin-bottom: 5px;
`;
export const ButtonRemoveItemCart = styled.div`
color: ${({theme}) =>  theme.REDCOLOR};
font-size: 14px;
font-weight:400;
letter-spacing: 2px;
position: relative;
cursor: pointer;
&:after {
    position: absolute;
    content: "";
    width: 20%;
    height: 1px;
    background: ${({ theme }) => theme.REDCOLOR};
    left: 0;
    bottom: 0px;
  }
&:hover {
    font-weight:500;
}  
`;
export const WrapperInfoItem = styled.div`
flex:1;
font-weight:500;
color:${({theme,colorred}) => colorred? theme.REDCOLOR : theme.TEXTCOLOR1};
position: relative;

`;
export const ButtonSaveQty = styled.div`
position: absolute;
bottom:-30px;
left: 0;
color: ${({theme}) => theme.REDCOLOR};
font-weight: 500;
font-size: 14px;
cursor: pointer;
&:hover{
  font-weight: 600;
}

`;
export const WrapperCounter = styled.div`
width: 60%;

display: flex;
justify-content:space-between;
align-items: center;
`;
export const IncButton = styled.div`
flex:1;

color:${({theme}) => theme.REDCOLOR};
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
cursor: pointer;
`;
export const DecButton = styled.div`
display: flex;
padding: 5px;
justify-content: center;
align-items: center;
cursor: pointer;


flex:1;`;
export const Counter = styled.div`
display: flex;
padding: 5px;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.BORDERSCOLOR};
flex:1;`;

export const BolderDetails = styled.span`
color: ${({theme}) => theme.TEXTCOLOR};
font-size: 14px;
font-weight: 600;
letter-spacing: 2px;
margin-right: 5px;
`;

export const  ColorShowing = styled.div`
background-color: ${({color}) => color};
border-radius: 50%;
width: 20px;
height: 20px;
`;