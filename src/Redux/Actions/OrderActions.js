import OrderApi from "../../Api/OrderApi";
import {
    FETCH_DATA_FAILURE_ORDER,
    FETCH_DATA_REQUEST_ORDER,
    FETCH_DATA_SUCCESS_ORDER,
    UPDATE_ORDER_REFUND,
   
  } from "../Types/OrderTypes";
 
  export const fetchDataRequestOrder = () => {
    const action = {
      type: FETCH_DATA_REQUEST_ORDER,
    };
    return action;
  };
  export const fetchDataSuccessOrder = (data) => {
    const action = {
      type: FETCH_DATA_SUCCESS_ORDER,
      payload: data,
      
    };
    return action;
  };
  export const fetchDataFailureOrder = (error) => {
    const action = {
      type: FETCH_DATA_FAILURE_ORDER,
      payload: error,
    };
    return action;
  };
  export const UpdateOrderRefund = async (dispatch,refund,orderId) => {
    const res = await OrderApi.updateRefund(orderId,refund);
    if(res){
      const action = {
        type: UPDATE_ORDER_REFUND,
        orderId
      };
      return dispatch(action);
    }
    
  };


 
 
   
  
  