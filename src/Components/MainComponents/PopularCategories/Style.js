import styled from "styled-components";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";


export const Container = styled.div`
padding: 0px 60px;
margin : 20px 0px;
${mobile({
    padding:"0px 10px"
})}
${tab({
    padding:"0px 20px"
})}
`;
export const WrapperTitle = styled.div`
width: 100%;
margin-bottom: 60px;
`;
export const WrapperCategories = styled.div`

width: 100%;
display: grid;
grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
grid-column-gap: 2rem;
grid-row-gap: 3rem;
`;
export const Category = styled.div`
padding: 10px;
`;