import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  background-color: ${({ theme }) => theme.GRAYCOLOR};
`;
export const ImageCover = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  vertical-align: middle;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease;
  }
`;
export const WrapperImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InfoProduct = styled.div`
  flex: 1;
  left: 0px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.TEXTCOLOR1};
  margin-bottom: 10px;
`;
export const DescInfo = styled.p`
  color: ${({ theme }) => theme.TEXTCOLOR};
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
`;
export const LinkCard = styled(Link)`
  text-decoration: none;
  width: max-content;
  color: ${({ theme }) => theme.REDCOLOR};
  border-bottom: 2px solid ${({ theme }) => theme.REDCOLOR};

  pointer-events: auto;
`;
