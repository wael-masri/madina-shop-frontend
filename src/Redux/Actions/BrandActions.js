import {
    FETCH_DATA_FAILURE_BRAND,
    FETCH_DATA_REQUEST_BRAND,
    FETCH_DATA_SUCCESS_BRAND,
   
  } from "../Types/BrandTypes";
 
  export const fetchDataRequestBrand = () => {
    const action = {
      type: FETCH_DATA_REQUEST_BRAND,
    };
    return action;
  };
  export const fetchDataSuccessBrand = (data) => {
    const action = {
      type: FETCH_DATA_SUCCESS_BRAND,
      payload: data,
      
    };
    return action;
  };
  export const fetchDataFailureBrand = (error) => {
    const action = {
      type: FETCH_DATA_FAILURE_BRAND,
      payload: error,
    };
    return action;
  };


 
 
   
  
  