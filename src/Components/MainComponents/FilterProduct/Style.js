import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion} from "framer-motion";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";

export const Container = styled.div`
 padding: 0px 60px;
 margin: 40px 0px;
 width: 100%;
 ${mobile({
  padding:"0px 10px"
 })}
 ${tab({
  padding:"0px 20px"
 })}
`;
export const Wrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 ${mobile({
  alignItems: "flex-start"
 })}
`;
export const WrapperLinks = styled.div`
flex: 1;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({
  flexDirection:"column",
  gap:"10px"
})}
${tab({
  flex:"2"
})}
`;
export const WrapperTitle = styled.div`
flex: 2;

`;
export const Links = styled(Link)`
text-decoration: none;
position: relative;
color: ${({theme}) => theme.TEXTCOLOR1};
letter-spacing: 1px;
font-weight: 500;
&:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: ${(props) => props.active ? props.theme.REDCOLOR : ""};
    left: 0;   
    bottom: -8px;
    transition: .4s ease;
  }
  &:hover {
    &:after {
   
    
    background: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
    
  }
  }
`;

export const WrapperItem = styled.div`
width: 100%;
margin: 30px 0px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
grid-column-gap: 2rem;
grid-row-gap: 2rem;


`;
export const Product = styled(motion.div)`
max-width:280px;
margin: auto;
${mobile({
  margin:"auto"
})}
${tab({
  margin:"auto"
})}
//height:350px;


`;