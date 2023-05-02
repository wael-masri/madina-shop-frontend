import styled,{keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { transform: rotate(0deg); }
 10% { transform: rotate(10deg); }
  20% { transform: rotate(0deg); }
  30% { transform: rotate(-10deg); }
  40% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
 70% { transform: rotate(-10deg); }
  80% { transform: rotate(0deg); }
  90% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
 
`;
export const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;

`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  &:hover ${Image}{
    animation-name: ${breatheAnimation};
 animation-duration: 0.5s;
  }
`;
export const Title = styled.h3`
color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const Text = styled.p`
color: ${({theme}) => theme.TEXTCOLOR};
letter-spacing: 1px;
margin-top: 10px;
`;
export const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  flex-direction: column;
`;



