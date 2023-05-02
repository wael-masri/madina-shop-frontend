import {
  FETCH_DATA_FAILURE_PRODUCT,
  FETCH_DATA_REQUEST_PRODUCT,
  FETCH_DATA_SUCCESS_PRODUCT,
  FETCH_DATA_SUCCESS_PRODUCT_BY_ID,
  FETCH_DATA_PRODUCT_RELATED,
  FETCH_DATA_REQUEST_Related_PRODUCT,
  FETCH_DATA_FAILURE_Related_PRODUCT,
  FETCH_DATA_FAILURE_PRODUCT_BY_ID,
  FETCH_DATA_REQUEST_PRODUCT_BY_ID,
  FETCH_DATA_REQUEST_PRODUCT_FILTERED,
  FETCH_DATA_SUCCESS_PRODUCT_FILTERED,
} from "../Types/ProductTypes";

const initialState = {
  data: {},
  dataById: {},
  dataRelated: [],
  dataFiltered: [],
  loadingRelated: false,
  errorRelated: "",
  loadingById: false,
  errorById: "",
  loading: false,
  error: "",
  loadingFiltered: false,
  errorFiltered: "",
};

const ProductReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_PRODUCT:
      newState = { ...state };
      newState.loading = true;
      return newState;
    case FETCH_DATA_REQUEST_PRODUCT_FILTERED:
      newState = { ...state };
      newState.loadingFiltered = true;
      return newState;
    case FETCH_DATA_REQUEST_Related_PRODUCT:
      newState = { ...state };
      newState.loadingRelated = true;
      return newState;
    case FETCH_DATA_REQUEST_PRODUCT_BY_ID:
      newState = { ...state };
      newState.loadingById = true;
      return newState;
    case FETCH_DATA_SUCCESS_PRODUCT:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;
    case FETCH_DATA_SUCCESS_PRODUCT_FILTERED:
      newState = { ...state };
      newState.loadingFiltered = false;
      newState.dataFiltered = action.payload;
      return newState;
    case FETCH_DATA_SUCCESS_PRODUCT_BY_ID:
      newState = { ...state };
      newState.loadingById = false;
      newState.dataById = action.payload;
      return newState;
    case FETCH_DATA_FAILURE_PRODUCT:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;
    case FETCH_DATA_FAILURE_PRODUCT:
      newState = { ...state };
      newState.loadingFiltered = false;
      newState.errorFiltered = action.payload;
      return newState;
    case FETCH_DATA_FAILURE_Related_PRODUCT:
      newState = { ...state };
      newState.loadingRelated = false;
      newState.errorRelated = action.payload;
      return newState;
    case FETCH_DATA_FAILURE_PRODUCT_BY_ID:
      newState = { ...state };
      newState.loadingById = false;
      newState.errorById = action.payload;
      return newState;
    case FETCH_DATA_PRODUCT_RELATED:
      newState = { ...state };
      newState.loadingRelated = false;
      newState.dataRelated = action.payload;
      return newState;
    default:
      return state;
  }
};
export default ProductReducer;
