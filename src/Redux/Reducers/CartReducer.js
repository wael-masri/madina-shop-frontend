import {
  APPLY_COUPON,
  CLEAR_ACCOUNT,
  CLEAR_ALL_CART,
  FETCH_DATA_FAILURE_CART,
  FETCH_DATA_REQUEST_CART,
  FETCH_DATA_SUCCESS_CART,
  REMOVE_ITEM_CART,
  UPDATE_ITEM_CART,
} from "../Types/CartTypes";

const initialState = {
  data: {},
  loading: false,
  error: "",
  errorCoupon:""
};

const CartReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_CART:
      newState = { ...state };
      newState.loading = true;
      return newState;
    case FETCH_DATA_SUCCESS_CART:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;
    case FETCH_DATA_FAILURE_CART:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;
    case REMOVE_ITEM_CART:
      newState = { ...state };
      newState.data = action.payload;
      return newState;

    case UPDATE_ITEM_CART:
      newState = { ...state };
      newState.data = action.payload;
      return newState;

    case CLEAR_ALL_CART:
      newState = { ...state };
      newState.data = {};
      return newState;

    case APPLY_COUPON:
      newState = { ...state };
      if (action.payload) {
        newState.data = action.payload;
        newState.errorCoupon = "";
      }
      if (action.errCoupon) {
        newState.errorCoupon = action.errCoupon;
      }

      return newState;

    case CLEAR_ACCOUNT:
      newState = { ...state };
      newState.data = {};
      return newState;
    default:
      return state;
  }
};
export default CartReducer;
