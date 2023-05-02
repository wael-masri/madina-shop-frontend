import React, { useState } from "react";
import {
  Container,
  Text,
  ButtonWrapper,
  ButtonsUl,
  ButtonLi,
  IconDark,
  IconLight,
} from "./Style";
import CustomSelect from "../../../SubComponents/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusMode } from "../../../Redux/Actions/BooleanDataActions";
const TopButtons = () => {
  const booleanData = useSelector((state) => state.booleanData);
  const dataStatic = useSelector((state) => state.dataStatic);
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>Welcome to our store</Text>
      <ButtonWrapper>
        <ButtonsUl>
          <ButtonLi>
            {" "}
            <CustomSelect
              isMulti={false}
              autoFocus={true}
              placeholder="Setting"
              data={dataStatic.dataSetting}
            />
          </ButtonLi>
          <ButtonLi>
            {" "}
            <CustomSelect
              isMulti={false}
              autoFocus={true}
              placeholder="En"
              data={dataStatic.dataLanguage}
            />
          </ButtonLi>
          <ButtonLi>
            {" "}
            <CustomSelect
              isMulti={false}
              autoFocus={true}
              placeholder="USD"
              data={dataStatic.dataCurrency}
            />
          </ButtonLi>
          <ButtonLi
            onClick={() => dispatch(changeStatusMode(!booleanData.isMode))}
          >
            {booleanData.isMode ? <IconDark /> : <IconLight />}
          </ButtonLi>
        </ButtonsUl>
      </ButtonWrapper>
    </Container>
  );
};

export default TopButtons;
