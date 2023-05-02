import styled from "styled-components";


export const ContainerMega = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  padding: 0px 60px;
  min-height: 70vh;
  width: 100%;
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease;
 
`;
export const WrapperMegaNav = styled.div`
  margin-top: 15px;
  transform: translateY(30px);
  transition: 0.2s ease;
  width: 100%;
  display: flex;
  
  box-shadow: 0px 0px 0px ${({theme}) => theme.BLACKCOLOR}, 0px -7px 15px ${({theme}) => theme.BLACKCOLOR};
  
`;
export const WrapperItem = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.BLACKCOLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ImageNav = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const TitleCustomMega = styled.h4`
  padding: 10px 0px;
`;
export const ItemWrap = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  margin: 7px 0px;
  font-size: 13px;
  cursor: pointer;
  color: ${({theme}) => theme.TEXTCOLOR};
  &:hover {
    transition: 0.3s ease;
    color: ${({theme}) => theme.REDCOLOR};
  }
`;
