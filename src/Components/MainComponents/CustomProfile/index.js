import React, { useEffect } from "react";
import {
  Container,
  Wrapper,
  FirstWrapper,
  SecondWrapper,
  IconMenu,
  IconCloseMenu,
} from "./Style";

import SubHeader from "./SubHeader";
import MenuSide from "./MenuSide";
import { useState } from "react";
import CloseAccount from "./CloseAccount";
import ChangePasswrod from "./ChangePasswrod";
import ProfileImage from "./ProfileImage";
import PersonalInformation from "./PersonalInformation";

const CustomProfile = () => {
  const [countItemMenu, setCountItemMenu] = useState(1);
  const [isOpenMneu, setIsOpenMneu] = useState(false);

  return (
    <Container>
      <SubHeader />
      <Wrapper>
        {isOpenMneu ? <IconCloseMenu onClick={() => setIsOpenMneu(!isOpenMneu)} /> : <IconMenu onClick={() => setIsOpenMneu(!isOpenMneu)} />}
        <FirstWrapper hide={isOpenMneu}>
          
            <MenuSide
            setIsOpenMneu={setIsOpenMneu}
            isOpenMneu={isOpenMneu}
              countItemMenu={countItemMenu}
              setCountItemMenu={setCountItemMenu}
            />
          
        </FirstWrapper>
        <SecondWrapper>
          {countItemMenu === 1 ? (
            <PersonalInformation />
          ) : countItemMenu === 2 ? (
            <ProfileImage />
          ) : countItemMenu === 3 ? (
            <ChangePasswrod />
          ) : (
            <CloseAccount />
          )}
        </SecondWrapper>
      </Wrapper>
    </Container>
  );
};

export default CustomProfile;
