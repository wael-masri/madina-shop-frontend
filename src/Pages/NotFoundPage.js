import React from "react";
import styled from "styled-components";
import {AiOutlineSwapRight} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.GRAYCOLOR};
`;
const BigTitle = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  font-weight: 600;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
const SubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
const SubText = styled.div`
  width: 60%;
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.REDCOLOR};
  cursor: pointer;
`;
const IconBack = styled(AiOutlineSwapRight)`

`;
const NotFoundPage = () => {
  const navigate = useNavigate();
  document.title = "Page Not Found - MadinaShop";
  return (
    <Container>
      <BigTitle>404</BigTitle>
      <SubTitle>This is not the web page you are looking for.</SubTitle>
      <SubText onClick={() => navigate("/")}>Go To Home <IconBack /></SubText>
    </Container>
  );
};

export default NotFoundPage;
