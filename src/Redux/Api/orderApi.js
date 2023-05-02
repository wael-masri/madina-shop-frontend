

import OrderApi from "../../Api/OrderApi";
import {
  fetchDataRequestOrder,
  fetchDataSuccessOrder,
  fetchDataFailureOrder,
 
} from "../Actions/OrderActions";

export const getOrders = async (dispatch,action) => {
  dispatch(fetchDataRequestOrder());
  try {
    const response = await OrderApi.getAll(action);
    response && dispatch(fetchDataSuccessOrder(response));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureOrder(msg));
  }
};

