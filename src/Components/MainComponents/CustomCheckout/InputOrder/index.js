import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  InputStyled,
  WrapperInput,
  LabelInput,
  IconHide,
  IconShow,
  WrapperIconPassword,
} from "./Style";

const InputOrder = (props) => {
  const [focusInput, setFocusInput] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [borderFocus, setBorderFocus] = useState(false);
  const inputFile = useRef(null);
  useEffect(() => {
    if (props.value && props.value !== "") {
      setFocusInput(true);
    }
  }, [props.value]);
  const onFocusInput = () => {
    setFocusInput(true);
    setBorderFocus(true);
  };
  const onBlurCustom = (e) => {
    if (e.target.value === "") {
      setFocusInput(false);
    }
    setBorderFocus(false);
  };
  const onButtonClick = () => {
    inputFile.current.focus();
    setFocusInput(true);
  };
  return (
    <Container onClick={onButtonClick} borderFocus={borderFocus}>
      <WrapperInput>
        <LabelInput focusInput={focusInput}>{props.placeholder}</LabelInput>
        <InputStyled
          onFocus={() => {
            onFocusInput();
          }}
          onBlur={(e) => {
            onBlurCustom(e);
          }}
          {...props}
          type={!props.password ? "text" : isPassword ? "text" : "password"}
          ref={inputFile}
          onChange={props.onChange}
        />
        {props.password ? (
          <WrapperIconPassword onClick={() => setIsPassword(!isPassword)}>
            {isPassword ? <IconHide /> : <IconShow />}
          </WrapperIconPassword>
        ) : null}
      </WrapperInput>
    </Container>
  );
};

export default InputOrder;
