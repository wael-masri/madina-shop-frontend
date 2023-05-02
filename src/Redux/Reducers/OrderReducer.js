import {
  FETCH_DATA_FAILURE_ORDER,
  FETCH_DATA_REQUEST_ORDER,
  FETCH_DATA_SUCCESS_ORDER,
  UPDATE_ORDER_REFUND,
} from "../Types/OrderTypes";

const initialState = {
  data: {},
  loading: false,
  error: "",
};

const OrderReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_ORDER:
      newState = { ...state };
      newState.loading = true;
      return newState;
    case FETCH_DATA_SUCCESS_ORDER:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;
    case FETCH_DATA_FAILURE_ORDER:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;
    case UPDATE_ORDER_REFUND:
      newState = { ...state };
      let newArr = newState.data.data.filter(
        (val) => val._id !== action.orderId
      );
      newState.data.data = newArr;
      return newState;
    default:
      return state;
  }
};
export default OrderReducer;
