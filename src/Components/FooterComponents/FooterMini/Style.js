import styled from "styled-components";

import {Link} from "react-router-dom";
import { mobile } from "../../../Assets/CustomCss/Responsive";
export const Containerfo = styled.footer`
  width: 100%;
   margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Line = styled.div`
width: 100%;
height: 4px;
background:linear-gradient(90deg, rgba(255,255,255,1) 4%, rgba(228,225,225,1) 50%, rgba(255,255,255,1) 92%);
`;

export const WrapperLinks = styled.div`
width: 25%;
display: flex;
justify-content: space-around;
align-items: center;
margin: 10px 0;
${mobile({width:"90%"})}


`;
export const Links = styled(Link)`
text-decoration: none;
color: ${({theme}) => theme.TEXTCOLOR};
transition: .4s ease;
font-size: 12px;
&:hover{
  color:${({theme}) => theme.REDCOLOR};
  transition: .4s ease;
}
`;

export const CopyWrite = styled.p`
color: ${({theme}) => theme.REDCOLOR};
font-size: 14px;
margin: 10px 0;
`;

