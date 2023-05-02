import {
    FETCH_DATA_FAILURE_CATEGORY,
    FETCH_DATA_REQUEST_CATEGORY,
    FETCH_DATA_SUCCESS_CATEGORY,
  } from "../Types/CategoryTypes";
  
  const initialState = {
    data: {},
    loading: false,
    error: "",
  };
  
  const CategoryReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
      case FETCH_DATA_REQUEST_CATEGORY:
        newState = { ...state };
        newState.loading = true;
        return newState;
      case FETCH_DATA_SUCCESS_CATEGORY:
        newState = { ...state };
        newState.loading = false;
        newState.data = action.payload;
        return newState;
      case FETCH_DATA_FAILURE_CATEGORY:
        newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
        return newState;
  
      default:
        return state;
    }
  };
  export default CategoryReducer;
  