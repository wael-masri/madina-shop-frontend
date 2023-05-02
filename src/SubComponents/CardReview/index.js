import React from "react";
import {
  Wrapper,
  WrapperImageCover,
  ImageCover,
  WrapperInfo,
  WrapperHeader,
  WrapperNameRating,
  WrapperDate,
  TextComment,
  Line,
  NameUser,
  Container,
  IconDelComment,
  WrapperDateDelete,
  WrapperReply,
  LabelReply,
} from "./Style";
import { customConfirmation } from "../CustomConfirmation";
import moment from "moment";
import RatingItem from "../RatingItem";
import { useSelector } from "react-redux";
import noImage from "../../Assets/Images/noImage.png";

const CardReview = ({ data, handleDeleteComment }) => {
  const dataStatic = useSelector((state) => state.dataStatic);
  const functDelete = () => {
    const id = data._id;
    handleDeleteComment(id);
   
  };
  return (
    <Container>
      <Wrapper>
        <WrapperImageCover>
          {data.user &&
          (data.user.imageGoogle !== "" || data.user.profileImage !== "") ? (
            <ImageCover
              src={
                data.user.imageGoogle && data.user.imageGoogle !== ""
                  ? data.user.imageGoogle
                  : data.user.profileImage
              }
              alt="coverreview"
            />
          ) : (
            <ImageCover src={noImage} alt="coverreview" />
          )}
        </WrapperImageCover>
        <WrapperInfo>
          <WrapperHeader>
            <WrapperNameRating>
              <NameUser>{data.user && data.user.name}</NameUser>
              <RatingItem nb={data.rating || 0} />
            </WrapperNameRating>
            <WrapperDateDelete>
              <WrapperDate>
                {moment(data.createdAt).format("ddd MMM DD YYYY")}
              </WrapperDate>
              {data.user && data.user._id === dataStatic.userLogin._id ? (
                <IconDelComment
                  onClick={() =>
                    customConfirmation(
                      functDelete,
                      "Madina Shop",
                      "Are you sure to delete your comment?"
                    )
                  }
                />
              ) : null}
            </WrapperDateDelete>
          </WrapperHeader>
          <TextComment>{data && data.title}</TextComment>
          {data.reply ? (
            <WrapperReply>
              <LabelReply>Replied :</LabelReply>
              {data && data.reply}
            </WrapperReply>
          ) : null}
        </WrapperInfo>
      </Wrapper>
      <Line />
    </Container>
  );
};

export default CardReview;
