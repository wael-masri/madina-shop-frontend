import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
export const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 20px 0;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const WrapperImageCover = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
`;

export const WrapperInfo = styled.div`
  width: 90%;
`;
export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WrapperNameRating = styled.div``;
export const WrapperDate = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR};
  font-size: 20px;
  font-weight: 500;
`;
export const TextComment = styled.p`
  color: ${({ theme }) => theme.TEXTCOLOR};
  margin: 20px 0;
  font-size: 15px;
`;
export const NameUser = styled.p`
  color: ${({ theme }) => theme.BLACKCOLOR};
  font-size: 20px;
  font-weight: 500;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.BORDERSCOLOR};
`;
export const IconDelComment = styled(AiFillDelete)`
  color: ${({ theme }) => theme.TEXTCOLOR};
  font-size:23px;
  cursor:pointer;
  &:hover {
    color: ${({ theme }) => theme.REDCOLOR};
  }
  
`;
export const WrapperDateDelete = styled.div`
  display: flex;
 justify-content:center;
 gap:5px;
 align-items:center;
`;
export const WrapperReply = styled.div`
 background-color:${({theme}) => theme.GRAYCOLOR};
 width: 70%;
 min-height:50px;
 padding: 5px;
 margin-bottom:5px;
 font-size:15px;
 border: 2px solid ${({theme}) => theme.BORDERSCOLOR};
`;
export const LabelReply = styled.div`
 color: ${({ theme }) => theme.TEXTCOLOR};
 font-weight:500;
 letter-spacing:1px;
`;
