import {
    FETCH_DATA_FAILURE_BRAND,
    FETCH_DATA_REQUEST_BRAND,
    FETCH_DATA_SUCCESS_BRAND,
  } from "../Types/BrandTypes";
  
  const initialState = {
    data: {},
    loading: false,
    error: "",
  };
  
  const BrandReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
      case FETCH_DATA_REQUEST_BRAND:
        newState = { ...state };
        newState.loading = true;
        return newState;
      case FETCH_DATA_SUCCESS_BRAND:
        newState = { ...state };
        newState.loading = false;
        newState.data = action.payload;
        return newState;
      case FETCH_DATA_FAILURE_BRAND:
        newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
        return newState;
  
      default:
        return state;
    }
  };
  export default BrandReducer;
  