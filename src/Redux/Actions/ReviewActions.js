import {
    FETCH_DATA_FAILURE_REVIEW,
    FETCH_DATA_REQUEST_REVIEW,
    FETCH_DATA_SUCCESS_REVIEW,
   
  } from "../Types/ReviewTypes";
 
  export const fetchDataRequestReview = () => {
    const action = {
      type: FETCH_DATA_REQUEST_REVIEW,
    };
    return action;
  };
  export const fetchDataSuccessReview = (data,page) => {
    const action = {
      type: FETCH_DATA_SUCCESS_REVIEW,
      payload: data,
      page:page
    };
    return action;
  };
  export const fetchDataFailureReview = (error) => {
    const action = {
      type: FETCH_DATA_FAILURE_REVIEW,
      payload: error,
    };
    return action;
  };


 
 
   
  
  