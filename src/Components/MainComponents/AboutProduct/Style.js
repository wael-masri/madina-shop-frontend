import styled from "styled-components";
import { mobile } from "../../../Assets/CustomCss/Responsive";



export const Container = styled.div`
padding: 0px 60px;
margin: 30px 0px;
${mobile({
    padding:'0px 10px'
  })}
`;
export const WrappperButton = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;

`;

export const Buttons = styled.div`
padding: 14px 44px;
background-color:transparent;
font-size: 14px;
color: ${({theme}) => theme.BLACKCOLOR};
border: 1px solid ${({theme}) => theme.BORDERSCOLOR};
margin: 0px 10px;
font-weight: 500;
transition: 0.4s ease;
cursor: pointer;
&:hoVER{
    background-color:${({theme}) => theme.BLACKCOLOR};
    color: ${({theme}) => theme.WHITECOLOR};
    transition: 0.4s ease;
}
&:focus{
    background-color: red;
}
${mobile({
    padding:'7px 20px'
  })}
`;
export const Wrappper = styled.div`
width: 100%;
margin: 40px 0px;

`;