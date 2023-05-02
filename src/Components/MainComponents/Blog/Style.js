import styled from "styled-components";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";

export const Container = styled.div`
  width: 100%;
  padding: 0 30px;
  ${mobile({
    padding:"0 10px"
  })}
   ${tab({
    padding:"0 20px"
  })}
`;
export const WrapperTitle = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const WrapperArticles = styled.div`
  flex: 3;

 
`;
export const WrapperSideBarBlog = styled.div`
  flex: 1;
  ${mobile({
    display:"none"
  })}
  ${tab({
    display:"none"
  })}
  
`;

export const WrapperCardBlog = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
grid-column-gap: 1rem;
grid-row-gap: 4rem;
margin: 50px 0;
`;
export const CardOfBlog = styled.div`
width: 300px;
box-shadow: 0px 2px 5px #8a8a8a;
border-radius: 2px;
margin: auto;
${mobile({
  width:"100%"
})}
`;
