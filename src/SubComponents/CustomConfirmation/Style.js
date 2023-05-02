import  styled  from "styled-components";
export const WrapperConfirm = styled.div`

width: 400px;
border-radius: 5px;
display: flex;
align-items: center;
flex-direction: column;
padding: 30px;
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
z-index: 12212132;
&.popup-overlay {
  background-color: rgb(207 207 207);
  
  
}
`;
export const TitleConfirm = styled.p`
font-size: 28px;
font-weight: 600;
letter-spacing: 1px;
margin-bottom: 20px;
color: RED;


`;
export const MessageConfirm = styled.p`
color: ${({theme}) => theme.TEXTCOLOR};
margin-bottom: 10px;
`;
export const WrapperButtonDel = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
gap: 10px;

`;
export const Buttons = styled.div`
color: ${({theme}) => theme.TEXTCOLOR};
flex:1;
cursor: pointer;
display: flex;
justify-content: center;
padding: 5px;
align-items: center;
border: 2px solid ${({theme}) => theme.TEXTCOLOR}!important; 
&:hover {
  border: 2px solid red !important;
  color: red !important;
}

`;
