import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0px 30px;
  margin: 30px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const WrapperImages = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperImageCover = styled.div`
  width: 518px;
  height: 484px;
  background-color: ${({theme}) => theme.GRAYCOLOR};
`;


//slider image mini start css
export const WrapperMiniImages = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
`;
export const WrapperMiniImagesScroll = styled.div`
  position: absolute;
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar{
    width: 0;
  }

`;

  

export const WrapperIconsScroller = styled.div`
  position: absolute;
 
  top:0;
  left:${props => props.location === "left"? "-25px" : ""}; 
  right:${props => props.location === "right"? "-25px" : ""}; 
  width: 25px;
  height: 100%;
  background-color: rgba(169, 172, 172, 0.1);
  display: flex;
  align-items: center;
  transition: .4s ease;
&:hover{
  background-color: rgba(169, 172, 172, 0.5);
  transition: .4s ease;
}
`;

export const WrapperMiniImage = styled.div`
  min-width: 100px;
  height: 100px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .4s ease;
  cursor: pointer;
  &:hover {
    border-color: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
  }
`;

// slider image end css

export const WrapperInfo = styled.div`
  width: 50%;
  padding: 70px;
`;
export const Title = styled.div`
  
  margin-bottom: 10px;
`;
export const WrapperBottom = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
 gap:15px;
`;