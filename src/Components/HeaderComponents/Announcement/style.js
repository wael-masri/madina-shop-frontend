import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 30px;
color: ${({theme}) => theme.WHITECOLOR};
display:flex;
align-items:center;
justify-content: center;
font-size:14px;
font-weight:600;
background-color:${({theme}) => theme.REDCOLOR};

`