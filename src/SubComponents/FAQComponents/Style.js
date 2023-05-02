import styled from "styled-components";

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