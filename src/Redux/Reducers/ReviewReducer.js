import {
  FETCH_DATA_FAILURE_REVIEW,
  FETCH_DATA_REQUEST_REVIEW,
  FETCH_DATA_SUCCESS_REVIEW,
} from "../Types/ReviewTypes";

const initialState = {
  data: {},
  pagination: [],
  loading: false,
  error: "",
};

const ReviewReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_REVIEW:
      newState = { ...state };
      newState.loading = true;
      return newState;
    case FETCH_DATA_SUCCESS_REVIEW:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      if (action.page === 1) {
        newState.pagination = action.payload.data;
      } else {
        newState.pagination = newState.pagination.concat(action.payload.data);
      }

      return newState;
    case FETCH_DATA_FAILURE_REVIEW:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;

    default:
      return state;
  }
};
export default ReviewReducer;
