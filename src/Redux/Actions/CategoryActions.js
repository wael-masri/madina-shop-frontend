import {
    FETCH_DATA_FAILURE_CATEGORY,
    FETCH_DATA_REQUEST_CATEGORY,
    FETCH_DATA_SUCCESS_CATEGORY,
   
  } from "../Types/CategoryTypes";
 
  export const fetchDataRequestCategory = () => {
    const action = {
      type: FETCH_DATA_REQUEST_CATEGORY,
    };
    return action;
  };
  export const fetchDataSuccessCategory = (data) => {
    const action = {
      type: FETCH_DATA_SUCCESS_CATEGORY,
      payload: data,
      
    };
    return action;
  };
  export const fetchDataFailureCategory = (error) => {
    const action = {
      type: FETCH_DATA_FAILURE_CATEGORY,
      payload: error,
    };
    return action;
  };


 
 
   
  
  