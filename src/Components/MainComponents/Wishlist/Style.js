import styled from "styled-components";
import {Link} from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";
export const Container = styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Wrapper = styled.div`
background-color: ${({theme}) => theme.FAKEWHITE};
width: 70%;
padding:25px;
${mobile({
    width:"100%",
    padding:"10px"

})}
${tab({
    width:"100%",
    padding:"0px 30px"

})}
`;
export const WrapperTitle = styled.div`
width: 100%;
border-bottom: 2px solid ${({theme}) => theme.BORDERSCOLOR};
padding: 10px;
`;
export const Title = styled.p`
font-size: 23px;
font-weight: 600;
position: relative;
`;

export const WrapperTitlesWishlist = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
border-bottom: 2px solid ${({theme}) => theme.BORDERSCOLOR};
padding: 10px;
`;
export const TitlesWishlist = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
font-weight:500;
letter-spacing: 1px;
${({hide}) => hide && mobile({display:"none"})}
`;
export const WrapperCardWishlist = styled.div`
width: 100%;

`;
export const WishlistIcon = styled(FavoriteIcon)`
color: ${({theme}) => theme.REDCOLOR};
position: absolute;
top: 0;
right: 0;
`;

export const EmptyWish = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 60px 0;
color: ${({theme}) => theme.TEXTCOLOR};
font-size: 25px;
letter-spacing: 2px;
font-weight: 500;
`;




