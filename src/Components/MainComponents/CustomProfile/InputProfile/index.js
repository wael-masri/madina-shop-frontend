import React, { useEffect, useRef, useState } from "react";
import { Container, InputStyled, WrapperInput, LabelInput } from "./Style";

const InputProfile = (props) => {
  const [focusInput, setFocusInput] = useState(false);
  const [borderFocus, setBorderFocus] = useState(false);
  const inputFile = useRef(null);
  useEffect(() => {
    if(props.value && props.value !== ""){
      setFocusInput(true);
    }
  },[props.value])
  const onFocusInput = () => {
    setFocusInput(true);
    setBorderFocus(true);
  };
  const onBlurCustom = (e) => {
    if(e.target.value === ""){
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
          onFocus={() => {onFocusInput();}}
          onBlur={(e) => {onBlurCustom(e);} }
          {...props}
          ref={inputFile}
          onChange={props.onChange}
        />
      </WrapperInput>
    </Container>
  );
};

export default InputProfile;
