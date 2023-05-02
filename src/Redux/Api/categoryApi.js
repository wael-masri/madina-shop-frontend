
import CategoryApi from "../../Api/CategoryApi";
import {
  fetchDataRequestCategory,
  fetchDataSuccessCategory,
  fetchDataFailureCategory,
 
} from "../Actions/CategoryActions";

export const getCategories = async (dispatch,limit) => {
  dispatch(fetchDataRequestCategory());
  try {
    const response = await CategoryApi.getAll(limit);
    response && dispatch(fetchDataSuccessCategory(response));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureCategory(msg));
  }
};

