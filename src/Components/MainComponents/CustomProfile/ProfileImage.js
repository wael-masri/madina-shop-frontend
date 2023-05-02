import React, { useState } from "react";
import {
  ContainerComp,
  WrapperTtitle,
  Title,
  SubTitle,
  ButtonSaveInfo,
  WrapperButtonSaveInfo,
} from "./Style";
import UploadImage from "./AboutUploadImage/UploadImage";
import CropImage from "./AboutUploadImage/CropImage";
import { useSelector } from "react-redux";
import UserApi from "../../../Api/UserApi";
import { useNavigate } from "react-router-dom";
const ProfileImage = () => {
  const Navigate = useNavigate();
  const userLogin = useSelector((state) => state.dataStatic.userLogin);
  const [imageUp, setImageUp] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [openCrop, setOpenCrop] = useState(false);
  const [imgAfterCrop, setImgAfterCrop] = useState(null);
  const [imTyping, setImTyping] = useState(false);
  const handleUpdateImageProfile = async () => {
    if (imgAfterCrop !== null) {
      let onjectImage = {};
      let formData = new FormData();
      formData.append("profileImage", imgAfterCrop);
      const res = await UserApi.updateImage(formData);

      if (res && res.data) {
        onjectImage.profileImage = res.data;
        const response = await UserApi.update(userLogin._id, onjectImage);
        response && Navigate("/");
      }
    }
  };
  return (
    <ContainerComp>
      <WrapperTtitle>
        <Title>Change Photo</Title>
        <SubTitle>Add a nice photo of yourself for your profile.</SubTitle>
      </WrapperTtitle>
      <UploadImage
        imageUp={imageUp}
        urlImage={urlImage}
        setUrlImage={setUrlImage}
        setImageUp={setImageUp}
        setOpenCrop={setOpenCrop}
        setImgAfterCrop={setImgAfterCrop}
        dataImage={userLogin.profileImage}
        setImTyping={setImTyping}
      />
      <WrapperButtonSaveInfo>
        <ButtonSaveInfo onClick={() => handleUpdateImageProfile()}>
          Update
        </ButtonSaveInfo>
      </WrapperButtonSaveInfo>
      {openCrop ? (
        <CropImage
          setOpenCrop={setOpenCrop}
          setUrlImage={setUrlImage}
          setImageUp={setImageUp}
          imageUp={imageUp}
          setImgAfterCrop={setImgAfterCrop}
        />
      ) : null}
    </ContainerComp>
  );
};

export default ProfileImage;
