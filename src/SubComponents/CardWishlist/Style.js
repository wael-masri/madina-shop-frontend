import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom"
import { mobile } from "../../Assets/CustomCss/Responsive";
export const Container = styled.div`
width: 100%;
`;
export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
min-height: 120px;
border-bottom: 2px solid ${({theme}) => theme.BORDERSCOLOR};

`;
export const WrapperImageIcon = styled.div`
display: flex;
flex:1;
justify-content: space-between;
align-items: center;

`;
export const WrapperField = styled.div`
flex:1;
display: flex;
justify-content: center;
align-items: center;
${({hide}) => hide && mobile({display:"none"})}

`;
export const WrapperFieldStock = styled.div`
flex:1;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
color:${props => props.status ? "red" : "green"};

`;
export const Image = styled.img`
width: 100px;
height: 100px;
object-fit: cover;

`;
export const IconClose = styled(CloseIcon)`
color: ${({theme}) => theme.TEXTCOLOR};
transition: .4s ease;
&:hover {
    color: ${({theme}) => theme.BLACKCOLOR};
    transition: .4s ease;
    
}


`;

export const AddToCartButton = styled.div`
background-color: ${({theme}) => theme.BLACKCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
padding: 10px;
border-radius: 2px;
transition: .4s ease;
&:hover {
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;

}
${({hide}) => hide && mobile({display:"none"})}
`;
export const CustomLink = styled(Link)`
text-decoration: none;
color: inherit;
cursor: pointer;
`;