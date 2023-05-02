import React from "react";
import {
  Container,
  Wrapper,
  WrapperInfo,
  WrapperTitle,
  HashText,
  ColoredText,
} from "./Style";

const SubHeader = ({ title, first, second, third,linkFirst,linkSecond }) => {
  return (
    <Container>
      <Wrapper>
        <WrapperTitle>{title}</WrapperTitle>
        <WrapperInfo>
          <HashText to={linkFirst}>{first}</HashText>&nbsp;/&nbsp;<HashText colored="true" to={linkSecond}>{second}</HashText>
          &nbsp;{third && <ColoredText>/&nbsp;{third}</ColoredText>}
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
};

export default SubHeader;
