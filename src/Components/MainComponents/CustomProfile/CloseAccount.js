import React from "react";
import {
  ContainerComp,
  WrapperTtitle,
  Title,
  SubTitle,
  WrapperText,
  LabelWarning,
  ButtonCloseAccount,
} from "./Style";
import secureLocalStorage from "react-secure-storage";
import { useDispatch, useSelector } from "react-redux";
import UserApi from "../../../Api/UserApi";
import { useNavigate } from "react-router-dom";
import { logOutAccount } from "../../../Redux/Actions/DataStaticActions";
import { clearAccount } from "../../../Redux/Actions/CartActions";
const CloseAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.dataStatic.userLogin);
  const handleCloseAccount = async () => {
    let objectUp = {};
    objectUp.active = false;

    try {
      const res = await UserApi.update(userLogin._id, objectUp);

      if (res) {
        dispatch(logOutAccount());
        dispatch(clearAccount());
        secureLocalStorage.clear();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ContainerComp>
      <WrapperTtitle>
        <Title>Close Account</Title>
        <SubTitle>Close your account permanently.</SubTitle>
        <WrapperText>
          <LabelWarning>Warning :</LabelWarning> If you close your account, you
          will be unsubscribed, and will lose access forever.
        </WrapperText>
        <ButtonCloseAccount onClick={() => handleCloseAccount()}>
          Close Account
        </ButtonCloseAccount>
      </WrapperTtitle>
    </ContainerComp>
  );
};

export default CloseAccount;
