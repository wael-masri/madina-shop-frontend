import styled from "styled-components";

import DoneIcon from '@mui/icons-material/Done';
export const Wrapper = styled.div`
  width: 100%;
`;
export const Title = styled.p`
  padding: 10px 0;
  font-size: 24px;
  font-weight: 500;
`;
export const Description = styled.p`
  letter-spacing: 1px;
  line-height: 30px;
  color: ${({theme}) => theme.TEXTCOLOR};
`;
export const WrapLi = styled.li`
  color: ${({theme}) => theme.TEXTCOLOR};
  margin: 15px 0;
  display: flex;
`;
export const WrapUl = styled.ul`
  list-style: none;
`;
export const WrapIcon = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 15px;
  border-radius: 50%;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconDone = styled(DoneIcon)`
 font-size: 18px !important;
`;
