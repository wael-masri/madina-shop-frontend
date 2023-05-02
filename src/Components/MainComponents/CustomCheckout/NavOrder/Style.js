import styled,{css} from "styled-components";
import {GrFormNext} from "react-icons/gr";
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
`;
export const NavItem = styled.div`
color: ${({theme,focused}) =>focused? theme.REDCOLOR : theme.TEXTCOLOR1};
opacity:${({focused}) =>focused? 1 : 0.6};
letter-spacing: 1px;
font-size: 14px;
cursor: pointer;
${({hoverAcc}) => hoverAcc && css`
&:hover{
    opacity: 1;
    color: ${({theme}) => theme.REDCOLOR};
}

`}

`;

export const IconNext = styled(GrFormNext)`

`;
