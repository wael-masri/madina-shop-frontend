import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export const Container = styled.div``;
export const WrapperImage = styled.div`
width: 100%;
overflow: hidden;
`;
export const Image = styled.img`
width: 100%;

height: 200px;
object-fit: cover;
transition: .4s ease;
cursor: pointer;
&:hover{
    scale: calc(1.2);
    transition: .4s ease;
}
`;
export const Title = styled.div`
font-weight: 500;
font-size: 18px;
margin: 5px 3px;
transition: .4s ease;
height: 55px;
overflow: hidden;
cursor: pointer;
&:hover{
    color: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
}
`;
export const WrapperTime = styled.div`
display: flex;
justify-content: flex-end;
padding: 0 5px;
`;
export const IconTime = styled(CalendarMonthIcon)`
vertical-align: middle;
`;
export const Time = styled.p`
color: ${({theme}) => theme.TEXTCOLOR};
`;
export const TextCard = styled.p`
color: ${({theme}) => theme.TEXTCOLOR};
margin: 10px 5px;
letter-spacing: 2px;
font-size: 15px;
height: 115px;
overflow: hidden;
`;