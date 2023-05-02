import styled from "styled-components";

export const WrapperItem = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FirstWrapper = styled.div``;
export const WrapperInfoItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const ImageItem = styled.img`
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.BORDERSCOLOR};
  width: 80px;
  height: 80px;
`;
export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;
export const TitleItem = styled.div`
  font-weight: 500;
  color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const InfoItem = styled.div`
  font-size: 13px !important;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const SecondWrapper = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const ColorContainer = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ theme }) => theme.TEXTCOLOR};
`;
export const QuantityContainer = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.REDCOLOR};
  color: ${({ theme }) => theme.BORDERSCOLOR};
  top: -6px;
  left: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;