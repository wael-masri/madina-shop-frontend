import React, { useState } from "react";
import RatingItem from "./RatingItem";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import loadingButton from "../../Assets/Images/LoadingButton.gif";
import {
  Container,
  TextAreaReview,
  Wrapper,
  LabelText,
  WrapperRadioButtons,
  WrapperSubmitForm,
  ButtonSubmitForm,
  Line,
  ErrMsg,
} from "./Style";
import { useDispatch, useSelector } from "react-redux";
import ReviewApi from "../../Api/ReviewApi";
import { resetPageReview } from "../../Redux/Actions/DataStaticActions";
import { useLocation, useNavigate } from "react-router-dom";
import { changeStatusReview } from "../../Redux/Actions/BooleanDataActions";
import { LoadButton } from "../../Assets/CustomCss/GlobalStyles";
import { toast } from "react-toastify";
const FormReview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const idUser = useSelector((state) => state.dataStatic);
  const [ratingValue, setRatingValue] = useState(1);
  const [isLoad, setIsLoad] = useState(false);



  const ReviewSchema = yup.object().shape({
    title: yup
      .string()
      .required("Comment Required!")
      .min(3, "Comment is too short!")
      .max(200, "Comment is too long!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(ReviewSchema),
  });
  const handleChangeRating = (val) => {
    setRatingValue(val);
  };
  const handleSubmitReview = async (data) => {
    if (idUser.userLogin._id) {
      setIsLoad(true);
      const newComment = { ...data };
      newComment.rating = ratingValue;
      newComment.title = newComment.title.trim();
      newComment.user = idUser.userLogin._id;
      newComment.product = location.state;

      try {
        const comment = await ReviewApi.create(newComment);
        if (comment) {
          dispatch(resetPageReview());
          dispatch(changeStatusReview());
          toast("Comment has been sent", { containerId: "S" });
          reset();
          setIsLoad(false);
        }
        setRatingValue(1);
      } catch (err) {
        err &&
          toast("You have already commented on this product !", {
            containerId: "F",
          });
        reset();
        setIsLoad(false);
        setRatingValue(1);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit(handleSubmitReview)}>
          <LabelText>Your Comment</LabelText>
          <TextAreaReview
            placeholder="Write a review.."
            {...register("title")}
          ></TextAreaReview>
          <ErrMsg>{errors.title?.message}</ErrMsg>
          <WrapperRadioButtons>
            <LabelText>Choose your rating:</LabelText>
            <RatingItem
              ratingValue={ratingValue}
              handleChangeRating={handleChangeRating}
            />
          </WrapperRadioButtons>
          <WrapperSubmitForm>
            {isLoad ? (
              <ButtonSubmitForm load="true">
                SEND REVIEW
                <LoadButton src={loadingButton} alt="load" />
              </ButtonSubmitForm>
            ) : (
              <ButtonSubmitForm type="submit">SEND REVIEW</ButtonSubmitForm>
            )}
          </WrapperSubmitForm>
        </form>
      </Wrapper>
      <Line />
    </Container>
  );
};

export default FormReview;
