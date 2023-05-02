import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 2px solid ${({ theme,borderFocus }) => borderFocus?   theme.BORDERINPUT : theme.BORDERSCOLOR};
  transition: border .2s linear;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WrapperInput = styled.div`
  width: 95%;
  padding: 10px 0;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // justify-content: center;
`;

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  font-size: 15px;
  background-color: transparent;
  color: ${({theme}) => theme.TEXTCOLOR1};
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
`;
export const LabelInput = styled.label`
  ${({ focusInput }) =>
    focusInput &&
    css`
      opacity: 1;
      transition: all .3s ease-out;
      height: auto;
      transform: translateY(0px);
    `}
  ${({ focusInput }) =>
    !focusInput &&
    css`
      opacity: 0;
      height: 0;
      transition: all .3s ease-out;
      overflow: hidden;
      transform: translateY(20px);
    `}

top:0;
  left: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
