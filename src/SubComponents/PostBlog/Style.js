import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export const Container = styled.div`
width: 100%;

`;
export const Title = styled.p`
font-size: 28px;
font-weight: 500;
letter-spacing: 1px;
color: ${({theme}) => theme.BLACKCOLOR};
transition: .4s ease;
&:hover{
    color: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
}
`;
export const WrapperTime = styled.div`
width:100%;
`;
export const IconTime = styled(CalendarMonthIcon)`
vertical-align: middle;
`;
export const Time = styled.div`
font-weight: 500;
color: ${({theme}) => theme.TEXTCOLOR};
margin: 10px 0;
`;
export const WrapperImage = styled.div`
width:100%;

`;
export const Image = styled.img`
width: 100%;
height: 400px;
object-fit: cover;
`;
export const TextDesc = styled.div`
letter-spacing: 1px;
margin-top: 5px;
font-size: 15px;
color: ${({theme}) => theme.TEXTCOLOR};
`;
export const WrapperButton = styled.div`
width: 100%;
margin: 20px 0;
display: flex;
`;
export const Button = styled.div`
background-color: ${({theme}) => theme.BLACKCOLOR};
color: ${({theme}) => theme.WHITECOLOR};
padding: 10px 15px;
border-radius: 2px;
transition: .4s ease;
&:hover {
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
}
`;