import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
height: 100%;

`;
export const Desc = styled.p`
color: ${({theme}) => theme.TEXTCOLOR};
`;
export const Wrapper = styled(Link)`
width: 100%;
text-decoration: none;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({theme}) => theme.FAKEWHITE};
border: 2px solid transparent;
transition: .2s ease-in-out;
&:hover{
transition: .2s ease-in-out;
border: 2px solid ${({theme}) => theme.REDCOLOR};
}
&:hover ${Desc}{
color: ${({theme}) => theme.REDCOLOR};
}
`;
export const WrapperImg = styled.div`
flex: 1;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 10px;

`;
export const WrapperInfo = styled.div`
flex: 2;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;


`;
export const ImageCover = styled.img`
width: 50%;
height: 50%;
object-fit: cover;
border-radius: 50%;
`;
export const Title = styled.p`
font-weight: 500;
color: ${({theme}) => theme.TEXTCOLOR1};

`;
