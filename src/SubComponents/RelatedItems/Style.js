import styled from "styled-components";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const Container = styled.div`
padding: 0px 60px;
margin: 30px 0px;

`;
export const WrapperTitle = styled.div`
width: 100%;

`;
export const Wrapper = styled.div`
width: 100%;
`;
export const WrapperCard = styled.div`
background-color: ${({theme}) => theme.GRAYCOLOR};

`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0px !important;
    margin: 0 14px !important;
    width: 280px !important;
  }
  .slick-list {
    height: 415px !important;
    margin: 50px 0;
  }
`;

export const NextArrowSlider = styled(ArrowForwardIosIcon)`
color:${({theme}) => theme.BLACKCOLOR};
transition: .4s ease;
&:hover{
    color:${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
}
`;
export const PreArrowSlider = styled(ArrowBackIosNewIcon)`
color:${({theme}) => theme.BLACKCOLOR};
transition: .4s ease;
&:hover{
    color:${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
}
`;

