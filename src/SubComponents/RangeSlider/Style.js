import styled from "styled-components";
import Slider from "@mui/material/Slider";
export const SliderRangeStyle = styled(Slider)({
    color: `${({theme}) => theme.BLACKCOLOR}`,
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '&.css-187mznn-MuiSlider-root':{
     color:`${({theme}) => theme.BLACKCOLOR}`,
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: `${({theme}) => theme.GRAYCOLOR}`,
      border: `4px solid ${({theme}) => theme.TEXTCOLOR}`,
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
        border: `4px solid ${({theme}) => theme.REDCOLOR}`,
      },
      '&:before': {
        display: 'none',
      },
      
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: `${({theme}) => theme.BLACKCOLOR}`,
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });