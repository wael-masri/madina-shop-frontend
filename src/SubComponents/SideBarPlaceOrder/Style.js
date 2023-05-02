import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  padding: 0px 5px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// cardItem start
export const WrapperItem = styled.div`
  width: 70%;
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
  color: ${({ theme }) => theme.TEXTCOLOR1};
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
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.REDCOLOR};
  opacity: 0.5;
`;
// cardItem end
// InfoPrice start
export const WrapperPriceBox = styled.div`
  width: 60%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LabelPrice = styled.div`
  color: ${({ theme, shipping, bolder }) =>
    shipping ? theme.TEXTCOLOR : bolder ? theme.REDCOLOR : theme.TEXTCOLOR1};
  font-weight: ${({ bolder }) => (bolder ? 600 : 500)};
  letter-spacing: 1px;
  font-size: 14px;
`;
export const PriceValue = styled.div`
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme, colored, shipping }) =>
    colored ? theme.REDCOLOR : shipping ? theme.TEXTCOLOR : theme.TEXTCOLOR1};
`;
// InfoPrice end
