import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../Assets/CustomCss/Responsive";


export const Container = styled.div`
width: 100%;
padding: 0px 60px;
margin-bottom: 70px;
background-color: ${({theme}) => theme.GRAYCOLOR};
${mobile({
    padding:"0px 10px",
    marginBottom:"10px"
})}
`;
export const Wrapper = styled.div`
padding: 60px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({
    padding:"30px 10px"
})}
`;
export const WrapperInfo = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`;
export const WrapperTitle = styled.div`
flex: 1;
font-size: 30px;
font-weight: 500;
letter-spacing: 1px;
color: ${({theme}) => theme.TEXTCOLOR};
`;
export const HashText = styled(Link)`
text-decoration: none;
color: ${({theme,colored}) => colored? theme.TEXTCOLOR1 : theme.TEXTCOLOR};
cursor: pointer;
&:hover{
    color: ${({theme}) => theme.BLACKCOLOR};
}
`;
export const ColoredText = styled.span`
color: ${({theme}) => theme.REDCOLOR};
font-weight:400;
`;