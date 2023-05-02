import styled from "styled-components";

export const WrapperItem = styled.div`
width: 100%;
margin: 30px 0px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
grid-column-gap: 2rem;
grid-row-gap: 2rem;
`;
export const Product = styled.div`
max-width:280px;
`;