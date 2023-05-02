import styled from "styled-components";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";


export const Container = styled.div`
width: 100%;
border-bottom: 2px solid ${({theme}) => theme.BORDERSCOLOR};
border-top:2px solid ${({theme}) => theme.BORDERSCOLOR};
margin: 120px 0px;
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;
${mobile({
    display:"none"
})}
${tab({
    display:"none"
})}
`;
export const WrapperBrands = styled.div`
flex: 1;
padding: 20px;
`;
export const BrandsImg = styled.img`
width: 200px;
`;