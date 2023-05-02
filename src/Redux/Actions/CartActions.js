import CartApi from "../../Api/CartApi";
import {
  FETCH_DATA_FAILURE_CART,
  FETCH_DATA_REQUEST_CART,
  FETCH_DATA_SUCCESS_CART,
  REMOVE_ITEM_CART,
  UPDATE_ITEM_CART,
  CLEAR_ALL_CART,
  APPLY_COUPON,
  CLEAR_ACCOUNT,
} from "../Types/CartTypes";

export const fetchDataRequestCart = () => {
  const action = {
    type: FETCH_DATA_REQUEST_CART,
  };
  return action;
};
export const fetchDataSuccessCart = (data) => {
  const action = {
    type: FETCH_DATA_SUCCESS_CART,
    payload: data,
  };
  return action;
};
export const fetchDataFailureCart = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE_CART,
    payload: error,
  };
  return action;
};

export const removeCartItem = async (dispatch, id) => {
  const result = await CartApi.delete(id);
  if (result) {
    const action = {
      type: REMOVE_ITEM_CART,
      payload: result,
    };
    return dispatch(action);
  }
};
export const updateCartItem = async (dispatch, id, data) => {
  const result = await CartApi.updateQuantity(id, data);
  if (result) {
    const action = {
      type: UPDATE_ITEM_CART,
      payload: result,
    };
    return dispatch(action);
  }
};

export const clearAllCart = async (dispatch) => {
  const result = await CartApi.clearAll();
  if (result) {
    const action = {
      type: CLEAR_ALL_CART,
    };
    return dispatch(action);
  }
};
export const applyCouponCart = async (dispatch, coupon) => {
  await CartApi.applyCoupon(coupon)
    .then((result) => {
      const action = {
        type: APPLY_COUPON,
        payload: result,
      };
      return dispatch(action);
    })
    .catch((err) => {
      const action = {
        type: APPLY_COUPON,
        errCoupon: err && err.data.message,
      };
      return dispatch(action);
    });
};

export const clearAccount = () => {
  const action = {
    type: CLEAR_ACCOUNT,
  };
  return action;
};
