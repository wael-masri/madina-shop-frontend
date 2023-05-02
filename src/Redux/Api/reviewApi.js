
import ReviewApi from "../../Api/ReviewApi";
import {
  fetchDataRequestReview,
  fetchDataSuccessReview,
  fetchDataFailureReview,
 
} from "../Actions/ReviewActions";

export const getReviews = async (dispatch,id,limit,page) => {
  dispatch(fetchDataRequestReview());
  try {
    const response = await ReviewApi.getByProduct(id,limit,page);
    response && dispatch(fetchDataSuccessReview(response,page));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureReview(msg));
  }
};

