import React from "react";
import {
  Title,
  Wrapper,
  WrapperAvgRating,
  WrapperCountReviews,
  WrapperCardReview,
  WrapperButtonShowMore,
  ButtonShowMore,
  IconDown,
  IconUp,
} from "./Style";
import RatingItem from "../RatingItem";
import CardReview from "../CardReview";
import FormReview from "../FormReview";
import { useDispatch, useSelector } from "react-redux";
import ReviewApi from "../../Api/ReviewApi";
import {
  resetPageReview,
  setPageReview,
} from "../../Redux/Actions/DataStaticActions";
import { changeStatusReview } from "../../Redux/Actions/BooleanDataActions";
import { ReviewLoading } from "../../LoadingTemplates";
import { toast } from "react-toastify";


const ReviewProduct = () => {

  const loadingArr = ["1", "2"];
  const productId = useSelector((state) => state.product.dataById);
  const reviews = useSelector((state) => state.review);
  const paginationPage = useSelector((state) => state.dataStatic);
  const dispatch = useDispatch();
  const handleDeleteComment = async (id) => {
    const rmv = await ReviewApi.delete(id);
    if (rmv) {
      dispatch(resetPageReview());
      dispatch(changeStatusReview());
      toast("Your Comment has been deleted", { containerId: "F" });
    }
  };
  return (
    <>
      <Wrapper>
        <Title>Reviews</Title>
        <WrapperAvgRating>
          <RatingItem nb={(productId.rating && productId.rating) || 0} />
          <WrapperCountReviews>
            ({(productId.ratingSum && productId.ratingSum) || 0} Reviews)
          </WrapperCountReviews>
        </WrapperAvgRating>
      </Wrapper>
      <WrapperCardReview>
        <FormReview />
        {!reviews.loading
          ? reviews.pagination.map((val, index) => {
              return (
                <CardReview
                  key={val._id}
                  data={val}
                  handleDeleteComment={handleDeleteComment}
                />
              );
            })
          : loadingArr.map((val, index) => {
              return (
               <ReviewLoading key={index} />
              );
            })}
        {reviews.pagination.length !== 0 && (
          <WrapperButtonShowMore>
            {reviews.data.paginationResult &&
            reviews.data.paginationResult.numberOfPages ===
              paginationPage.pageReview ? (
              <ButtonShowMore
                onClick={() =>
                  dispatch(
                    setPageReview(
                      -reviews.data.paginationResult.numberOfPages + 1
                    )
                  )
                }
              >
                {reviews.loading ? "Loading.." : "Show Less"} <IconUp />
              </ButtonShowMore>
            ) : (
              <ButtonShowMore onClick={() => dispatch(setPageReview(1))}>
                {reviews.loading ? "Loading.." : "Show More"}
                <IconDown />
              </ButtonShowMore>
            )}
          </WrapperButtonShowMore>
        )}
      </WrapperCardReview>
    </>
  );
};

export default ReviewProduct;
