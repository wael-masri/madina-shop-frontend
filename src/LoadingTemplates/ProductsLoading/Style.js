
import styled from "styled-components";
import { mobile } from "../../Assets/CustomCss/Responsive";

export const Container = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
 
  margin: 40px 0;
  display: flex;
  ${mobile({
    flexDirection:"column",
    flexDirection: "column-reverse"
  })}
`;
export const SideProduct = styled.div`
  flex: 3;
  padding: 0px 30px;
  ${mobile({
    padding:"0px 10px"
  })}
`;
export const SideBar = styled.div`
  flex: 1;
  padding: 0px 15px;
  ${mobile({
  display:"none"
 })}
`;

export const WrapperHeaderProducts = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
`;
export const TextHeader = styled.div`
  color: ${({theme}) => theme.TEXTCOLOR};
`;
export const ButtonsHeader = styled.div`
gap:15px;
 display: flex;
 align-items: center;
 justify-content: space-around;
`;




export const WrapperProduct = styled.div`
width: 100%;
margin: 30px 0px;
display: grid;
grid-template-columns: repeat(${props => props.list === "list"? 1 : "auto-fill"}, minmax(250px,1fr));
grid-column-gap: 2rem;
grid-row-gap: 2rem;


`;